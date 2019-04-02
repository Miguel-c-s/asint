import datetime
from connections import DBConnection

db = DBConnection.db

class Admin:
    @classmethod
    def update_buildings(cls, buildings):
        db.buildings.remove({})
        db.buildings.insert(buildings)

    @classmethod
    def get_all_users(cls):
        users = db.users.find({})
        all_users = []
        for user in users:
            all_users.append(user['istid'])
        return all_users

    @classmethod
    def get_users(cls, building):
        elem = db.buildings.find_one({'id': building})
        all_users = elem['users']
        return all_users

    @classmethod
    def logs_user_messages(cls, istid, mode, days):
        #modes: send, receive
        msgs = []
        if mode == "send":
            msg_db = db.logs_messages.find({"sender": istid, "date":{"$gt":datetime.datetime.utcnow() - datetime.timedelta(days = int(days))}})
            for msg in msg_db:
                msgs.append({'message': msg['text'], 'date':msg['date']})
        elif mode == "receive":
            msg_db = db.logs_messages.find({"receivers": istid, "date":{"$gt":datetime.datetime.utcnow() - datetime.timedelta(days = int(days))}})
            for msg in msg_db:
                msgs.append({'message': msg['sender'] + ": " + msg['text'], 'date':msg['date']})
        return msgs

    @classmethod
    def logs_user_locations(cls, istid, days):
        locations = []
        lct_db = db.logs_locations.find({"istid": istid, "date":{"$gt":datetime.datetime.utcnow() - datetime.timedelta(days = int(days))}})
        for lct in lct_db:
            locations.append({'latitude': lct['latitude'], 'longitude': lct['longitude'], 'date':lct['date']})
        return locations

    @classmethod
    def logs_buildings(cls, b_id, days):
        msgs = []
        msg_db = db.logs_messages.find({"type": "bot", "building": b_id, "date":{"$gt":datetime.datetime.utcnow() - datetime.timedelta(days = int(days))}})
        for msg in msg_db:
            msgs.append({'message': msg['sender'] + ": " + msg['text'], 'date':msg['date']})
        return msgs


