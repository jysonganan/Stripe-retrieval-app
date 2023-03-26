import pymongo
from cryptography.fernet import Fernet
import json

class DatabaseUtils():

    def __init__(self, client=None):
        if client is None:
            client = pymongo.MongoClient(
                "mongodb+srv://jayateerthd:dragonforce@striperetrievalapp.n303ttp.mongodb.net/?retryWrites=true&w=majority")
            db = client["UserInfo"]
            collection = db["UserData"]
        self.salt = b"tyUQW@*A"
        self.key = Fernet.generate_key()
        self.fer_obj = Fernet(key=self.key)
        self.client = client
        self.collection = collection

    def insert_to_db(self, data):
        data = json.loads(data)
        token = data["access_token"]
        encrypted_token = self.__encrypter(token=token)
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
            user_token = user_data["access_token"]
            user_access_token = self.__decrypter(data=user_token)
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

    def find_user_in_db(self, account_id):
        user_data = self.collection.find_one({"account_id": account_id})
        if user_data is not None:
            return True
        else:
            return False
        
    # Private Methods
    def __encrypter(self, token):
        encrypted_token = self.fer_obj.encrypt(token.encode())
        encrypted_token = encrypted_token + self.salt + self.key
        return encrypted_token

    def __decrypter(self, data):
        encrypt_token, encrypt_key = data.split(self.salt)
        decrypted_token = Fernet(encrypt_key).decrypt(encrypt_token).decode()
        return decrypted_token
