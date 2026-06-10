from fastapi import APIRouter

router = APIRouter(
    prefix="/skills",
    tags=["Skills"]
)


@router.get("")
def get_skills():
    return {
        "backend": [
            "Python",
            "FastAPI",
            "Django",
            "Flask"
        ],
        "distributed_systems": [
            "Kafka",
            "Redis",
            "Celery",
            "Protocol Buffers"
        ],
        "databases": [
            "PostgreSQL",
            "ClickHouse",
            "MSSQL",
            "OpenSearch"
        ],
        "cloud": [
            "AWS",
            "Docker",
            "GitHub Actions"
        ]
    }