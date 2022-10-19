import json
import subprocess
import os
from itertools import product
from . import upload
from werkzeug.utils import secure_filename
from flask import Blueprint, request, jsonify, Response, current_app

blue_execute = Blueprint("execute", __name__, url_prefix="/execute")

@blue_execute.route('/<id>')
def executepy(id):
    server_res = Response('The file is executed ...')
    server_res.headers["Access-Control-Allow-Origin"] = "*"

    pjson = './parameter/'+id+'.json'
    params = json.load(open(pjson))

    location = os.path.join(current_app.config['UPLOAD_FOLDER'], upload.userfile)
    
    # 이중 Json 해체하여 real_param에 파라미터 값 넘겨주기
    real_param = params['param']

    ptype = list(real_param.keys())
    pvalue = list(real_param.values())

    param_str = ''
    for i in range(len(real_param)):
        param_str += ' --'+ptype[i] + ' ' + str(pvalue[i])

    print(param_str)

    # **** Json 에서 파라미터 분리하여 order에 넣기

    order = 'python3' + ' ' + location +  ' ' + param_str

    out = subprocess.run(order, shell=True)
    print('return code', out.returncode)

    return server_res