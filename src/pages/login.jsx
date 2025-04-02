import React from "react";
import '../style/login.css'
import { Link } from "react-router-dom";
import Logo from '../img/logoif.png'
function Login() {
    return(
       <div className="login-conteiner">
        
        <div className="login">
            <img src={Logo} alt="" />
            <div className="input">
                <label >Usuario:<input type="text" placeholder="Digite se nome de Usuario"/></label>
                <label >Senha:<input type="passowrd"  placeholder="Digite sua senha"/></label>
            </div>
            
                <div className="buttons">
                    <button><Link to='/home'>Continuar</Link></button>
                    <button className="cancelb"><Link  to='/home'>Cancelar</Link></button>
                </div>
            
        </div>
       </div>
    )
}
export default Login