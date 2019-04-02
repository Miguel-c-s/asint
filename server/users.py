import datetime
from connections import DBConnection, RabbitConnection
from utils import checkBuildings, getDistance

db = DBConnection.db
connection = RabbitConnection.rabbit

class Users:
    @classmethod
    def users_login(cls, istid):
        #find user in users collection
        user = db.users.find_one({'istid':istid})
        if user == None:
            #if not present register the user
            buildings = []
            distance = 10
            db.users.insert_one({'istid':istid, 'latitude':0, 'longitude':0, 'distance':distance, 'buildings':buildings})
        else:
            distance = user['distance']

        # Create queue if needed
        with RabbitConnection.p_lock:
            channel = connection.channel()
            channel.queue_declare(queue=istid)
            channel.close()
        return distance

    @classmethod
    def send_location(cls, istid, latitude, longitude):
        db.users.update_one({'istid':istid}, {'$set':{'latitude':latitude, 'longitude':longitude}})
        db.logs_locations.insert_one({'istid':istid, 'latitude':latitude, 'longitude':longitude, 'date':datetime.datetime.utcnow()})
        building = checkBuildings(float(latitude), float(longitude), istid)
        return building

    @classmethod
    def send_message(cls, istid, data):
        sender = db.users.find_one({'istid':istid})
        message = istid + ": " + data['message']
        latitude = float(sender['latitude'])
        longitude = float(sender['longitude'])

        receivers = []
        with RabbitConnection.p_lock:
            channel = connection.channel()
            users = db.users.find({})
            for user in users:
                if istid != user['istid']:
                    distance = getDistance(latitude, float(user['latitude']), longitude, float(user['longitude']))
                    if distance < float(sender['distance'])/1000:
                        channel.basic_publish(exchange='', routing_key=user['istid'], body=message)
                        receivers.append(user['istid'])
            channel.close()
        log = {'sender':istid,'type':'user', 'text':data['message'], 'date':datetime.datetime.utcnow(), 'receivers':receivers}
        db.logs_messages.insert_one(log)

    @classmethod
    def get_messages(cls, istid):
        messages = []
        with RabbitConnection.p_lock:
            channel = connection.channel()
            while True:
                method_frame, header_frame, body = channel.basic_get(queue=istid, no_ack=True)
                if body == None:
                    break
                if method_frame:
                    messages.append(body)
                else:
                    print('No message returned')

            channel.close()
        return messages

    @classmethod
    def set_distance(cls, istid, distance):
        db.users.update_one({'istid':istid}, {'$set':{'distance':distance}})

    @classmethod
    def get_nearby_users(cls, istid):
        sender = db.users.find_one({'istid':istid})
        buildingId = sender['buildings']

        latitude = float(sender['latitude'])
        longitude = float(sender['longitude'])

        location = []
        building = []

        users = db.users.find({})
        for user in users:
            distance = getDistance(latitude, float(user['latitude']), longitude, float(user['longitude']))

            if distance < float(sender['distance'])/1000:
                location.append(user['istid'])

        if len(buildingId) > 0:
            buildings = db.buildings.find_one({'id':buildingId[0]})
            userList = buildings['users']
            for user in userList:
                building.append(user)

        return location, building


