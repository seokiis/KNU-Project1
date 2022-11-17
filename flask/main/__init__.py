import os
from flask import Flask
from flask_cors import CORS
from . import upload
from . import download
from . import execute

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = os.path.join(os.getcwd(), './uploads')
app.config['PARAM_FOLDER'] = os.path.join(os.getcwd(), './parameter')
app.config['PLOT_FOLDER'] = os.path.join(os.getcwd(), './plot')

# 저장할 폴더가 없으면 만들도록 #
if not os.path.exists(app.config['PARAM_FOLDER']):
    os.mkdir('parameter')
if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.mkdir('uploads')
if not os.path.exists(app.config['PLOT_FOLDER']):
    os.mkdir('plot')
print('*** all directories working well ***')

app.register_blueprint(upload.blue_upload)
app.register_blueprint(download.blue_download)
app.register_blueprint(execute.blue_execute)