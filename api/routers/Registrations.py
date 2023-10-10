from fastapi import APIRouter

from models.models import Registration
from firebase.db import db

from .Accounts import check_account_type

router = APIRouter(prefix="/competitions/{competition_tag}")


# CREATE
@router.post('/registrations/{event}', tags=['Registrations'])
def create_new_registration_in_competition(competition_tag: str, registration: Registration, event: str):
  account_type = check_account_type()
  registration = dict(registration)
  db.child('Competitions').child(competition_tag).child(
      'Registrations').child(event).set(registration)


# # READ
# @router.get('/registrations', tags=['Registrations'])  # Timetable view
# def get_all_registrations_in_competition(competition_tag: str):
#   if account_type != 'Admin':
#     return {'Error': 'Need Admin rights'}
#   else:
#     registrations = db.child('Competitions').child(
#         competition_tag).child('Registrations').get().val()
#     if registrations:
#       return registrations
#     else:
#       return {'error': 'No such registrations'}


# @router.get('/registrations', tags=['Registrations'])
# def get_registration_in_competition(competition_tag: str):
#   if account_type != 'Admin':
#     return {'Error': 'Need Admin rights'}
#   else:
#     registrations = db.child('Competitions').child(
#         competition_tag).child('Registrations').get().val()
#     registrations = dict(registrations)
#     try:
#       registration = registrations[str(competition_tag)]
#       return registration
#     except:
#       return {'error': 'Registration does not exist'}




# # UPDATE
# @router.put('/registrations', tags=['Registrations'])
# def update_registration(competition_tag: str, new_registration: Registration):
#   account_type = check_account_type()
#   if account_type != 'Admin':
#     return {'Error': 'Need Admin rights'}
#   else:
#     new_registration = dict(new_registration)
#     db.child('Competitions').child(competition_tag).child(
#         'Registrations').child(competition_tag).update(new_registration)
#     return {
#         'Message': 'Successfully updated registration'
#     }


# # DELETE
# @router.delete('/registrations', tags=['Registrations'])
# def remove_registration(competition_tag: str):
#   account_type = check_account_type()
#   if account_type != 'Admin':
#     return {'Error': 'Need Admin rights'}
#   else:
#     db.child('Competitions').child(competition_tag).child('Registrations').child(competition_tag).remove()
#     return {
#         'Message': 'Successfully deleted registration',
#     }
