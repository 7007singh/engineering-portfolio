from fastapi import APIRouter

from backend.app.api.project_router import router as project_router

router = APIRouter()

router.include_router(project_router)


@router.get("/health")
async def health_check():
    return {
        "status": "healthy"
    }