import { useState } from "react";

import "./styles.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const show = () => {
    if (isOpen) {
      document.body.classList.toggle("sb-sidenav-toggled");
    } else {
      document.body.classList.remove("sb-sidenav-toggled");
    }
    return show;
  };

  return (
    <>
      <div className="d-flex " id="wrapper">
        {/* <!-- Sidebar--> */}
        <div id="sidebar-wrapper">
          <div className="sidebar-heading border-bottom bg-secondary">
            Start Bootstrap
            <button
                className="btn btn-primary"
                id="sidebarToggle"
                onClick={show(!setIsOpen)}
              >
                click
              </button>
          </div>
          <div className="list-group list-group-flush">
            <a
              className="list-group-item list-group-item-action list-group-item-light p-3 text-light bg-secondary"
              href="#!"
            >
              Página Principal
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item-light p-3 text-light bg-secondary"
              href="#!"
            >
              Página Principal
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item-light p-3 text-light bg-secondary"
              href="#!"
            >
              Militares
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item-light p-3 text-light bg-secondary"
              href="#!"
            >
              Visitantes e Veiculos
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item-light p-3 text-light bg-secondary"
              href="#!"
            >
              Viaturas Militares
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item-light p-3 text-light bg-secondary"
              href="#!"
            >
              Alojamento de Cb / Sd
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item-light p-3 text-light bg-secondary"
              href="#!"
            >
              Pernoite de Mil / Visit
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item-light p-3 text-warning bg-secondary"
              href="#!"
            >
              Roteiro da Garda e Postos
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item-light p-3 text-warning bg-secondary"
              href="#!"
            >
              Roteiro de Ronda
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item-light p-3 text-warning bg-secondary"
              href="#!"
            >
              Livro de Partes Of Dia
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item-light p-3 text-warning bg-secondary"
              href="#!"
            >
              Gerar Documentos
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item-light p-3 text-warning bg-secondary"
              href="#!"
            >
              Lançamentos
            </a>
          </div>
        </div>
        {/* <!-- Page content wrapper--> */}
        <h1>Oi</h1>

      </div>
    </>
  );
}

export default Sidebar;
