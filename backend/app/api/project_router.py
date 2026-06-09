from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from backend.app.database.session import get_db
from backend.app.schemas.project import (
    ProjectCreate,
    ProjectResponse
)
from backend.app.services.project_service import ProjectService

router = APIRouter(
    prefix="/projects",
    tags=["Projects"]
)


@router.post(
    "",
    response_model=ProjectResponse
)
def create_project(
    project: ProjectCreate,
    db: Session = Depends(get_db)
):
    return ProjectService.create_project(
        db,
        project
    )


@router.get(
    "",
    response_model=List[ProjectResponse]
)
def get_projects(
    db: Session = Depends(get_db)
):
    return ProjectService.get_projects(db)
