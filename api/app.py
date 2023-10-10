from fastapi import FastAPI
from routers import Competitions, Accounts, Races, Registrations
from firebase.auth import create_firebase_auth_app
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="Ashlegister API", docs_url='/')

origins = [
  "http://localhost:5173"
]

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"]
)

app.include_router(Competitions.router)
app.include_router(Registrations.router)
app.include_router(Races.router)
app.include_router(Accounts.router)


create_firebase_auth_app()













