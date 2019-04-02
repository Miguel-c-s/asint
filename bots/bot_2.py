import time
import requests
import json


server = "http://127.0.0.1:5000"

_token = "default_token"


def login():
    global _token
    ep =  "/api/bots/login"
    res = requests.get(server + '/api/getBuildings')
    buildings = res.json()['buildings']

    for it, b in enumerate(buildings):
        print(it, ":", b['name'])

    i = int(input("Which building do you wanna send messages? "))

    data = {"building":buildings[i]['id']}
    data = json.dumps(data)
    req = requests.post(server + ep, data = data)
    error = req.json()['error']
    if error == 1:
        print("Failed Login bot.")
        exit()
    token = req.json()['token']
    _token = token


def send_msg():
    global _token
    ep =  "/api/bots/message"
    res = requests.get('http://api.icndb.com/jokes/random')
    message = res.json()['value']['joke']
    data = {"message": message}
    #print(_token, "\n", message)
    data = json.dumps(data)
    req = requests.post(server + ep, data = data, headers={'Authorization':_token})
    error = req.json()['error']


def main():
    login()
    while True:
        send_msg()
        time.sleep(15)

if __name__ == "__main__":
    main()
