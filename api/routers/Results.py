from fastapi import APIRouter

from models.models import Result
from firebase.db import db

from .Accounts import check_account_type

router = APIRouter(prefix="/competitions/{competition_tag}")


# CREATE
@router.post('/results/{race_tag}', tags=['Results'])
def create_new_result_in_competition(competition_tag: str, result: Result, race_tag: str):
  result = dict(result)
  print(result)
  db.child('Competitions').child(competition_tag).child('Races').child(race_tag).update(result)

