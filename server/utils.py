import math
from connections import DBConnection, RabbitConnection

db = DBConnection.db
connection = RabbitConnection.rabbit

def checkBuildings(latitude, longitude, istid):
    buildings = db.buildings.find({})
    buildingName = ""
    minDistance = 0.04
    closestBuilding = None
    isOutside = True

    with RabbitConnection.p_lock:
        channel = connection.channel()
        for building in buildings:
            distance = getDistance(float(latitude), float(building['latitude']), float(longitude), float(building['longitude']))
            if distance < minDistance:
                minDistance = distance
                closestBuilding = building['id']

        buildings = db.buildings.find({})
        for building in buildings:
            if building['id'] == closestBuilding:
                isOutside = False
                db.users.update_one({'istid':istid}, {'$addToSet':{'buildings':building['id']}})
                db.buildings.update_one({'id':building['id']}, {'$addToSet':{'users':istid}})
                channel.queue_bind(exchange=building['id'],queue=istid)
                buildingName = building['name']
            else:
                db.users.update_one({'istid':istid}, {'$pull':{'buildings':building['id']}})
                db.buildings.update_one({'id':building['id']}, {'$pull':{'users':istid}})
                channel.queue_unbind(exchange=building['id'],queue=istid)
        if isOutside:
            db.users.update_one({'istid':istid}, {'$set':{'buildings':[]}})
        channel.close()
    return buildingName

def getDistance(lat1, lat2, long1, long2):
    earth_radius = 6371.0

    dLat = math.radians(lat2 - lat1)
    dLon = math.radians(long2 - long1)

    a = math.sin(dLat/2) * math.sin(dLat/2) + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dLon/2) * math.sin(dLon/2)
    c = 2 * math.asin(math.sqrt(a))
    d = earth_radius * c

    return d
