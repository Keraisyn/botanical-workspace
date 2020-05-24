from flask import Flask , request, json
from flask_cors import CORS, cross_origin
import time
import serial

ser = serial.Serial('COM5',9600)
ogtime = (time.time())
time.sleep(3)

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/kill', methods=["POST"])
@cross_origin(origin='*',headers=['Content-Type'])
def kill():
    if request.method == "POST":
        ser.write(b"k")
        return json.jsonify({"data": "kill"})
        #kill here

@app.route('/water', methods=["POST"])
@cross_origin(origin='*',headers=['Content-Type'])
def water():
    if request.method == "POST":
        print("water")
        return json.jsonify({"data": "water"})
        #water here

@app.route('/update', methods=["POST"]) 
@cross_origin(origin='*',headers=['Content-Type'])
def update():
    if request.method == "POST":
        ser.write(b"r")
        data = ser.readline()
        return json.jsonify({"data": "update received"})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3000)