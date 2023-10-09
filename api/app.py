from fastapi import FastAPI, Request
from models.models import Competition, Race, SignUpSchema, LoginSchema
from firebase.db import db
from firebase.config import firebase
from firebase.admins import ashlegister_admins
from firebase_admin import credentials, auth
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException




app = FastAPI(title="Ashlegister API", docs_url='/')


""" COMPETITIONS """


@app.get('/competitions', tags=['Competitions'])
def get_all_competitions():
  competitions = db.child('Competitions').get().val()
  return competitions


@app.get('/competitions/{competition_id}', tags=['Competitions'])
def get_competition(competition_id: int):
  competitions = dict(db.child('Competitions').get().val())
  try:
    competition = competitions[str(competition_id)]
    return(competition)
  except IndexError:
    return {'error': 'Item does not exist'}


@app.post('/competitions', tags=['Competitions'])
def create_new_competition(competition: Competition):
  competition = dict(competition)
  db.child('Competitions').child(competition['id']).set(competition) #As long the child is unique, it will create under Competitions
  return {"message": "Competition added successfully", 'competition': competition}



@app.put('/competitions/{competition_id}', tags=['Competitions'])
def update_competition(competition_id: int, new_competition: Competition):
  new_competition = dict(new_competition)
  db.child('Competitions').child(new_competition['id']).update(new_competition)
  return {
      'Message': 'Successfully update competition',
      'New Competition': db.child('Competitions').child(new_competition['id']).get().val()
  }


@app.delete('/competitions/{competition_id}', tags=['Competitions'])
def delete_competition(competition_id: int):
  db.child('Competitions').child(competition_id).remove()
  return {
      'Message': 'Successfully deleted competition',
  }



""" RACES """




### AUTH ###
@app.post('/signup', tags=["Account"])
async def create_an_account(user_data: SignUpSchema):
  email = user_data.email
  password = user_data.password

  try:
    global user
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
  global email 
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


@app.get('/admins_only')
async def check_account_type():
  global account_type
  if email in ashlegister_admins: #email was made global from login endpoint
    account_type = 'Admin'
  else:
    account_type = 'User'
  return account_type
  
