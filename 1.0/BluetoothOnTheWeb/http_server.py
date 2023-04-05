from flask import Flask, render_template
import pygatt

app = Flask(__name__)

adapter = pygatt.BGAPIBackend()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/devices")
def devices():
    adapter.start()
    devices = adapter.scan(timeout=5)
    adapter.stop()
    return render_template("devices.html", devices=devices)

@app.route("/connect/<mac>")
def connect(mac):
    adapter.start()
    device = adapter.connect(mac)
    adapter.stop()
    return render_template("connect.html", device=device)

@app.route("/disconnect/<mac>")
def disconnect(mac):
    adapter.start()
    device = adapter.disconnect(mac)
    adapter.stop()
    return render_template("disconnect.html", device=device)

if __name__ == "__main__":
    app.run(host="0.0.0.0",port="8088",debug=True)
