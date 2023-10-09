from fastapi import APIRouter, Request
import pyrebase
from models.models import LoginSchema, SignUpSchema
from firebase.admins import ashlegister_admins
from firebase_admin import credentials, auth
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException
from firebase.config import firebase


router = APIRouter()

### AUTH ###
@router.post('/signup', tags=["Account"])
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
        "message": f"User Account created successfully for {user.uid}"
    }, status_code=200)

  except auth.EmailAlreadyExistsError:
    raise HTTPException(
        status_code=400,
        detail=f"Account already created for the email {email}"
    )


@router.post('/login', tags=["Account"])
async def create_access_token(user_data: LoginSchema):  # or login
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
            'token': token
        }, status_code=200
    )
  except:
    raise HTTPException(
        status_code=400,
        detail="Invalid credentials"
    )


@router.post('/ping', tags=["Account"])
async def validate_token(request: Request):
  headers = request.headers
  jwt = headers.get('authorization')

  user = auth.verify_id_token(jwt)

  return user['uid']


@router.get('/admins_only', tags=['Account'])
async def check_account_type():
  global account_type
  if email in ashlegister_admins:  # email was made global from login endpoint
    account_type = 'Admin'
  else:
    account_type = 'User'
  return account_type
