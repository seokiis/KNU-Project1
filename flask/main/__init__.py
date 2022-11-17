import os
from flask import Flask
from flask_cors import CORS
from . import upload
from . import download
from . import execute


app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = os.path.join(os.getcwd(), './uploads')
app.config['IMAGE_FOLDER'] = os.path.join(os.getcwd(), './images')

app.register_blueprint(upload.blue_upload)
app.register_blueprint(download.blue_download)
app.register_blueprint(execute.blue_execute)
# commit 체크
# 되나요?