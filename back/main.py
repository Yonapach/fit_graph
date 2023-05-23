from fastapi import FastAPI

from routers import auth


app = FastAPI(root_path="/api", swagger_ui_parameters={"docExpansion": "none"})

app.include_router(auth.router)


@app.get("/")
async def root():
    return {"message": "Hello World"}
