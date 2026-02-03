from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    
    # initial page state: main GIF and question shown
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
