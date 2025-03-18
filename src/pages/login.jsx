import React from "react";
import '../style/login.css'
import { Link } from "react-router-dom";
import Logo from '../img/logoif.png'
function Login() {
    return(
       <div className="login-conteiner">
        <div className="apresenta">
            <h2>Entrar no Sistema</h2>
            <p>Faça login para acessar os recursos do sistema</p>
        </div>
        
        <div className="login">
            <h2>Continuajk</h2>
            <div className="input">
                <label htmlFor="">Usuario:<input type="text" /></label>
                <label htmlFor="">Senha:<input type="text" /></label>
            </div>
            
                <Link to='/home'><button>Continuar</button></Link>
            
        </div>
       </div>
    )
}
export default Login