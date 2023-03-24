from functools import wraps
from flask import request, abort
from app.configs import config


def require_apikey(view_function):
    @wraps(view_function)
    def decorated_function(*args, **kwargs):
        with open(config['file']['apiKey'], 'r') as file:
            apiKey=file.read()
        if request.headers.get('X-Api-Key') and request.headers.get('X-Api-Key') == apiKey:
            return view_function(*args, **kwargs)
        else:
            abort(401)
    return decorated_function