from flask import render_template, request, redirect, url_for
from models import Operador, Maquina
from forms import SignUpForm, dadosMaquina, cadastroMaquina
from flask_login import current_user, logout_user, login_user, login_required
def register_routes(app, db):

    
    @app.route("/", methods=["GET", "POST"])
    @login_required
    def index():
        form = cadastroMaquina()
        if form.validate_on_submit():
            maquina = Maquina(
                nome = form.nome.data,
                dados = {}
            )
            db.session.add(maquina)
            db.session.commit()
            return "deu certo a principio"
        return render_template("index.html", form = form)
    
    @app.route("/adicionando_atributos", methods=["GET", "POST"])
    def addAtributo():
        form = dadosMaquina()
        maquina = Maquina.query.get(1)
        
        if form.validate_on_submit():
            maquina.dados = {form.nomedado.data:123}
            db.session.commit()

            return render_template("adicionar_dados.html", form=form)
        return render_template("adicionar_dados.html", form=form)
    

    @app.route('/signup', methods=["GET", "POST"])
    def signup():
        form = SignUpForm()
        if form.validate_on_submit():
            operador = Operador(
                username = form.username.data,
                password = form.password.data,
            )
            
            db.session.add(operador)
            db.session.commit()
            return "operador cadastrado"
        return render_template('signup.html', form=form)

    @app.route('/login', methods=["GET", "POST"])
    def login():

        form = SignUpForm()
        if form.validate_on_submit():
            nome = form.username.data
            operador = Operador.query.filter_by(username = nome).first()
            if operador:
                if operador.password == form.password.data:
                    login_user(operador)
                    return redirect(url_for("index"))
                else:
                    return "errou a senha faca denovo"
            else:
                return "n existe esse usuário"
        return render_template('login.html', form=form)

    
    
