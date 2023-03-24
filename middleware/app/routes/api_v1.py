from app.configs import config
from app.services.blogs import BlogService
from app.auth import authen_api, verify_data
from flask import Flask, make_response, request, abort
import json

app = Flask(config['application']['name'])
blog_service = BlogService()


@app.route('/listen/pocketbase', methods=['POST'])
@authen_api.require_apikey
def handle_webhook():
		# Get raw body
    webhook_data = json.loads(request.data)

		# Compare HMACs
    verified = verify_data.verify_webhook(webhook_data, request.headers.get('X-Signature-SHA256'))
    
    if not verified:
      abort(401)
    else:
      print(webhook_data)
    return make_response("Hello From Flask", 200)