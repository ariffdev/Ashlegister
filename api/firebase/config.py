from firebase_admin import credentials
import firebase_admin
import pyrebase


firebaseConfig = {
    'apiKey': "AIzaSyC5rOaw20XOw2NpkLr3DcvMURysMTmAMMc",
    'authDomain': "ashlegister.firebaseapp.com",
    'databaseURL': "https://ashlegister-default-rtdb.firebaseio.com",
    'projectId': "ashlegister",
    'storageBucket': "ashlegister.appspot.com",
    'messagingSenderId': "872176779830",
    'appId': "1:872176779830:web:024e117c9a8b0facbd4e97",
    'measurementId': "G-H28JXVHWSE"
}

# Initialize app
firebase = pyrebase.initialize_app(firebaseConfig)


# Firebase Realtime Database Config
db = firebase.database()
races_collection = db.child('events')


# Firebase Auth Config
if not firebase_admin._apps:
  cred = credentials.Certificate("./ashlegister-venv/serviceAccountKey.json")
  firebase_admin.initialize_app(cred)







