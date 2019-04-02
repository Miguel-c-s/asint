import datetime
from connections import DBConnection, RabbitConnection

db = DBConnection.db
connection = RabbitConnection.rabbit

class Bots:
    @classmethod
    def bots_msg(cls, data, bot_id, building):
        message = str(bot_id) + ": " + data['message']

        with RabbitConnection.p_lock:
            channel = connection.channel()
            channel.basic_publish(exchange=building, routing_key='', body=message)
            channel.close()
        receivers = db.buildings.find_one({'id':building}, {'_id':0, 'users':1})['users']

        log = {'sender':bot_id,'type':'bot', 'text':data['message'], 'date':datetime.datetime.utcnow(), 'building':building, 'receivers':receivers}
        db.logs_messages.insert_one(log)
