from flask import Flask , request, json
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/kill', methods=["POST"])
@cross_origin(origin='*',headers=['Content-Type'])
def kill():
    if request.method == "POST":
        print("kill")
        return json.jsonify({"data": "kill"})
        #kill here

@app.route('/water', methods=["POST"])
def water():
    if request.method == "POST":
        print("water")
        return json.jsonify({"data": "water"})
        #water here

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3000)