from flask import Flask,render_template,redirect,request,flash
from flask_wtf import FlaskForm
from wtforms import SubmitField,StringField
from flask_bootstrap import Bootstrap
class fform(FlaskForm):
    usn=StringField("Username")
    psw=StringField("Password")
    su=SubmitField('提交')
a="name"
userinfo={'admin':'123','jane':'111','mike':'222','tom':'333'}
liuyan=[]
app=Flask(__name__)
bootstrap=Bootstrap(app)
app.config['SECRET_KEY']="hello python"

@app.route('/log',methods=["GET","POST"])
def log():
    global name
    name=request.args.get("name")
    psd=request.args.get("psd")
    if name in userinfo:
        if userinfo[name]==psd:
            return redirect("/chat")
    print(name,psd)
    return render_template('login.html')

#常规路由与视图函数示例
@app.route('/chat',methods=["GET","POST"])
def s():
    global name,liuyan
    k=request.form.get("qu")
    liuyan.append(k)
    return render_template('chat.html',m=name,a=liuyan)

#快速表单示例
@app.route('/reg', methods=['GET', 'POST'])
def q():
    form = fform()
    if form.validate_on_submit():
        # 验证表单通过，进行登录操作
        a = form.usn.data
        b = form.psw.data
        if not a in userinfo:
            userinfo[a] = b
            return redirect("/log")
        else:
            flash('Username already exists')
            return render_template('form.html', form=form)
    return render_template("form.html", form=form)


@app.route('/',methods=['GET','POST'])
def qq():
    return render_template("base.html")

app.run(host="0.0.0.0",port=19090,debug=True)
