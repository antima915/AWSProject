import os
from flask import Flask, render_template, request, redirect, send_file,jsonify,url_for
import main
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin

app = Flask(__name__)

# Flask-Cors
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def entry_point():
    return "Welcome to AWS Services"

# --------- EC2 Instance Routes -------

@app.route('/ec2/create_key',methods = ['POST'])
@cross_origin()
def create_key_route():
    if request.method == "POST":
        input_json = request.get_json(force=True) 
        main.create_key_pair(input_json['name'])
        return(input_json)

@app.route('/ec2/create_inst', methods = ['POST'])
@cross_origin()
def create_route():
    if request.method == "POST":
        input_json = request.get_json(force=True) 
        main.create_instance(input_json)
        return (input_json)

@app.route('/ec2/run_inst', methods=['GET'])
def running_route():
    data = main.get_running_instances()
    return data


@app.route("/ec2/stop_inst", methods=['POST'])
@cross_origin()
def stop_route():
     if request.method == "POST":
        input_json = request.get_json(force=True)
        main.stop_instance(input_json['id'])
        return (input_json)

@app.route("/ec2/terminate_inst", methods=['POST'])
@cross_origin()
def terminate_route():
    if request.method == "POST":
        input_json = request.get_json(force=True)
        main.terminate_instance(input_json['id'])
        # print(input_json)
        return (input_json)
       

# ----------- S3 Bucket ---------

@app.route("/s3/storage", methods = ['POST'])
@cross_origin()
def files():
    if request.method == "POST":
        input_json = request.get_json(force=True)
        contents = main.list_files(input_json['bucket'])
        return contents


# ------- IAM ----------

@app.route('/iam/create',methods=['POST'])
@cross_origin()
def create_user_route():
    if request.method == 'POST':
        input_json = request.get_json(force=True)
        main.create_user(input_json['user'])
    return input_json

@app.route('/iam/all')
def all_user_route():
    res = main.all_user()
    return res

@app.route('/iam/describe',methods = ['POST'])
@cross_origin()
def describe_user_route():
    if request.method == 'POST':
        input_json = request.get_json(force=True)
        res = main.describe_user(input_json['user'])
        return res

@app.route("/iam/delete",methods = ['POST'])
def delete_user_route():
    if request.method == 'POST':
        input_json = request.get_json(force=True)
        res = main.delete_user(input_json['user'])
        return res

if __name__ == '__main__':
    app.run(debug=True,host="0.0.0.0")