from pydantic import BaseModel
from typing import List, Optional, Dict


class Race(BaseModel):
  competition_tag: str
  race_tag: str
  distance: str
  title: str
  gender: str
  stage: str
  time: str
  Results: Dict[str, Dict]

  model_config = {
      "json_schema_extra": {
          "examples": [
              {
                  "competition_tag": 'diamondLXiamen23',
                  "race_tag": "M100mFinal",
                  "title": "Men's 100m Final",
                  "distance": "100m",
                  "gender": "M",
                  "stage": "Final",
                  "date": "3rd September 2023",
                  "time": "15:00",
                  'Results': {
                      'Results': {

                      }
                  }
              }
          ]
      }
  }

  


class Competition(BaseModel):
  competition_tag: str
  title: str
  date: str

  model_config = {
      "json_schema_extra": {
          "examples": [
              {
                  "competition_tag": "diamondLXiamen23",
                  "title": "2023 Xiamen Diamond League",
                  "date": "3rd September, 2023",
              }
          ]
      }
  }


class Athlete(BaseModel):
  competition_tag: str
  name: str
  race_tag: str

  model_config = {
      "json_schema_extra": {
          "examples": [
              {
                  "competition_tag": 'diamondLXiamen23',
                  "race_tag": "Men's100mPrelims",
                  "name": "Hadid"
              }
          ]
      }
  }

class Result(BaseModel):
    competition_tag: str
    race_tag: str
    Results: Dict[str, Dict]

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "competition_tag": 'diamondLXiamen23',
                    "race_tag": "Men's100mPrelims",
                    "Results": {
                        "Mihambo":{
                            "mark": "34",
                            "position": "2"
                        },
                        "Mikasa": {
                            "mark": "356",
                            "position": "1"
                        },
                    }
                }
            ]
        }
    }





class SignUpSchema(BaseModel):
    email: str
    password: str

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "email": "sample@gmail.com",
                    "password": "samplepass123"
                }
            ]
        }
    }


class LoginSchema(BaseModel):
    email:str
    password:str

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "email": "sample@gmail.com",
                    "password": "samplepass123"
                }
            ]
        }
    }

