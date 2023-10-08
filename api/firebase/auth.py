import json
import firebase_admin
from firebase_admin import credentials, auth
from firebase.config import serviceAccountKey




# Generating the serviceAccountKey.json file in the current directory
with open("serviceAccountKey.json", 'w') as outfile:
  json.dump(serviceAccountKey, outfile)

# Firebase Auth Config
if not firebase_admin._apps:
  cred = credentials.Certificate('serviceAccountKey.json')
  firebase_admin.initialize_app(cred)
