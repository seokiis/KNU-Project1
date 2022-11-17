import os
from flask import Blueprint, send_file, current_app

blue_download = Blueprint("download", __name__, url_prefix="/download")

@blue_download.route('/<string:fname>')
def downloadfile(fname):
    return send_file(os.path.join(current_app.config['IMAGE_FOLDER'], fname))