from flask import Flask, render_template, request, redirect, url_for
from flask_bootstrap import Bootstrap

app = Flask(__name__, static_folder='./templates', static_url_path='')
# 这里的static_folder指... 注意“.”不能少
bootstrap=Bootstrap(app)
app.config['SECRET_KEY']="hello python"

@app.route('/game',methods=['GET','POST'])
def index(iframeCount):
    if (iframeCount != None):
        redirect("/game_select")
    return render_template('index.html',num_frames=iframeCount)

@app.route('/introduction')
def introduction():
    return render_template('introduction.html')

@app.route('/',methods=['GET','POST'])
def home():
    return render_template('home.html')

@app.route('/connect')
def connect():
    return render_template('connect.html')

@app.route('/game_select',methods=['GET','POST'])
def game_select():
    value=1
    if (value != None):
        redirect(url_for('game', iframeCount=value))
    return render_template('game_select.html')

@app.route('/end')
def end():
    return render_template('end.html', highest_score=1000)

if __name__ == '__main__':
    app.run(debug=True, port=8088)
