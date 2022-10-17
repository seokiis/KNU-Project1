import os
from itertools import product
from werkzeug.utils import secure_filename
from flask import Blueprint, request, jsonify, Response, current_app

blue_execute = Blueprint("execute", __name__, url_prefix="/execute")

@blue_execute.route('/file')
def executepy():
    
    server_res = Response('The file is now executing ...')
    server_res.headers["Access-Control-Allow-Origin"] = "*"

    



