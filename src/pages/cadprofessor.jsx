import React from "react";
import "../style/cadaluno.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Logo from "../img/logoif.png";
import MenuDrop from "../components/header";

function CadastrarProfessor() {
    return (
        <div className="page">
            <div className="menu-conteiner">
                <MenuDrop />
            </div>
            <div className="conteiner-card">
                <div className="form-container">
                    <h2>Cadastro de Professor</h2>
                
                    <fieldset>
                        <legend>Dados do Doscente</legend>
                        <div className="form-grid">
                            <input type="text" placeholder="Nome do Professor" required />
                            <div className="input-icon">
                                <input type="email" placeholder="E-mail" required />
                                <input type="text" placeholder="CPF" required />
                                <FaSearch className="icon" />
                            </div>
                            <input type="text" placeholder="RG" required />
                            <input type="tel" placeholder="Telefone Celular" required />
                            <input type="date" placeholder="Data de Nascimento" required />
                            <select required>
                                <option>Sexo</option>
                                <option>Masculino</option>
                                <option>Feminino</option>
                            </select>
                            <select required>
                                <option>Estado Civil</option>
                                <option>Solteiro</option>
                                <option>Casado</option>
                                <option>Viúvo</option>
                                <option>Outros</option>
                            </select>
                        </div>
                    </fieldset>
                
                    <fieldset>
                        <legend>Endereço</legend>
                        <div className="form-grid">
                            <input type="text" placeholder="Endereço" required />
                            <input type="text" placeholder="CEP" required />
                            <input type="text" placeholder="País" required />
                            <input type="text" placeholder="Município" required />
                            <input type="text" placeholder="Nacionalidade" required />
                            <input type="text" placeholder="RNE (se estrangeiro)" />
                            <input type="text" placeholder="Passaporte" />
                        </div>
                    </fieldset>
                
                    <fieldset>
                        <legend>Dados Acadêmicos</legend>
                        <div className="form-grid">
                               <input type="text" placeholder="Cargo" required />
                                <input type="text" placeholder="Area de Atuação" required />
                                <input type="text" placeholder="Diciplinas lecionadas" required />
                            <input type="text" placeholder="Tipo Sanguíneo" required />
                            <input type="text" placeholder="Raça" required />
                        </div>
                    </fieldset>
                
                    <div className="button-container">
                        <button type="submit" className="btn-save">Salvar</button>
                        <button type="button" className="btn-save">Alterar</button>
                        <button type="button" className="btn-save">Excluir</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CadastrarProfessor;

