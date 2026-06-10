from fastapi import FastAPI

from backend.app.api.router import router
from backend.app.core.config import settings
from backend.app.database.base import Base
from backend.app.database.session import engine
from backend.app.models.project import Project
from fastapi.middleware.cors import CORSMiddleware


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION
)

app.include_router(router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {
        "message": "Welcome to Engineering Portfolio API"
    }