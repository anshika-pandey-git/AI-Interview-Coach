from fastapi import FastAPI
from app.api.auth import router as auth_router
app = FastAPI(
    title="AI Interview Coach API",
    version="1.0.0"
)
app.include_router(auth_router, prefix="/auth")

@app.get("/")
def root():
    return {
        "message": "Welcome to AI Interview Coach API"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }
@app.post("/test")
def test_post():
    return {
        "message": "POST request received successfully"
    }