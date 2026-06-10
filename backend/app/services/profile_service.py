from backend.app.schemas.profile import ProfileResponse


class ProfileService:

    @staticmethod
    def get_profile():
        return ProfileResponse(
            name="Shweta Singh",
            title="Backend Engineer",
            experience_years=3,
            location="Pune, India",
            email="shw12021982@gmail.com",
            github="https://github.com/7007singh",
            linkedin="https://linkedin.com/in/shweta-singh-42b5a4380",
            summary=(
                "Backend Engineer with experience building scalable "
                "backend systems, distributed architectures, real-time "
                "data pipelines, and event-driven microservices using "
                "Python, FastAPI, Kafka, Redis, PostgreSQL, ClickHouse, and AWS."
            )
        )
