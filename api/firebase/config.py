from firebase_admin import credentials, auth
import firebase_admin
import pyrebase
import json

import os
from dotenv import load_dotenv
load_dotenv()

# Extracting firebase sensitive environment variables from .env file
firebaseConfig = os.getenv('firebaseConfig') #retrieve firebase config files as string 
firebaseConfig = json.loads(firebaseConfig)  # deserialize / convert from string to dict

serviceAccountKey = os.getenv('serviceAccountKey')
serviceAccountKey = json.loads(serviceAccountKey)


#Generating the serviceAccountKey.json file in the current directory
with open("serviceAccountKey.json", 'w') as outfile:
  json.dump(serviceAccountKey, outfile)


# Initialize Firebase app
firebase = pyrebase.initialize_app(firebaseConfig)


# Firebase Realtime Database Config
db = firebase.database()
races_collection = db.child('events')


# Firebase Auth Config
if not firebase_admin._apps:
  cred = credentials.Certificate('serviceAccountKey.json')
  firebase_admin.initialize_app(cred)







