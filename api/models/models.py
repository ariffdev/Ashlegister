from pydantic import BaseModel
from typing import List, Optional


class Competition(BaseModel):
  id: int
  title: str
  date: str
  results: Optional[List]
  races: Optional[List]

  model_config = {
      "json_schema_extra": {
          "examples": [
              {
                  "id": 4,
                  "title": "Ghana's Fastest Human - Cape Coast Meet",
                  "date": "3rd September, 2023",
                  "results": [],
                  "races":[]
              }
          ]
      }
  }


class Race(BaseModel):
  id: int
  race_distance: str
  race_type: str #final, semi, etc
  results: Optional[List]

  model_config = {
      "json_schema_extra": {
          "examples": [
              {
                  "id": 4,
                  "race_distance": "100m",
                  "race_type": 'final',
                  "results":[]
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

