import pymongo
from cryptography.fernet import Fernet
import json


given_data = {
    "account_id": "",
    "access_token": ""
}

given_data = json.dumps(given_data)
given_data_jsn = json.loads(given_data)

class DatabaseUtils():

    def __init__(self, client=None):
        if client is None:
            client = pymongo.MongoClient(
                "mongodb+srv://jayateerthd:password@striperetrievalapp.n303ttp.mongodb.net/?retryWrites=true&w=majority")
            db = client["UserInfo"]
            collection = db["UserData"]

        self.key = Fernet.generate_key()

        self.fer_obj = Fernet(key=self.key)
        self.client = client
        self.collection = collection


    def insert_to_db(self, data):
        data = json.loads(data)
        token = data["access_token"]
        encrypted_token = self.encrypter(token=token)
        print("EncryptedToken:", encrypted_token)
        data["access_token"] = encrypted_token
        inserted_data = self.collection.insert_one(data)
        return inserted_data

    def read_from_db(self):

        cur = self.collection.find()
        for user_data in cur:
            print("UserAccountID: ", user_data["account_id"])

    def find_in_db(self, account_id):
        user_data = self.collection.find_one({"account_id": account_id})
        if user_data is not None:
            user_access_token = user_data["access_token"]
            user_access_token = self.decrypter(user_access_token)
            print(user_access_token)
            return user_access_token

        else:
            return False

    def remove_from_db(self, account_id):
        obj_to_delete = self.collection.find_one({"account_id": account_id})
        if obj_to_delete is not None:
            res = self.collection.delete_one(obj_to_delete)
            return res

        else:
            return False

    def encrypter(self, token):
        encrypted_token = self.fer_obj.encrypt(token.encode())
        return encrypted_token

    def decrypter(self, encr_token):
        decrypted_token = self.fer_obj.decrypt(encr_token).decode()
        return decrypted_token


if __name__ == '__main__':
    inst = DatabaseUtils()
    # inst.remove_from_db(given_data_jsn["account_id"])
    # inst.insert_to_db(given_data)
    inst.find_in_db(given_data_jsn["account_id"])
