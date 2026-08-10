from fastapi import APIRouter
from app.schemas.user import UserCreate

router = APIRouter()


@router.post("/register")
def register_user(user: UserCreate):
    return {
        "message": "User registration data received",
        "name": user.name,
        "email": user.email
    }