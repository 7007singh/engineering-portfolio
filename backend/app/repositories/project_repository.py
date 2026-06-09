from sqlalchemy.orm import Session

from backend.app.models.project import Project
from backend.app.schemas.project import ProjectCreate


class ProjectRepository:

    @staticmethod
    def create(db: Session, project: ProjectCreate):
        db_project = Project(
            title=project.title,
            description=project.description,
            github_url=project.github_url
        )

        db.add(db_project)
        db.commit()
        db.refresh(db_project)

        return db_project

    @staticmethod
    def get_all(db: Session):
        return db.query(Project).all()