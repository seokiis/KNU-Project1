from asyncio import subprocess


import subprocess
import os
from itertools import product
from . import upload
from werkzeug.utils import secure_filename
from flask import Blueprint, request, jsonify, Response, current_app

blue_execute = Blueprint("execute", __name__, url_prefix="/execute")

@blue_execute.route('/<string:pyname>')
def executepy(pyname):
    
    server_res = Response('The file is executed ...')
    server_res.headers["Access-Control-Allow-Origin"] = "*"

    params = upload.param["param"]

    location = current_app.config['UPLOAD_FOLDER'] + pyname
    out = subprocess.run(['python3', location, params])
    print('return code', out.returncode)

    return Response