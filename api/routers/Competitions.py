from fastapi import APIRouter

from models.models import Competition
from firebase.db import db

from .Accounts import check_account_type


router =  APIRouter()


# READ
@router.get('/competitions', tags=['Competitions'])  # List all Competitions
def get_all_competitions():
  competitions = db.child('Competitions').get().val()
  return competitions


@router.get('/competitions/{competition_tag}', tags=['Competitions'])
def get_competition(competition_tag: str):
  competitions = dict(db.child('Competitions').get().val())
  try:
    competition = competitions[str(competition_tag)]
    return competition
  except IndexError:
    return {'error': 'Item does not exist'}



# CREATE
@router.post('/competitions', tags=['Competitions'])
def create_new_competition(competition: Competition):
  account_type = check_account_type()
  if account_type != 'Admin':
    return {'Error': 'Need Admin rights'}
  else:
    competition = dict(competition)
    # As long the child is unique, it will create under Competitions
    existing_competitions = db.child('Competitions').get().val()

    if existing_competitions != None:  # Existing competitions is not empty
      try:
        # Competition already exists so modify don't overwrite
        if existing_competitions[competition["competition_tag"]]:
          update_competition(competition["competition_tag"], competition)
          return {"message": "Competition updated successfully", 'competition': competition}
      except KeyError:
        db.child('Competitions').child(competition['competition_tag']).set(competition)
        return {"message": "Competition added successfully", 'competition': competition}
    else:
        db.child('Competitions').child(
            competition['competition_tag']).set(competition)
        return {"message": "Competition added successfully", 'competition': competition}

  

# UPDATE
@router.put('/competitions/{competition_tag}', tags=['Competitions'])
def update_competition(competition_tag: str, new_competition: Competition):
  account_type = check_account_type()
  if account_type != 'Admin':
    return {'Error': 'Need Admin rights'}
  else:
    new_competition = dict(new_competition)
    db.child('Competitions').child(
        new_competition['competition_tag']).update(new_competition)
    return {
        'Message': 'Successfully updated competition',
        'New Competition': db.child('Competitions').child(new_competition['competition_tag']).get().val()
    }

# DELETE
@router.delete('/competitions/{competition_tag}', tags=['Competitions'])
def remove_competition(competition_tag: str):
  account_type = check_account_type()
  if account_type != 'Admin':
    return {'Error': 'Need Admin rights'}
  else:
    db.child('Competitions').child(competition_tag).remove()
    return {
        'Message': 'Successfully deleted competition',
    }


