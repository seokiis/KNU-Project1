import os
from flask import Flask
from . import upload
from . import download

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = os.path.join(os.getcwd(), './uploads')

app.register_blueprint(upload.blue_upload)
app.register_blueprint(download.blue_download)