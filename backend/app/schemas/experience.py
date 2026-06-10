from pydantic import BaseModel


class ExperienceResponse(BaseModel):
    company: str
    role: str
    start_date: str
    end_date: str
    description: list[str]