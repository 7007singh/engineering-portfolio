from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from backend.app.database.base import Base


class Project(Base):
    __tablename__ = "projects"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(255))
    description: Mapped[str] = mapped_column(String(1000))
    github_url: Mapped[str] = mapped_column(String(500))

