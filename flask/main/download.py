import os
from flask import Blueprint, send_file, current_app, url_for, redirect

blue_download = Blueprint("download", __name__, url_prefix="/download")


@blue_download.route('/uploads/<string:fname>')
def downloadfile(fname):
    return send_file(os.path.join(current_app.config['UPLOAD_FOLDER'], fname))


@blue_download.route('/param/<string:fname>')
def downloadparam(fname):
    return send_file(os.path.join(current_app.config['PARAM_FOLDER'], fname))


@blue_download.route('/plot/<string:fname>')
def downloadplot(fname):
    return send_file(os.path.join(current_app.config['PLOT_FOLDER'], fname))
