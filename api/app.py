from fastapi import FastAPI
from routers import Competitions, Accounts, Races, Registrations
from firebase.auth import create_firebase_auth_app


app = FastAPI(title="Ashlegister API", docs_url='/')

app.include_router(Competitions.router)
app.include_router(Registrations.router)
app.include_router(Races.router)
app.include_router(Accounts.router)


create_firebase_auth_app()













