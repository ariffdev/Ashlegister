from fastapi import FastAPI, Request
from models.models import Race, SignUpSchema, LoginSchema
from firebase.config import races_collection, firebase
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException


from firebase_admin import credentials, auth



app = FastAPI(title="Ashlegister API", docs_url='/')



#Create
@app.post('/races', tags=['Races'])
def create_new_race(race: Race):
  race = dict(race)
  race_collection.child(race['id']).set(race)
  return {"message":"Race added successfully", 'race': race}

#Read
@app.get('/races', tags=['Races'])
def get_all_races():
  races = race_collection.get().val()
  return races

@app.get('/races/{race_id}', tags=['Races'])
def get_race(race_id: int):
  races = race_collection.get().val()
  for race in races:
    if race['id'] == race_id:
      return race
  return {'error':"Item doesn't exist"}



#Update
@app.put('/races/{race_id}', tags=['Races'])
def update_race(race_id: int, new_race: Race):
  new_race = dict(new_race)
  db.child('races').child(new_race['id']).update(new_race)
  return {
    'Message': 'Successfully update race',
    'New Race': db.child('races').child(new_race['id']).get().val()
  }


#Delete
@app.delete('/races/{race_id}', tags=['Races'])
def delete_race(race_id: int):
  race_collection.child(race_id).remove()
  return {
    'Message': 'Successfully deleted race',
  }


### AUTH ###
@app.post('/signup', tags=["Account"])
async def create_an_account(user_data: SignUpSchema):
  email = user_data.email
  password = user_data.password

  try:
    user = auth.create_user(
      email=email,
      password=password
    )

    return JSONResponse(content={
      "message":f"User Account created successfully for {user.uid}"
    }, status_code=200)
  except auth.EmailAlreadyExistsError:
    raise HTTPException(
      status_code=400,
      detail=f"Account already created for the email {email}"
    )
    


@app.post('/login', tags=["Account"])
async def create_access_token(user_data: LoginSchema): #or login
  email = user_data.email
  password = user_data.password

  try:
    user = firebase.auth().sign_in_with_email_and_password(
      email=email,
      password=password
      )

    token = user['idToken']

    return JSONResponse(
    content={
      'token':token
    }, status_code=200
      )
  except:
    raise HTTPException(
      status_code=400,
      detail="Invalid credentials"
    )
    


@app.post('/ping', tags=["Account"])
async def validate_token(request:Request):
  headers = request.headers
  jwt = headers.get('authorization')

  user = auth.verify_id_token(jwt)

  return user['uid']
  
