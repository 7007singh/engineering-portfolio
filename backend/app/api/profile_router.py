from fastapi import APIRouter

from backend.app.schemas.profile import ProfileResponse
from backend.app.services.profile_service import ProfileService

router = APIRouter(
    prefix="/profile",
    tags=["Profile"]
)


@router.get(
    "",
    response_model=ProfileResponse
)
def get_profile():
    return ProfileService.get_profile()