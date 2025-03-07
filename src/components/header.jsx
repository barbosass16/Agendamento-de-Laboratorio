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
        <div className="cabecalho">
            <div className="banner">
                <img src={Logo} alt="" />
                <nav className="redes-sociais">
                    <ul>
                        <li><a href="#"><FontAwesomeIcon icon={faPhone} style={{color: "#2f9e41",}} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faEnvelope} style={{color: "#2f9e41",}}/></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faEnvelope} style={{color: "#2f9e41",}}/></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faEnvelope} style={{color: "#2f9e41",}}/></a></li>
                    </ul>
                </nav>
            </div>
            <div className="cabe">
                <div className="menu-bar">
                    <div className="links">
                        <div className="menu-link" onMouseEnter={()=>Menu("gerenciar")} onMouseLeave={closeMenu}>
                            <p>Acessar</p>
                            { openMenu==="gerenciar" &&(
                                <div className="sub-menu">
                                    <Link to="/cliente" onClick={closeMenu}>Administrador</Link>
                                    <Link to="/funcionario" onClick={closeMenu}>Professores</Link>
                                    <Link to="/cliente" onClick={closeMenu}>Alunos</Link>
                                    <Link to="/funcionario" onClick={closeMenu}>Funcionarios</Link>
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
                                    <Link to="/relatorio" onClick={closeMenu}></Link>
                                    <Link to="/venda" onClick={closeMenu}>Vendas</Link>
                                    <Link to="/relatorio" onClick={closeMenu}>Relatorio</Link>
                                    <Link to="/venda" onClick={closeMenu}>Vendas</Link>
                                </div>
                            )}{/* fim de gerenciar */}
                        </div>{/*dim menulink */}
            
                    </div>
            </div>
        </div>
            



        </div>//div princial
    )
    }

export default MenuDrop