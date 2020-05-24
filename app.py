from flask import Flask , request

app = Flask(__name__)

@app.route('/kill')
def kill():
    if request.method == "POST":
        return "Killing Plant"
        #kill here

@app.route('/water')
def water():
    if request.method == "POST":
        return "Watering Plant"
        #water here

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)