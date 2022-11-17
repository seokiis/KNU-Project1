import json
import subprocess
import os
from itertools import product
from . import upload
from . import makeplot
from werkzeug.utils import secure_filename
from flask import Blueprint, request, jsonify, Response, current_app


blue_execute = Blueprint("execute", __name__, url_prefix="/execute")

@blue_execute.route('/', methods=['POST'])
def execute():

    server_res = Response('The file is executed ...')
    server_res.headers["Access-Control-Allow-Origin"] = "*"


    # # front 로부터 id가 왔는지 체크
    r_json = request.json
    if 'id' not in r_json:
        return 'ID is missing', 404
    id = r_json['id']    ## 확인 후 수정 필요

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
    print(plt)
    return "http://3.39.93.244:5000/download/plot/"+plt+".html"