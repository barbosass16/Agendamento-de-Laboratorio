import React from "react";
import "../style/cadlab.css";
import MenuDrop from "../components/header";

function CadastrarLaboratorio() {
    return (
        <div className="page-lab">
            <MenuDrop />
            <div className="cadcont">
                <div className="form-container-lab">
                    <h2>Cadastro de Laboratório</h2>
                    <fieldset>
                        <legend>Dados do Laboratório</legend>
                        <div className="form-grid">
                            <input type="text" placeholder="Nome do Laboratório" required />
                            <label>Sigla <input type="text" placeholder="EX. Lab 01" required /></label>
                            <label>Foto do Labaoratorio<input type="file" accept="image/*" /></label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Responsáveis Técnicos</legend>
                        <div className="form-grid">
                            <input type="text" placeholder="Nome Completo" required />
                            <input type="text" placeholder="CPF" required />
                            <input type="text" placeholder="Registro no Conselho" required />
                            <input type="text" placeholder="Carga" required />
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Equipamentos</legend>
                        <div className="form-grid">
                            <input type="text" placeholder="Nummero de maquinas" required />
                            <input type="text" placeholder="Modelo" required />
                            <input type="text" placeholder="Número de Série" required />
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Outros Dados</legend>
                        <div className="form-grid">
                            <input type="text" placeholder="Áreas de Atuação" required />
                            <input type="text" placeholder="Certificações (opcional)" />
                            <textarea rows="4" placeholder="Observações"></textarea>
                        </div>
                    </fieldset>
                    <div className="button-container">
                        <button type="submit" className="btn-save">Salvar</button>
                        <button type="button" className="btn-cancel">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CadastrarLaboratorio;
