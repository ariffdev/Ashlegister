from pydantic import BaseModel
from typing import List, Optional


class Race(BaseModel):
  competition_tag: str
  race_tag: str
  distance: str
  title: str
  gender: str
  stage: str
  time: str

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


class Registration(BaseModel):
  competition_tag: str
  name: str
  email: str
  races: List[str]
  gender: str

  model_config = {
      "json_schema_extra": {
          "examples": [
              {
                  "competition_tag": 'diamondLXiamen23',
                  "name": "Hadid",
                  "email": "abdul.ariff@ashesi.alumni.edu.gh",
                  "races": ["100m","200m","400m"],
                  "gender": "M",
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

