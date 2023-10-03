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

firebase = pyrebase.initialize_app(firebaseConfig)

db = firebase.database()

races_collection = db.child('events')




