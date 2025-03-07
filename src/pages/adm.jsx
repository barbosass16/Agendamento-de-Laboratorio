import React from "react";
import { Link} from "react-router-dom";

 
const Adm=() =>{
    return(
        <div className="adm-conteiner">
            <div className="funcionalidade">
                    <nav>
                        <ul>
                            <li><Link to="/">Solicitações</Link></li>
                            <li><Link to="/">Agendar</Link></li>
                            <li><Link to="/">Alterar</Link></li>
                            <li><Link to="/">Cancelar</Link></li>
                            <li><Link to="/">Relatorios</Link></li>
                        </ul>
                    </nav>
            </div>
            <section>
                
            </section>
        </div>
    )
}

export default Adm