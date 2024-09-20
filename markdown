# app.py
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    # Ejecuta tu código de Python aquí
    result = tu_codigo_de_python()
    return render_template("index.html", result=result)

if __name__ == "__main__":
    app.run()
