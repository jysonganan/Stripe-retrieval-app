import pymongo


# Connects to Mongo Database
def connect_to_db():
    # Making the Connection to Database
    client = pymongo.MongoClient(
        "mongodb+srv://jayateerthd:dragonforce@striperetrievalapp.n303ttp.mongodb.net/?retryWrites=true&w=majority")

    # Selecting a Database
    db = client["UserInfo"]
    collection = db["UserData"]

    data = {"account_id": "acct_1JD9NgCgQjBmqTNT",
            "access_token": "sk_test_51JD9NgCgQjBmqTNT1ZDWjguNPUabQOSfcUgDQVJKOHR6B8r81gqFkPjDyMdnYxuhvREJUPzxRLpOh35vgCvdPrFz006mQeR9PT"
            }

    return collection


# Inserts the Json Data from OAuth to Mongo Database.
def insert_to_db(data):
    collection = connect_to_db()
    x = collection.insert_one(data)
    return x


# Reads data from Database
def read_from_db():
    collection = connect_to_db()
    cursor = collection.find()
    for user_data in cursor:
        print(user_data["account_id"])


def find_in_db(account_id):
    collection = connect_to_db()
    user_data = collection.find_one({"account_id": account_id})
    if user_data is not None:
        user_access_token = user_data["access_token"]
        return user_access_token
    else:
        return False
