from fastapi import FastAPI

from backend.app.api.router import router
from backend.app.core.config import settings
from backend.app.database.base import Base
from backend.app.database.session import engine
from backend.app.models.project import Project


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION
)

app.include_router(router)


@app.get("/")
async def root():
    return {
        "message": "Welcome to Engineering Portfolio API"
    }