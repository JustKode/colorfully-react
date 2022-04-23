from pymongo import mongo_client
from bson import BSON
import os

host = os.getenv("HOST", "localhost")
username = os.getenv("MONGO_INITDB_ROOT_USERNAME", "root")
password = os.getenv("MONGO_INITDB_ROOT_PASSWORD", "colorfully!!")
database = os.getenv("MONGO_INITDB_DATABASE", "colorfully")

connection = mongo_client.MongoClient('mongodb://%s:%s@%s:27017/%s' % (username, password, host, database))

def set_schema(json):
    db = connection.get_default_database()
    result = {"id": str(db.get_collection('db_schema').insert_one(json).inserted_id)}
    return result