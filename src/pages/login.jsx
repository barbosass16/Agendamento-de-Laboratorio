import React from "react";
import '../style/login.css'
import { Link } from "react-router-dom";
import Logo from '../img/logoif.png'
function Login() {
    return(
         <div className="cadlab">
        <div className="login-conteiner">
        <img src={Logo}  />
         <div className="login">

             <div className="input">
                 <label>Usuario:<input placeholder="Nome de Usuario" type="text" /><span></span></label>
                 <label htmlFor="">Senha:<input placeholder="Digite sua senha" type="text" /></label>
                 
             </div>
        
         </div>
          <div className="btlogin">
                     <Link  to='/home'><button className="btlogar">Logar</button></Link>
                     <Link><button className="btcancelar">Cancelar</button></Link> 
            </div>
        </div>
    </div>
    )
}
export default Login