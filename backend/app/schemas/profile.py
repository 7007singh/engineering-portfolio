from pydantic import BaseModel


class ProfileResponse(BaseModel):
    name: str
    title: str
    experience_years: int
    location: str
    email: str
    github: str
    linkedin: str
    summary: str
    