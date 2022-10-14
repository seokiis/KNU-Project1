import os
from itertools import product
from werkzeug.utils import secure_filename
from flask import Blueprint, request, jsonify, Response, current_app

blue_upload = Blueprint("upload", __name__, url_prefix="/upload")

@blue_upload.route('/file', methods=['POST'])
def uploadfile():
    
    server_res = Response('successfully uploaded in Server.')
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
    
    filename = secure_filename(f.filename)
    f.save(os.path.join(current_app.config['UPLOAD_FOLDER'], filename))
    # f.save(os.path.join(current_app.config['UPLOAD_FOLDER'], id+'_'+filename))

    return server_res

@blue_upload.route('/param', methods=['POST'])
def uploadparam():

    server_res = Response('successfully uploaded in Server.')
    server_res.headers["Access-Control-Allow-Origin"] = "*"

    param = request.json
    if param['id']:
        client_id = param['id']
        del(param['id'])
        print(f'client: {client_id}')
    
    p_values = list(param.values())
    model_inputlist = list(product(*p_values))
    print(model_inputlist)

    return jsonify(param)