from flask import Blueprint, request, jsonify, Response, current_app

blue_pyplot = Blueprint("pyplot", __name__, url_prefix='/pyplot')
