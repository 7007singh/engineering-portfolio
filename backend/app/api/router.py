from fastapi import APIRouter

from backend.app.api.project_router import router as project_router
from backend.app.api.profile_router import router as profile_router
from backend.app.api.experience_router import router as experience_router
from backend.app.api.skills_router import router as skills_router

router = APIRouter()

router.include_router(project_router)
router.include_router(profile_router)
router.include_router(experience_router)
router.include_router(skills_router)


@router.get("/health")
async def health_check():
    return {"status": "healthy"}
