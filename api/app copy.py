
from fastapi.exceptions import HTTPException
from fastapi.responses import JSONResponse
from firebase_admin import credentials, auth
from firebase.admins import ashlegister_admins
from models.models import LoginSchema, SignUpSchema
import pyrebase
from fastapi import APIRouter, Request
from fastapi import FastAPI
from routers import Competitions, Accounts, Races
from firebase.config import firebase
from firebase.auth import create_firebase_auth_app


app = FastAPI(title="Ashlegister API", docs_url='/')

app.include_router(Competitions.router)
app.include_router(Races.router)
app.include_router(Accounts.router)

create_firebase_auth_app()











