from pydantic import BaseModel
from typing import List, Optional


class Race(BaseModel):
  competition_tag: str
  race_tag: str
  race_distance: str
  race_type: str  # final, semi, etc
  gender: str
  Results: Optional[dict]

  model_config = {
      "json_schema_extra": {
          "examples": [
              {
                  "competition_tag": 'diamondLXiamen23',
                  "race_tag": "100mf",
                  "race_distance": "100m",
                  "race_type": 'final',
                  "gender": "M",
                  "Results": {}
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

