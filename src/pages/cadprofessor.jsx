import React from "react";
import '../style/login.css'; 
import { Link } from "react-router-dom";
import Logo from '../img/logoif.png'; 
import MenuDrop from "../components/header";
function CadastrarProfessor() {
    return (
        <div className="cadastro-conteiner">
        <MenuDrop/>
           <div className="page-padding">
               <div className="login-conteiner">
                <img src={Logo} alt="" />
                <div className="login">
                    
                    <div className="input">
                        <label htmlFor="">Nº da Sala:<input placeholder="EX. Sala 01" type="text" /></label>
                        <label htmlFor="">Nº do Laboratorio:<input type="text" /></label>
                        <label htmlFor="">Nº de computadores:<input type="text" /></label>
                    </div>
           
                        <div className="btlogin">
                            <Link to='/home'><button>Cadastrar</button></Link>
                        </div>
           
                </div>
               </div>
           </div>
       </div>
    );
}

export default CadastrarProfessor;
