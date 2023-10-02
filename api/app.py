from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from schema.note import Note
from config.firebase_config import note_collection



app = FastAPI(title="Notes App API")

@app.get('/', response_class=HTMLResponse, tags=['Notes'])
async def index():
  return  """
  <html>
  <body>
  <h1> Welcome to the Notes API </h1>
  </body>
  </html>
  """


#Create
@app.post('/notes', tags=['Notes'])
def create_new_note(note: Note):
  note = dict(note)
  note_collection.child(note['id']).set(note)
  return {"message":"Note added successfully", 'note': note}

#Read
@app.get('/notes', tags=['Notes'])
def get_all_notes():
  notes = note_collection.get().val()
  return notes

@app.get('/notes/{note_id}', tags=['Notes'])
def get_note(note_id: int):
  notes = note_collection.get().val()
  for note in notes:
    if note['id'] == note_id:
      return note
  return {'error':"Item doesn't exist"}



#Update
@app.put('/notes/{note_id}', tags=['Notes'])
def update_note(note_id: int, new_note: Note):
  new_note = dict(new_note)
  db.child('notes').child(new_note['id']).update(new_note)
  return {
    'Message': 'Successfully update note',
    'New Note': db.child('notes').child(new_note['id']).get().val()
  }


#Delete
@app.delete('/notes/{note_id}', tags=['Notes'])
def delete_note(note_id: int):
  note_collection.child(note_id).remove()
  return {
    'Message': 'Successfully deleted note',
  }
