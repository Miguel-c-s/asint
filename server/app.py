from flask import Flask
from flask import render_template
from flask import request, send_from_directory, redirect, jsonify
import requests
import jwt
import datetime
import json

import time
import threading
import math
import random

from connections import DBConnection, RabbitConnection
from admin import Admin
from users import Users
from bots import Bots

db = DBConnection.db
connection = RabbitConnection.rabbit


def keep_alive():
    while True:
        time.sleep(45)
        with RabbitConnection.p_lock:
            connection.sleep(0.01)


def initialize():
    channel = connection.channel()
    buildings = db.buildings.find({})
    for b in buildings:
        channel.exchange_declare(exchange= b['id'], exchange_type='fanout')
    channel.close()

    t = threading.Thread(target=keep_alive)
    t.daemon = True  # thread dies when main thread (only non-daemon thread) exits.
    t.start()


def get_payload(request):
    token = request.headers['Authorization']
    try:
        payload = jwt.decode(token, 'SECRET', algorithms=['HS256'])
    except:
        return None
    return payload


app = Flask(__name__)


###Website###

@app.route('/')
def root():
  return app.send_static_file('app/index.html')


@app.route('/<path:path>')
def static_proxy(path):
  return app.send_static_file('app/'+path)


@app.route('/api/getBuildings')
def get_Buildings():
    db_buildings = db.buildings.find({})

    buildings = []

    for building in db_buildings:
        buildings.append({'id':building['id'], 'name':building['name']})

    res = {'buildings':buildings, 'error':0}
    return jsonify(res)


###Admin###

@app.route('/api/admin/login', methods=['POST'])
def login_admin():
    data = json.loads(request.data)
    user = data['user']
    pw = data['pw']
    if user == 'admin' and pw == '123':
        token = jwt.encode({'user':user, 'exp':datetime.datetime.utcnow() + datetime.timedelta(seconds = 3600)}, 'SECRET', algorithm = 'HS256')
        res = {'token':token, 'error':0}
        return jsonify(res)
    else:
        res = {'token': '', 'error':1}
        return jsonify(res)


@app.route('/api/admin/updateBuildings', methods=['POST'])
def update_buildings():
    data = json.loads(request.data)
    buildings = data['buildings']

    payload = get_payload(request)
    if payload == None:
        res = {'error':1, 'data':'Invalid token!'}
        return jsonify(res)

    Admin.update_buildings(buildings)
    res = {'error': 0}
    return jsonify(res)


@app.route('/api/admin/getAllUsers')
def get_all_users():
    payload = get_payload(request)
    if payload == None:
        res = {'error':1, 'data':'Invalid token!'}
        return jsonify(res)

    all_users = Admin.get_all_users()
    res = {'all_users':all_users, 'error':0}
    return jsonify(res)


@app.route('/api/admin/getUsers/<building>')
def get_users(building):
    payload = get_payload(request)
    if payload == None:
        res = {'error':1, 'data':'Invalid token!'}
        return jsonify(res)

    all_users = Admin.get_users(building)
    res = {'all_users': all_users, 'error':0}
    return jsonify(res)


@app.route('/api/admin/getLogs/userMessages/<istid>/<mode>/<days>')
def logs_user_messages(istid, mode, days):
    payload = get_payload(request)
    if payload == None:
        res = {'error':1, 'data':'Invalid token!'}
        return jsonify(res)

    msgs = Admin.logs_user_messages(istid, mode, days)
    res = {'msgs': msgs, 'error': 0}
    return jsonify(res)


@app.route('/api/admin/getLogs/userLocations/<istid>/<days>')
def logs_user_locations(istid, days):
    payload = get_payload(request)
    if payload == None:
        res = {'error':1, 'data':'Invalid token!'}
        return jsonify(res)

    locations = Admin.logs_user_locations(istid, days)
    res = {'locations': locations, 'error': 0}
    return jsonify(res)


@app.route('/api/admin/getLogs/building/<b_id>/<days>')
def logs_buildings(b_id, days):
    payload = get_payload(request)
    if payload == None:
        res = {'error':1, 'data':'Invalid token!'}
        return jsonify(res)

    msgs = Admin.logs_buildings(b_id, days)
    res = {'msgs': msgs, 'error': 0}
    return jsonify(res)


###Users###

@app.route('/api/users/login')
def users_login():
    #receive code
    code = request.args.get('code')
    if code != None:
        if code != 't1' and code != 't2': ## PARA TESTES
            #Fenix app configs
            client_id = "***REMOVED***"
            client_secret = "***REMOVED***"
            redirect_uri = "http://localhost:5000"
            grant_type = "authorization_code"
            data = {'client_id':client_id, 'client_secret':client_secret, 'redirect_uri':redirect_uri, 'code':code, 'grant_type':grant_type}
            #send code and receive access_token
            r = requests.post('https://fenix.tecnico.ulisboa.pt/oauth/access_token', data = data)
            access_token = r.json()['access_token']
            #get istid
            r = requests.get('https://fenix.tecnico.ulisboa.pt/api/fenix/v1/person', params = {'access_token':access_token})
            istid = r.json()['username']
        else: ## PARA TESTES
            if code == 't1':
                istid = "ist_test1"
            elif code == 't2':
                istid = "ist_test2"
        #generate jwt token
        token = jwt.encode({'istid':istid, 'exp':datetime.datetime.utcnow() + datetime.timedelta(seconds = 3600)}, 'SECRET', algorithm = 'HS256')
        distance = Users.users_login(istid)

    #send jwt token
    res = {'token':token, 'distance':distance, 'error':0}
    return jsonify(res)


@app.route('/api/users/sendLocation', methods=['POST'])
def send_location():
    payload = get_payload(request)
    if payload == None:
        res = {'error':1, 'data':'Invalid token!'}
        return jsonify(res)

    data = json.loads(request.data)
    latitude = data['latitude']
    longitude = data['longitude']

    istid = payload['istid']

    building = Users.send_location(istid, latitude, longitude)
    res = {'data':'OK', 'building':building, 'error':0}
    return jsonify(res)


@app.route('/api/users/sendMessage', methods=['POST'])
def send_message():
    payload = get_payload(request)
    if payload == None:
        res = {'error':1, 'data':'Invalid token!'}
        return jsonify(res)

    istid = payload['istid']

    data = json.loads(request.data)

    Users.send_message(istid, data)
    res = {'data':'OK', 'error':0}
    return jsonify(res)


@app.route('/api/users/getMessages')
def get_messages():
    payload = get_payload(request)
    if payload == None:
        res = {'error':1, 'data':'Invalid token!'}
        return jsonify(res)
    istid = payload['istid']

    messages = Users.get_messages(istid)
    res = {'messages':messages, 'error':0}
    return jsonify(res)


@app.route('/api/users/setDistance', methods=['POST'])
def set_distance():
    payload = get_payload(request)
    if payload == None:
        res = {'error':1, 'data':'Invalid token!'}
        return jsonify(res)

    data = json.loads(request.data)
    distance = data['distance']

    istid = payload['istid']

    Users.set_distance(istid, distance)
    res = {'data':'OK', 'error':0}
    return jsonify(res)


@app.route('/api/users/getNearbyUsers')
def get_nearby_users():
    payload = get_payload(request)
    if payload == None:
        res = {'error':1, 'data':'Invalid token!'}
        return jsonify(res)

    istid = payload['istid']

    location, building = Users.get_nearby_users(istid)
    res = {'users':{'location':location, 'building':building}, 'error':0}
    return jsonify(res)


### BOTS

@app.route('/api/bots/login', methods=['POST'])
def bots_login():
    data = json.loads(request.data)
    building = data['building']
    bot_id = random.randrange(100000, 999999, 1) # 6 number id
    bot_id = "bot" + str(bot_id)
    token = jwt.encode({'bot_id':bot_id, 'building': building}, 'SECRET', algorithm = 'HS256')
    res = {'bot_id': bot_id, 'token':token, 'error':0}
    return jsonify(res)


@app.route('/api/bots/message', methods=['POST'])
def bots_msg():
    payload = get_payload(request)
    if payload == None:
        res = {'error':1, 'data':'Invalid token!'}
        return jsonify(res)

    data = json.loads(request.data)
    building = payload['building']
    bot_id = payload['bot_id']

    Bots.bots_msg(data, bot_id, building)
    res = {'error':0}
    return jsonify(res)


def main():
    initialize()
    app.run()


if __name__ == '__main__':
    main()
