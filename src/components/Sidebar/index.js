import { useState } from "react";
import './styles.css'

export default function Sidebar(props) {
    const [sideNav, setSideNav] = useState(0);

    const handleClick = (e) => {
        e.target.innerHTML = 'Movendo..';
        if (sideNav === 0) {
            setSideNav(1);
            document.body.classList.add("sb-sidenav-toggled")
            setTimeout(function(){ e.target.innerHTML = 'Abrir'; }, 200);
        } else {
            setSideNav(0);
            document.body.classList.remove("sb-sidenav-toggled")
            setTimeout(function(){ e.target.innerHTML = 'Fechar'; }, 200);
        }
    };

  return (
    <>
        <div className="d-flex" id="wrapper">
            {/* <!-- Sidebar--> */}
            <div className={`border-end bg-white`} id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-secondary">Start Bootstrap</div>
                <div className="list-group list-group-flush">
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 text-light bg-secondary" href="#!">Página Principal</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 text-light bg-secondary" href="#!">Página Principal</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 text-light bg-secondary" href="#!">Militares</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 text-light bg-secondary" href="#!">Visitantes e Veiculos</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 text-light bg-secondary" href="#!">Viaturas Militares</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 text-light bg-secondary" href="#!">Alojamento de Cb / Sd</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 text-light bg-secondary" href="#!">Pernoite de Mil / Visit</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 text-warning bg-secondary" href="#!">Roteiro da Garda e Postos</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 text-warning bg-secondary" href="#!">Roteiro de Ronda</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 text-warning bg-secondary" href="#!">Livro de Partes Of Dia</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 text-warning bg-secondary" href="#!">Gerar Documentos</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 text-warning bg-secondary" href="#!">Lançamentos</a>
                </div>
            </div>
            {/* <!-- Page content wrapper--> */}
            <div id="page-content-wrapper">
                {/* <!-- Top navigation--> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div className="container-fluid">
                        <button className="btn btn-primary" id="sidebarToggle" onClick={handleClick}>Fechar</button>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        
                    </div>
                </nav>
                {/* <!-- Page content--> */}
                <div className="container-fluid">
                    <h1 className="mt-4">Conteudo </h1>
                    <p> VAI LA GOY DA MALASIA</p>
                </div>
            </div>
        </div>
    </>
   );
}