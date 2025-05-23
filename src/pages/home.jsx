import React from "react";
import "../style/home.css"
import MenuDrop from "../components/header"
import Footer from "../components/footer";



const Home=() =>{
    return(
        <div className="page">
            <div className="menu-conteiner">
                <MenuDrop />
            </div>
            <div className="adm-conteiner">
                <div className="header-adm">
                    <header className="links-adm">
                        <a className="adm-a" href="#">Relatorio</a>
                        <a className="adm-a" href="#">DashBoard</a>
                    </header>
                </div>
            </div>

        </div>
    )
}

export default Home