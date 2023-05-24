from fastapi import FastAPI

from routers import auth


app = FastAPI(swagger_ui_parameters={"docExpansion": "none"})

app.include_router(auth.router)
