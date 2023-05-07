# 缺陷：如何将翼龙（飞鸟）的数量增多？
# # 以及可能会出现 Player0？
# 排行榜比较麻烦，暂时鸽着
from flask import Flask, render_template, request, redirect, url_for
from flask_bootstrap import Bootstrap
# import serial
# import keyboard
#
# ser=serial.Serial()
# ser.port="COM1"
# ser.baudrate=115200

app = Flask(__name__, static_folder='./templates', static_url_path='')
# 这里的static_folder指... 注意“.”不能少
bootstrap=Bootstrap(app)
app.config['SECRET_KEY']="jvpoe2@!OJVDisoaj3i10398ug8"
iframeCount=None
key={"1":["up","down"],"2":["q","a"],"3":["w","s"],"4":["e","d"]}

@app.route('/game',methods=['GET','POST'])
def index():
    '''message=ser.read_all()
    if message:
        message=message.split()
        if message[1]=="Jump":
            keyboard.send(key[message[0]][0])
        elif message[1]=="Low":
            keyboard.send(key[message[0]][1])'''
            
    return render_template('index.html',num_frames=4)

@app.route('/introduction')
def introduction():
    return render_template('introduction.html')

@app.route('/countdown')
def countdown():
    return render_template('countdown.html')


@app.route('/',methods=['GET','POST'])
def home():
    return render_template('home.html')

@app.route('/connect')
def connect():
    return render_template('connect.html')

@app.route('/game_select',methods=['GET','POST'])
def game_select():
    return render_template('game_select.html')

@app.route('/end')
def end():
    return render_template('end.html', highest_score=1000)

if __name__ == '__main__':
    app.run(debug=True, port=8088)
