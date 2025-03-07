import React from "react";
import '../style/login.css'
function Login() {
    return(
        <>
        <div className="login-conteiner">
            <div className="cadastro">
                <h2>Entrar no sistema</h2>
            </div>
            <div className="input-txt">
                <div className="input-conteiner">
                    <div className="txtcaixa">
                        <label htmlFor="">
                            Nome:<input placeholder="Ex. Jose javascript html da silva phyton" className="txt-info" type="text" />
                        </label>
                        <label  htmlFor="">
                            E-mail:<input placeholder="Ex. paulwalker@gmail.com" className="txt-info" type="text" />
                        </label>
                    </div>
                    <div className="txtpeque">
                        <label htmlFor="">Matricula: <input className="txt-num" placeholder="Ex. 000000-00" type="text" />
                        </label>
                        <label htmlFor="">
                            SIAPE:
                            <input className="txt-num" placeholder="Ex. 000000-00" type="text" />
                        </label>
                    </div>
                    <div className="txtpeque">
                        <label htmlFor="">
                            RG:
                            <input className="txt-num" placeholder="Ex. 000000-00" type="text" />
                        </label>
                        <label htmlFor="">
                            CPF:
                            <input className="txt-num" placeholder="Ex. 000000000-00" type="text" />
                        </label>
                    </div>
                    <label htmlFor="">
                        Senha:
                        <input type="password" name="senha" id="senha" />
                    </label>
                </div>
            </div>
            <button>Continuar </button>
        </div>
        </>
    )
}
export default Login