from fastapi import APIRouter

from models.models import Athlete
from firebase.db import db

from .Accounts import check_account_type

router = APIRouter(prefix="/competitions/{competition_tag}")


# CREATE
@router.post('/athletes/{race_tag}', tags=['Athletes'])
def create_new_athlete_in_competition(competition_tag: str, athlete: Athlete, race_tag: str):
  athlete = dict(athlete)
  print(athlete)
  db.child('Competitions').child(competition_tag).child('Races').child(race_tag).child('Athletes').child(athlete['name']).set(athlete)

