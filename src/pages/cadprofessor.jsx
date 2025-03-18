import React from "react";
import '../style/login.css'; // Certifique-se de que o caminho está correto
import { Link } from "react-router-dom";
import Logo from '../img/logoif.png'; // Certifique-se de que a imagem esteja na pasta correta

function CadastrarProfessor() {
    return (
        <div className="login-container">
            <div className="apresenta">
                <h2>Cadastrar Professor</h2>
                <p>Faça login para acessar os recursos do sistema</p>
            </div>
        
            <div className="login">
                <h2>Cadastrar aluno</h2>
                <div className="input">
                    <label htmlFor="usuario">Usuário:
                        <input type="text" id="usuario" />
                    </label>
                    <label htmlFor="senha">Senha:
                        <input type="password" id="senha" />
                    </label>
                </div>
            
                <Link to="/home"><button>Continuar</button></Link>
            </div>
        </div>
    );
}

export default CadastrarProfessor;
