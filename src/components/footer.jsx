import React from "react";
import Logo from "../img/logoif.png"
import '../style/footer.css'
const Footer = () =>{
    return(
        <footer>
        <div className="footer-conteiner">
            <img src={Logo} alt="" />
            <p>IFAM - Instituo Federal do Amazonas</p>
            <p>FONE: (98)9834-8923</p>
        </div>
        <hr />
        <p className="copy">&copy; Instituo Federal do Amazonas - IFAM. Todos os direitos reservados</p>
        </footer>
    )
}
export default Footer