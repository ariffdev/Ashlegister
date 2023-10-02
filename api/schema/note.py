from pydantic import BaseModel


class Note(BaseModel):
  id: int
  importance: str
  content: str
