import pyrebase
from firebase.config import firebaseConfig

# Initialize Firebase app
firebase = pyrebase.initialize_app(firebaseConfig)


# Firebase Realtime Database Config
db = firebase.database()
races_collection = db.child('events')













