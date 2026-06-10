from pydantic import BaseModel


class ProjectCreate(BaseModel):
    title: str
    description: str
    github_url: str
    tech_stack: str


class ProjectResponse(ProjectCreate):
    id: int


class Config:
    from_attributes = True
