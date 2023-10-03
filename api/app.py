from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from schema.race import Race
from config.firebase_config import races_collection



app = FastAPI(title="Ashlegister API")

@app.get('/', response_class=HTMLResponse, tags=['Races'])
async def index():
  return  """
  <html>
  <body>
  <h1> Welcome to the Races API </h1>
  </body>
  </html>
  """


#Create
@app.post('/races', tags=['Races'])
def create_new_race(race: Race):
  race = dict(race)
  race_collection.child(race['id']).set(race)
  return {"message":"Race added successfully", 'race': race}

#Read
@app.get('/races', tags=['Races'])
def get_all_races():
  races = race_collection.get().val()
  return races

@app.get('/races/{race_id}', tags=['Races'])
def get_race(race_id: int):
  races = race_collection.get().val()
  for race in races:
    if race['id'] == race_id:
      return race
  return {'error':"Item doesn't exist"}



#Update
@app.put('/races/{race_id}', tags=['Races'])
def update_race(race_id: int, new_race: Race):
  new_race = dict(new_race)
  db.child('races').child(new_race['id']).update(new_race)
  return {
    'Message': 'Successfully update race',
    'New Race': db.child('races').child(new_race['id']).get().val()
  }


#Delete
@app.delete('/races/{race_id}', tags=['Races'])
def delete_race(race_id: int):
  race_collection.child(race_id).remove()
  return {
    'Message': 'Successfully deleted race',
  }


@app.post('/signup')
async def create_an_account():
  pass
