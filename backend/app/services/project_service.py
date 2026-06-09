from sqlalchemy.orm import Session

from backend.app.repositories.project_repository import ProjectRepository
from backend.app.schemas.project import ProjectCreate


class ProjectService:

    @staticmethod
    def create_project(db: Session, project: ProjectCreate):
        return ProjectRepository.create(db, project)

    @staticmethod
    def get_projects(db: Session):
        return ProjectRepository.get_all(db)
    