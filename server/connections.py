from pymongo import MongoClient
import pika
import threading

class RabbitConnection:
    # RabbitMQ connection
    url = '***REMOVED***' #?heartbeat_interval=3600
    # optionally create one connection for each function and one lock for each as well
    rabbit = pika.BlockingConnection(pika.URLParameters(url))

    #lock
    p_lock = threading.Lock()

class DBConnection:
    # MongoDB connection
    client = MongoClient("***REMOVED***")
    db = client.asint

