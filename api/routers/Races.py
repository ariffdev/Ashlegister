from fastapi import APIRouter

from models.models import Race
from firebase.db import db

from .Accounts import check_account_type

router = APIRouter(prefix="/competitions/{competition_tag}")

# READ
@router.get('/races', tags=['Races'])  # Timetable view
def get_all_races_in_competition(competition_tag: str):
  races = db.child('Competitions').child(
      competition_tag).child('Races').get().val()
  if races:
    return races
  else:
    return {'error': 'No such competition'}


@router.get('/races/{race_tag}', tags=['Races'])
def get_race_in_competition(competition_tag: str, race_tag: str):
  races = db.child('Competitions').child(
      competition_tag).child('Races').get().val()
  races = dict(races)
  try:
    race = races[str(race_tag)]
    return race
  except:
    return {'error': 'Race does not exist'}


# CREATE
@router.post('/races', tags=['Races'])
def create_new_race_in_competition(competition_tag: str, race: Race):
  race = dict(race)
  existing_races = db.child('Competitions').child(competition_tag).child('Races').get().val()
  if existing_races != None: #Race already exists
    try:
      # Competition already exists so modify don't overwrite
      if existing_races[race["race_tag"]]:
        update_race(competition_tag, race['race_tag'], race)
        return {"message": "Race updated successfully", 'race': race}
    except KeyError:
      db.child('Competitions').child(competition_tag).child('Races').child(race['race_tag']).set(race)
      return {"message": "Race added successfully", 'race': race}
  else:
    db.child('Competitions').child(competition_tag).child('Races').child(race['race_tag']).set(race)
    return {"message": "Race added successfully", 'race': race}



# UPDATE
@router.put('/races/{race_tag}', tags=['Races'])
def update_race(competition_tag: str, race_tag: str, new_race: Race):
  account_type = check_account_type()
  if account_type != 'Admin':
    return {'Error': 'Need Admin rights'}
  else:
    new_race = dict(new_race)
    db.child('Competitions').child(competition_tag).child(
        'Races').child(race_tag).update(new_race)
    return {
        'Message': 'Successfully updated race'
    }


# DELETE
@router.delete('/races/{race_tag}', tags=['Races'])
def remove_race(competition_tag: str, race_tag: str):
  account_type = check_account_type()
  if account_type != 'Admin':
    return {'Error': 'Need Admin rights'}
  else:
    db.child('Competitions').child(competition_tag).child('Races').child(race_tag).remove()
    return {
        'Message': 'Successfully deleted race',
    }
