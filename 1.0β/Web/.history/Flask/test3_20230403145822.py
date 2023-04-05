from flask import Flask,render_template,redirect,request,flash
from flask_bootstrap import Bootstrap

app=Flask(__name__)
bootstrap=Bootstrap(app)
app.config['SECRET_KEY']="hello python"

#常规路由与视图函数示例
@app.route('/chat',methods=["GET","POST"])
def s():
    global name,liuyan
    k=request.form.get("qu")
    liuyan.append(k)
    return render_template('chat.html',m=name,a=liuyan)

@app.route('/',methods=['GET','POST'])
def base():
    return render_template("base.html")

@app.route('/game',methods=['GET','POST'])
def game():
    return render_template("index.html")

app.run(host="0.0.0.0",port=19090,debug=True)
