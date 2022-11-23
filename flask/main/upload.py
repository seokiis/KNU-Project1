import os
from itertools import product
from werkzeug.utils import secure_filename
import json
from flask import Blueprint, request, jsonify, Response, current_app, url_for, redirect

blue_upload = Blueprint("upload", __name__, url_prefix="/upload")

global userfile
userfile = ''


@blue_upload.route('/file', methods=['POST'])
def uploadfile():
    global userfile

    server_res = Response('Successfully uploaded in Server.')
    server_res.headers["Access-Control-Allow-Origin"] = "*"

# **** 파일과 ID가 정상 입력되었는지 체크 ****
    if 'model' not in request.files:
        return 'File is missing', 404
    if 'id' not in request.form:
        return 'ID is missing', 404

    f = request.files['model']
    id = request.form['id']

    if f.filename == '':
        return 'File is missing', 404

# **** 파일을 저장합니다 **** 파일명 = ID_filename
    filename = secure_filename(f.filename)
    f.save(os.path.join(current_app.config['UPLOAD_FOLDER'], id+'_'+filename))
    print(f'file has been saved as {id}_{filename}')
    userfile = id+'_'+filename

    return server_res


@blue_upload.route('/param', methods=['POST'])
def uploadparam():
    global userid

    server_res = Response('Successfully uploaded in Server.')
    server_res.headers["Access-Control-Allow-Origin"] = "*"

    # if 'param' not in request.form:
    #     return 'Paramters are missing', 404

    params = request.json

    # **** 파라미터를 저장합니다
    print(params)
    id = params['id']
    ppath = './parameter/'+id+'_parameter.json'
    with open(ppath, 'w', encoding='utf_8') as psave:
        json.dump(params, psave, indent=4)
    print(f'parameters have been saved successfully in {id}.json')

    return server_res
