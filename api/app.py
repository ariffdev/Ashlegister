from fastapi import FastAPI
from routers import Competitions, Accounts, Races


app = FastAPI(title="Ashlegister API", docs_url='/')

app.include_router(Competitions.router)
app.include_router(Races.router)
app.include_router(Accounts.router)







