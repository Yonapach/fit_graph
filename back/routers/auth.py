from typing import Any

from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestForm

router = APIRouter(
    prefix="/auth",
    tags=["auth"],
    # dependencies=[Depends(get_token_header)],
    # responses={404: {"description": "Not found"}},
)


def authenticate(email: str, password: str) -> str:
    print(email, password)
    return "lol"


@router.post("/token")
def token(
    form_data: OAuth2PasswordRequestForm = Depends(),
) -> Any:
    return authenticate(form_data.username, form_data.password)
