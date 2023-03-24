import hashlib, hmac, binascii
from app.configs import config

def get_secret_key():
  with open(config['file']['secretKey'], 'r') as file:
    key = file.read()
  return key

SECRET_KEY = get_secret_key().encode('utf-8')

def hmac_sha256(key, msg):
    return hmac.new(key, msg, hashlib.sha256).digest()

def verify_webhook(data, hmac_header_sha256):
		# Calculate HMAC
    if type(data) is dict:
      set_data = str(data)
    else:
      set_data = data
    msg = set_data.encode('utf-8')
    computed_hmac = binascii.hexlify(hmac_sha256(SECRET_KEY, msg))
    if hmac_header_sha256 is None:
       return False
    else:
      return hmac.compare_digest(computed_hmac, hmac_header_sha256.encode('utf-8'))

