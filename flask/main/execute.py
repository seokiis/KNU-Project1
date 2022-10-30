import json
import subprocess
import os
from itertools import product
from . import upload
from werkzeug.utils import secure_filename
from flask import Blueprint, request, jsonify, Response, current_app
import makeplot

blue_execute = Blueprint("execute", __name__, url_prefix="/execute")

@blue_execute.route('/execute', methods=['POST'])
def execute():

    server_res = Response('The file is executed ...')
    server_res.headers["Access-Control-Allow-Origin"] = "*"


    # front 로부터 id가 왔는지 체크
    if 'id' not in request.form:
        return 'ID is missing', 404
    id = request.form['id']    ## 확인 후 수정 필요


    pjson = './parameter/'+id+'.json'
    params = json.load(open(pjson))

    location = os.path.join(current_app.config['UPLOAD_FOLDER'], upload.userfile)
    
    # 이중 Json 해체하여 real_param에 파라미터 값 넘겨주기
    real_param = params['params']

    ptype = list(real_param.keys())
    pvalue = list(real_param.values())

    param_str = ''
    for i in range(len(real_param)):
        param_str += ' --'+ptype[i] + ' ' + str(pvalue[i])

    print(param_str)

    # **** Json 에서 파라미터 분리하여 order에 넣기

    order = 'python3' + ' ' + location +  ' ' + param_str


    real_param = params['params']
    print(real_param[0]['name'])
    print(real_param[0]['domain'])
    print(real_param[0]['value'])
    print(real_param[1]['name'])
    print(real_param[1]['domain'])
    print(real_param[1]['value'])

    # out = subprocess.run(order, shell=True)
    # print('return code', out.returncode)

    plt = makeplot()
    return "http://3.39.93.244:5000/download/"+plt+".html"