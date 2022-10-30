import json
import subprocess
import os
from itertools import product
from . import upload
from . import makeplot
from werkzeug.utils import secure_filename
from flask import Blueprint, request, jsonify, Response, current_app


blue_execute = Blueprint("execute", __name__, url_prefix="/execute")

@blue_execute.route('/execute', methods=['POST'])
def execute():

    server_res = Response('The file is executed ...')
    server_res.headers["Access-Control-Allow-Origin"] = "*"


    # front 로부터 id가 왔는지 체크
    r_json = request.json
    if 'id' not in r_json:
        return 'ID is missing', 404
    id = r_json['id']    ## 확인 후 수정 필요


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

    # example
    result_dic = [
        {
            "assignments": [
                {
                    "name": "--learning_rate",
                    "value": "0.08177734351368438"
                },
                {
                    "name": "--dropout",
                    "value": "0.4439382425122721"
                }
            ],
            "observation": {
                    "metrics": [
                        {
                            "name": "Validation-accuracy",
                            "value": 0.9712
                        }
                        ,{
                            "name" : "index",
                            "value" : 1
                        }
                    ]
            }
        },
        {
            "assignments": [
                {
                "name": "--learning_rate",
                "value": "0.13167199355992532"
                },
                {
                "name": "--dropout",
                "value": "0.36691549333903695"
                }
            ],
            "observation": {
                "metrics": [
                {
                    "name": "Validation-accuracy",
                    "value": 0.9752
                }
                ,{
                            "name" : "index",
                            "value" : 2
                        }
                ]
            }
        },
        {
            "assignments": [
                {
                "name": "--learning_rate",
                "value": "0.04583595425426854"
                },
                {
                "name": "--dropout",
                "value": "0.1967271602243"
                }
            ],
            "observation": {
                "metrics": [
                {
                    "name": "Validation-accuracy",
                    "value": 0.9679
                },
                {
                            "name" : "index",
                            "value" : 3
                        }
                ]
            }
        },
        {
            "assignments": [
                {
                "name": "--learning_rate",
                "value": "0.09349862655663545"
                },
                {
                "name": "--dropout",
                "value": "0.2575218058968"
                }
            ],
            "observation": {
                "metrics": [
                {
                    "name": "Validation-accuracy",
                    "value": 0.9740
                },
                {
                            "name" : "index",
                            "value" : 4
                        }
                ]
            }
        }
    ]

    plt = makeplot.makeplot(result_dic)
    return "http://3.39.93.244:5000/download/"+plt+".html"