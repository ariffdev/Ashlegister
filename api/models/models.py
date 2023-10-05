from pydantic import BaseModel
from typing import List, Optional


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

