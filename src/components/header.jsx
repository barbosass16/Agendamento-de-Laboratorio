import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../style/header.css';
import Logo from '../img/logoif.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const MenuDrop = () => {
    const [openMenu, setOpenMenu] = useState(null);

    const Menu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    const closeMenu = () => {
        setOpenMenu(null);
    };

    return (
        <div className="conteiner">
            <div className="cabecalho">
                <div className="cabe">
                    <div className="menu-bar">
                        <div className="links">
                            <div className="menu-link" onClick={() => Menu("consultar")} onMouseLeave={closeMenu}>
                                <p>Gerenciar</p>
                                {openMenu === "consultar" && (
                                    <div className="sub-menu">
                                        <Link to="/cadaluno" onClick={closeMenu}>Cadastrar Aluno</Link>
                                        <Link to="/cadlab" onClick={closeMenu}>Cadastrar Laboratorio</Link>
                                        <Link to="/cadprofessor" onClick={closeMenu}>Cadastrar Professor</Link>
                                    </div>
                                )}
                            </div>

                            <div className="menu-link" onClick={() => Menu("agendamento")} onMouseLeave={closeMenu}>
                                <Link to='/agendamento'>
                                    <p>Agendamento</p>
                                </Link>
                                
                            </div>

                            <div className="menu-link" onClick={() => Menu("relatorio")} onMouseLeave={closeMenu}>
                                <p>Relatorio</p>
                                {openMenu === "relatorio" && (
                                    <div className="sub-menu">
                                        <Link to="/relatorioagenda" onClick={closeMenu}>Agendamentos</Link>
                                        <Link to="/relatoriocancela" onClick={closeMenu}>Cancelamento</Link>
                                    </div>
                                )}
                            </div>

                            {/* Alterado para fazer o redirecionamento diretamente ao clicar */}
                            <div className="menu-link" onClick={() => Menu("sobrenos")} onMouseLeave={closeMenu}>
                                <Link to="/sobrenos" onClick={closeMenu}>
                                    <p>Sobre-nos</p>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuDrop;
