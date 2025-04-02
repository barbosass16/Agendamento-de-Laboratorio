import React from "react";
import "../style/cadaluno.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Logo from "../img/logoif.png";
import MenuDrop from "../components/header";

function CadastrarAluno() {
    return (
        <div className="page">
            <div className="menu-conteiner">
                <MenuDrop />
            </div>
            <div className="conteiner-card">
                <div className="form-container">
                    <h2>Cadastro de Discente</h2>
                
                    <fieldset>
                        <legend>Dados do Discente</legend>
                        <div className="form-grid">
                            <input type="text" placeholder="Nome do Discente" required />
                            <input type="text" placeholder="Nome da Mãe" required />
                            <input type="text" placeholder="Nome do Pai" required />
                            <div className="input-icon">
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
                            <input type="text" placeholder="Matrícula" required />
                            <input type="text" placeholder="Turma de Entrada" required />
                            <input type="email" placeholder="E-mail" required />
                            <select required>
                                <option>Status Acadêmico</option>
                                <option>Ativo</option>
                                <option>Concluído</option>
                                <option>Cancelado</option>
                                <option>Excluído</option>
                                <option>Formado</option>
                                <option>Trancado</option>
                            </select>
                            <input type="text" placeholder="Tipo Sanguíneo" required />
                            <input type="text" placeholder="Raça" required />
                            <input type="text" placeholder="Forma de Ingresso" required />
                            <input type="text" placeholder="Grupo de Cota" required />
                            <input type="text" placeholder="Regime do aluno" required />
                            <input type="text" placeholder="Escola Anterior" required />
                            <input type="text" placeholder="Ano de Conclusão de Curso Anterior" required />
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

export default CadastrarAluno;

   