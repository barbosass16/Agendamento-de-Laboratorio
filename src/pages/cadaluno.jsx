import React from "react";
import '../style/cadaluno.css';
import { Link } from "react-router-dom";
import Logo from '../img/logoif.png'; 
import MenuDrop from "../components/header";

function CadastrarAluno() {
    return (
        <div className="cadastro-conteiner">
            <MenuDrop />
            <div className="page-padding">
                <div className="cad-conteiner">
                    {/* Card de Dados Pessoais */}
                    <div className="card-input">
                        <fieldset id="inputd">
                            <legend>Dados do Dicente</legend>
                            
                            <label>Nome:
                                <input type="text" placeholder="Ex. Loud Coringa" />
                            </label>
                            <label>Nome da mãe:
                                <input type="text" placeholder="Ex. Sophia Barbosa" />
                            </label>
                            <label>Nome do pai:
                                <input type="text" placeholder="Ex. Gabriel Barbosa" />
                            </label>
                            <label>Data de Nascimento:
                                <input type="date" name="dtn" id="dtn" />
                            </label>
                            <label>CPF:
                                <input type="text" placeholder="Ex. 0000000000-00" />
                            </label>
                            <label>RG:
                                <input type="text" placeholder="Ex. 0000000-00" />
                            </label>
                            <label id="lasex">Sexo:
                                <div className="labelr">
                                    Masculino:<input className="radios" type="radio" name="genero" id="masc" />
                                </div>
                                <div className="labelr">
                                    Feminino:<input className="radios" type="radio" name="genero" id="femn" />
                                </div>
                            </label>
                            <label>Tipo Sanguinio:
                                <input type="text" placeholder="Ex. C++" />
                            </label>
                            <label>Raça:
                                <select name="Select" id="select">
                                    <option value="0">Selecione</option>
                                    <option value="1">Preta</option>
                                    <option value="2">Pardo</option>
                                    <option value="3">Amarela</option>
                                    <option value="4">Branco</option>
                                </select>
                            </label>
                            <label>Estado Civil:
                                <select name="Selec" id="selec">
                                    <option value="0">Selecione</option>
                                    <option value="1">Solteiro</option>
                                    <option value="2">Casado</option>
                                    <option value="3">Viuvo</option>
                                </select>
                            </label>
                        </fieldset>
                    </div>

                    {/* Card de Informações de Contato */}
                    <div className="card-input">
                        <fieldset>
                            <legend>Informações de Contato</legend>
                            <label>Telefone Celular:
                                <input type="text" placeholder="Ex. (00)0000-0000" />
                            </label>
                            <label>Telefone do Responsável:
                                <input type="text" placeholder="Ex. (00)0000-0000" />
                            </label>
                            <label>Email:
                                <input type="text" placeholder="Ex. sophiagata@gmail.com" />
                            </label>
                        </fieldset>
                    </div>

                    {/* Card de Informações Acadêmicas */}
                    <div className="card-input">
                        <fieldset>
                            <legend>Informações Acadêmicas</legend>
                            <label>Forma de Ingresso:
                                <input type="text" placeholder="Ex. Ampla Concorrencia" />
                            </label>
                            <label>Matricula:
                                <input type="text" placeholder="Ex. 000000-0" />
                            </label>
                            <label>Turma:
                                <input type="text" placeholder="Ex. ADM 1" />
                            </label>
                            <label>Grupo de Cota:
                                <input type="text" placeholder="Ex. A, B, C OU D" />
                            </label>
                            <label>Regime do Aluno:
                                <input type="text" placeholder="Ex. Ampla Concorrencia" />
                            </label>
                            <label>Ano de Conclusão do Curso Anterior:
                                <input type="number" name="ano" min="1970" max="2005" placeholder="Ex. 1342 A.C" />
                            </label>
                            <label>Status Acadêmico:
                                <select name="Selecs" id="selecs">
                                    <option value="0">Selecione</option>
                                    <option value="1">Ativo</option>
                                    <option value="2">Concluido</option>
                                    <option value="3">Cancelado</option>
                                    <option value="4">Excluído</option>
                                    <option value="5">Trancado</option>
                                </select>
                            </label>
                        </fieldset>
                    </div>

                    {/* Card de Informações de Nacionalidade */}
                    <div className="card-input">
                        <fieldset>
                            <legend>Informações de Nacionalidade</legend>
                            <label>Pais:
                                <input type="text" placeholder="Ex. Brasil" />
                            </label>
                            <label>Nacionalidade:
                                <input type="text" placeholder="Ex. Brasileiro" />
                            </label>
                            <label>Município:
                                <input type="text" placeholder="Ex. Iranduba" />
                            </label>
                            <label>UF (Unidade Federativa):
                                <input type="text" placeholder="Ex. BR" />
                            </label>
                            <label>RNE (Registro Nacional do Estrangeiro):
                                <input type="text" placeholder="Ex. V000000-S" />
                            </label>
                            <label>Passaporte:
                                <input type="text" placeholder="Ex. BR123456" />
                            </label>
                        </fieldset>
                    </div>

                    {/* Card de Endereço */}
                    <div className="card-input">
                        <fieldset>
                            <legend>Endereço</legend>
                            <label>UF:
                                <input type="text" placeholder="Ex. BR" />
                            </label>
                            <label>CEP:
                                <input type="text" placeholder="Ex. 69032-00" />
                            </label>
                            <label>Bairro:
                                <input type="text" placeholder="Ex. Bairro X" />
                            </label>
                            <label>Rua:
                                <input type="text" placeholder="Ex. Rua X" />
                            </label>
                            <label>Nº da casa:
                                <input type="text" placeholder="Ex. Nº 80039" />
                            </label>
                        </fieldset>
                    </div>

                    {/* Botões de Ação */}
                    <div className="form-buttons">
                        <button className="btn-salvar">Salvar</button>
                        <button className="btn-alterar">Alterar</button>
                        <button className="btn-excluir">Excluir</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CadastrarAluno;
