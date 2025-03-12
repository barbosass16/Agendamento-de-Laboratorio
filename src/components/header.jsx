import React,{useState} from "react";
import { Link } from "react-router-dom";
import '../style/header.css'
import Logo from '../img/logoif.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
const MenuDrop=() =>{
    const [openMenu, setOpenMenu]=useState(null) 


    const Menu=(menu)=>{
        setOpenMenu(openMenu===menu ? null:menu)
    }


    const closeMenu=()=>{
        setOpenMenu(null)
    }
    

    return(
        <div className="conteiner">
            <div className="cabecalho">
                
                <div className="cabe">
                    <div className="menu-bar">
                        <div className="links">
                        <div className="menu-link" onMouseEnter={()=>Menu("consultar")} onMouseLeave={closeMenu}>
                                <p>Gerenciar</p>
                                { openMenu==="consultar" &&(
                                    <div className="sub-menu">
                                        <Link to="/cadlab" onClick={closeMenu}>Cadastrar Laboratorio</Link>
                                        <Link to="/" onClick={closeMenu}>Cadastrar Aluno</Link>
                                        <Link to="/" onClick={closeMenu}>Cadastrar Professor</Link>
            
                                    </div>
                                )}{/* fim de gerenciar */}
                            </div>{/*dim menulink */}
                            <div className="menu-link" onMouseEnter={()=>Menu("consultar")} onMouseLeave={closeMenu}>
                                <p>Agendamento</p>
                                { openMenu==="consultar" &&(
                                    <div className="sub-menu">
                                        <Link to="/agenda" onClick={closeMenu}>Solicitar</Link>
                                        <Link to="/agenda" onClick={closeMenu}>Alterar</Link>
                                        <Link to="/agenda" onClick={closeMenu}>Cancelar</Link>
            
                                    </div>
                                )}{/* fim de gerenciar */}
                            </div>{/*dim menulink */}
                            <div className="menu-link" onMouseEnter={()=>Menu("relatorio")} onMouseLeave={closeMenu}>
                                <p>Relatorio</p>
                                { openMenu==="relatorio" &&(
                                    <div className="sub-menu">
                                        <Link to="/relatorio" onClick={closeMenu}>Agendamentos</Link>
                                        <Link to="/venda" onClick={closeMenu}>Cancelamento</Link>
                                       
                                    </div>
                                )}{/* fim de gerenciar */}
                            </div>{/*dim menulink */}
                            <div className="menu-link" onMouseEnter={()=>Menu("relatorio")} onMouseLeave={closeMenu}>
                                <p>Sobre-nos</p>
                                { openMenu==="relatorio" &&(
                                    <div className="sub-menu">
                                        <Link to="/relatorio" onClick={closeMenu}>Agendamentos</Link>
                                        <Link to="/venda" onClick={closeMenu}>Cancelamento</Link>
                                       
                                    </div>
                                )}{/* fim de gerenciar */}
                            </div>{/*dim menulink */}
            
                        </div>
                </div>
            </div>
            
            </div>//div princial
        </div>
    )
    }

export default MenuDrop