import pyrebase


firebaseConfig = {
    'apiKey': "AIzaSyAVA2i8m42qqS2zAgTcCLHT6hFSNjE6L-k",
    'authDomain': "ashletics-management-system.firebaseapp.com",
    'projectId': "ashletics-management-system",
    'storageBucket': "ashletics-management-system.appspot.com",
    'messagingSenderId': "316594096666",
    'appId': "1:316594096666:web:da2662bdd3306ee4fedfa3",
    'measurementId': "G-4LD9YLWLYZ"
}

firebase = pyrebase.initialize_app(firebaseConfig)

db = firebase.database()

notes_collection = db.child('notes')




