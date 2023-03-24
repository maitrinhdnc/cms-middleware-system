from app.routes.api_v1 import app
from app.configs import config


def start_application():
    app.run(host=config["application"]["host"], port=config["application"]["port"])
