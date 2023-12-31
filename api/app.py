from fastapi import FastAPI
from routers import Competitions, Accounts, Races, Athletes, Results
from firebase.auth import create_firebase_auth_app
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="Ashlegister API", docs_url='/')

origins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://testdeploy-d226f.web.app",
  "https://ashlegister.web.app"
]

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"]
)

app.include_router(Accounts.router)
app.include_router(Competitions.router)
app.include_router(Athletes.router)
app.include_router(Races.router)
app.include_router(Results.router)




create_firebase_auth_app()













