import os
import yaml

config = None
_static_path = 'server.yaml'
_config_path = os.path.join(os.path.dirname(__file__), _static_path)
try:
    print("file path ", _config_path)

    _yml_file = open(_config_path, "r")
    config = yaml.load(_yml_file, Loader=yaml.FullLoader)
except FileNotFoundError:
    raise FileNotFoundError
except FileExistsError:
    raise FileExistsError