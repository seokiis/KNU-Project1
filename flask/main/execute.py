import json
import subprocess
import os
from itertools import product
from . import makeplot
from werkzeug.utils import secure_filename
from flask import Blueprint, request, jsonify, Response, current_app, redirect, url_for, send_file


blue_execute = Blueprint("execute", __name__, url_prefix="/execute")


@blue_execute.route('/', methods=['POST'])
def execute():

    server_res = Response('The file is executed ...')
    server_res.headers["Access-Control-Allow-Origin"] = "*"

    # # front 로부터 id가 왔는지 체크
    # r_json = request.json
    # if 'id' not in r_json:
    #     return 'ID is missing', 404
    # id = r_json['id']  # 확인 후 수정 필요
    # parameter = r_json['params']
    # # example

    # yaml 파일 만들었다 치고,
    # order = 'kubectl apply -f ' + id + '.yaml'
    # out = subprocess.run(order, shell=True)

    result_dic = [
        {
            "assignments": [
                {
                    "name": "--learning_rate",
                    "value": "0.13289143571323157"
                },
                {
                    "name": "--dropout",
                    "value": "0.48400234186543241"
                }
            ],
            "observation": {
                "metrics": [
                    {
                        "name": "Validation-accuracy",
                        "value": 0.9956
                    },
                    {
                        "name": "index",
                        "value": 1
                    }
                ]
            }
        },
        {
            "assignments": [
                {
                    "name": "--learning_rate",
                    "value": "0.0846578145345314"
                },
                {
                    "name": "--dropout",
                    "value": "0.15671137817565413"
                }
            ],
            "observation": {
                "metrics": [
                    {
                        "name": "Validation-accuracy",
                        "value": 0.9665
                    },
                    {
                        "name": "index",
                        "value": 2
                    }
                ]
            }
        },
        {
            "assignments": [
                {
                    "name": "--learning_rate",
                    "value": "0.0871456123784531"
                },
                {
                    "name": "--dropout",
                    "value": "0.1567145612312484"
                }
            ],
            "observation": {
                "metrics": [
                    {
                        "name": "Validation-accuracy",
                        "value": 0.9689
                    },
                    {
                        "name": "index",
                        "value": 3
                    }
                ]
            }
        },
        {
            "assignments": [
                {
                    "name": "--learning_rate",
                    "value": "0.0918671318713214"
                },
                {
                    "name": "--dropout",
                    "value": "0.2987165718651787"
                }
            ],
            "observation": {
                "metrics": [
                    {
                        "name": "Validation-accuracy",
                        "value": 0.9947
                    },
                    {
                        "name": "index",
                        "value": 4
                    }
                ]
            }
        },
        {
            "assignments": [
                {
                    "name": "--learning_rate",
                    "value": "0.1567845121368438"
                },
                {
                    "name": "--dropout",
                    "value": "0.4559382425122721"
                }
            ],
            "observation": {
                "metrics": [
                    {
                        "name": "Validation-accuracy",
                        "value": 0.9855
                    },
                    {
                        "name": "index",
                        "value": 5
                    }
                ]
            }
        },
        {
            "assignments": [
                {
                    "name": "--learning_rate",
                    "value": "0.0915675414567151"
                },
                {
                    "name": "--dropout",
                    "value": "0.5123784535321771"
                }
            ],
            "observation": {
                "metrics": [
                    {
                        "name": "Validation-accuracy",
                        "value": 0.9619
                    },
                    {
                        "name": "index",
                        "value": 6
                    }
                ]
            }
        },
        {
            "assignments": [
                {
                    "name": "--learning_rate",
                    "value": "0.08297734351368438"
                },
                {
                    "name": "--dropout",
                    "value": "0.4639382425122721"
                }
            ],
            "observation": {
                "metrics": [
                    {
                        "name": "Validation-accuracy",
                        "value": 0.9855
                    },
                    {
                        "name": "index",
                        "value": 7
                    }
                ]
            }
        },
        {
            "assignments": [
                {
                    "name": "--learning_rate",
                    "value": "0.1567213845612354"
                },
                {
                    "name": "--dropout",
                    "value": "0.4512384512358945"
                }
            ],
            "observation": {
                "metrics": [
                    {
                        "name": "Validation-accuracy",
                        "value": 0.9623
                    },
                    {
                        "name": "index",
                        "value": 8
                    }
                ]
            }
        },
        {
            "assignments": [
                {
                    "name": "--learning_rate",
                    "value": "0.0816654023870123"
                },
                {
                    "name": "--dropout",
                    "value": "0.4139382425122721"
                }
            ],
            "observation": {
                "metrics": [
                    {
                        "name": "Validation-accuracy",
                        "value": 0.9733
                    },
                    {
                        "name": "index",
                        "value": 9
                    }
                ]
            }
        },
        {
            "assignments": [
                {
                    "name": "--learning_rate",
                    "value": "0.0132865131286123"
                },
                {
                    "name": "--dropout",
                    "value": "0.5151321878612315"
                }
            ],
            "observation": {
                "metrics": [
                    {
                        "name": "Validation-accuracy",
                        "value": 0.9764
                    },
                    {
                        "name": "index",
                        "value": 10
                    }
                ]
            }
        },
        {
            "assignments": [
                {
                    "name": "--learning_rate",
                    "value": "0.08377734351368438"
                },
                {
                    "name": "--dropout",
                    "value": "0.4839382425122721"
                }
            ],
            "observation": {
                "metrics": [
                    {
                        "name": "Validation-accuracy",
                        "value": 0.9212
                    },
                    {
                        "name": "index",
                        "value": 11
                    }
                ]
            }
        },
        {
            "assignments": [
                {
                    "name": "--learning_rate",
                    "value": "0.08197734351368438"
                },
                {
                    "name": "--dropout",
                    "value": "0.4239382425122721"
                }
            ],
            "observation": {
                "metrics": [
                    {
                        "name": "Validation-accuracy",
                        "value": 0.9561
                    },
                    {
                        "name": "index",
                        "value": 12
                    }
                ]
            }
        },
        {
            "assignments": [
                {
                    "name": "--learning_rate",
                    "value": "0.09177734351368438"
                },
                {
                    "name": "--dropout",
                    "value": "0.4139382425122721"
                }
            ],
            "observation": {
                "metrics": [
                    {
                        "name": "Validation-accuracy",
                        "value": 0.9824
                    },
                    {
                        "name": "index",
                        "value": 13
                    }
                ]
            }
        },
        {
            "assignments": [
                {
                    "name": "--learning_rate",
                    "value": "0.07177734351368438"
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
                        "value": 0.9334
                    },
                    {
                        "name": "index",
                        "value": 14
                    }
                ]
            }
        },
        {
            "assignments": [
                {
                    "name": "--learning_rate",
                    "value": "0.08377734351368438"
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
                        "value": 0.9112
                    },
                    {
                        "name": "index",
                        "value": 15
                    }
                ]
            }
        }
    ]
    # plt = makeplot.makeplot(parameter, id)
    id = '3'
    plt = makeplot.makeplot(result_dic, id)

    # 11/23 이 방식 대로 하니까 잘감
    # return send_file(os.path.join(current_app.config['PLOT_FOLDER'], plt+'.csv'))

    return send_file(os.path.join(current_app.config['PLOT_FOLDER'], plt+'.html'))
