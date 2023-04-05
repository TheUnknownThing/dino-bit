from flask import Flask, render_template
from flask_bootstrap import Bootstrap

app = Flask(__name__, static_url_path='', static_folder='.')
bootstrap=Bootstrap(app)
app.config['SECRET_KEY']="hello python"

app.template_folder = '.'

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=8088)
