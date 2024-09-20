# app.py
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    # Ejecuta tu código de Python aquí
    result = execute_turtle_code()
    return render_template("index.html", result=result)

def execute_turtle_code():
    # Importar bibliotecas necesarias
    import turtle
    import math

    # Crear una instancia de Turtle
    t = turtle.Turtle()

    # Ejecutar tu código de Python aquí
    # ...

    # Devolver el resultado como una cadena HTML
    return "<canvas id='canvas'></canvas>"

if __name__ == "__main__":
    app.run()
