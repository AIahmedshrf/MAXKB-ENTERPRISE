# -*- coding: utf-8 -*-
#
import os

from dotenv import load_dotenv

from .conf import ConfigManager

__all__ = ['BASE_DIR', 'PROJECT_DIR', 'VERSION', 'CONFIG']

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROJECT_DIR = os.path.dirname(BASE_DIR)

VERSION = '2.0.0'

# load environment variables from .env file
load_dotenv()
# print(os.getenv('MAXKB_CONFIG'))
if os.getenv('MAXKB_CONFIG') is not None:
    CONFIG = ConfigManager.load_user_config(root_path=PROJECT_DIR)
elif os.environ.get('MAXKB_DEV_MODE') == 'true':
    # Use local development config with absolute path
    DEV_CONF = '/Users/user0/Documents/IDEs/vscode/projetos-llm/MaxKB-br/opt/maxkb/conf'
    CONFIG = ConfigManager.load_user_config(root_path=DEV_CONF)
else:
    CONFIG = ConfigManager.load_user_config(root_path=os.path.abspath('/opt/maxkb/conf'))
