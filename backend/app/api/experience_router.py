from typing import List

from fastapi import APIRouter

from backend.app.schemas.experience import ExperienceResponse
from backend.app.services.experience_service import ExperienceService

router = APIRouter(
    prefix="/experience",
    tags=["Experience"]
)


@router.get(
    "",
    response_model=List[ExperienceResponse]
)
def get_experience():
    return ExperienceService.get_experiences()