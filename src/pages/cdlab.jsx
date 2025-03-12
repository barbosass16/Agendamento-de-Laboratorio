import React from "react";
import '../style/login.css'
import { Link } from "react-router-dom";
import Logo from '../img/logoif.png'
function Cadlab() {
    return(
       <div className="login-conteiner">
        <div className="apresenta">
            <h2>Cadastre - se</h2>
            <p>Registre - se</p>
        </div>
        
        <div className="login">
            <h2>Continuar</h2>
            <div className="input">
                <label htmlFor="">Nº da Sala:<input type="text" /></label>
                <label htmlFor="">Nº do Laboratorio:<input type="text" /></label>
            </div>
            
                <Link to='/home'><button>Cadastrar</button></Link>
            
        </div>
       </div>
    )
}
export default Cadlab