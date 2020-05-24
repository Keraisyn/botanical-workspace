from flask import Flask , request

app = Flask(__name__)

@app.route('/kill', methods=["POST"])
def kill():
    if request.method == "POST":
        print("kill")
        return "Killing Plant"
        #kill here

@app.route('/water', methods=["POST"])
def water():
    if request.method == "POST":
        print("water")
        return "Watering Plant"
        #water here

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)