import React from "react";
import '../style/login.css'
function Login() {
    return(
        <>
        <div className="login-conteiner">
            <h2>Entrar no sistema</h2>
            <div className="input-conteiner">
                <label htmlFor="">
                    Usuario:
                    <input type="text" />
                </label>
                <label htmlFor="">
                    Senha:
                    <input type="password" name="senha" id="senha" />
                </label>
            </div>
            <button>Continuar </button>
        </div>
        </>
    )
}
export default Login