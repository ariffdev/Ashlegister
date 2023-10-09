import os
import json
import pyrebase
from dotenv import load_dotenv
load_dotenv()


# Extracting firebase sensitive environment variables from .env file
# retrieve firebase config files as string
firebaseConfig = os.getenv('firebaseConfig')
# deserialize / convert from string to dict
firebaseConfig = json.loads(firebaseConfig)

serviceAccountKey = os.getenv('serviceAccountKey')
serviceAccountKey = json.loads(serviceAccountKey)

# Initialize Firebase app
firebase = pyrebase.initialize_app(firebaseConfig)

