from backend.app.schemas.experience import ExperienceResponse


class ExperienceService:

    @staticmethod
    def get_experiences():

        return [
            ExperienceResponse(
                company="Locobuzz Solutions Pvt. Ltd.",
                role="Software Engineer",
                start_date="Aug 2023",
                end_date="Jan 2026",
                description=[
                    "Designed and scaled FastAPI microservices.",
                    "Built real-time Kafka based data pipelines.",
                    "Developed alert processing system handling 100K+ daily events.",
                    "Reduced database load by 60% using Redis caching.",
                    "Optimized media retrieval using AWS S3 and OpenSearch."
                ]
            ),
            ExperienceResponse(
                company="BridgeLabz Solutions LLP",
                role="Software Developer Trainee",
                start_date="Dec 2022",
                end_date="Jul 2023",
                description=[
                    "Built Django and FastAPI microservices.",
                    "Implemented REST APIs with PostgreSQL.",
                    "Achieved 90%+ test coverage using PyTest.",
                    "Developed Celery-based async workers."
                ]
            )
        ]