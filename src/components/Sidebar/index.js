import './styles.css'

function Sidebar() {

  function handleClick(){
    window.addEventListener('DOMContentLoaded', event => {

      // Toggle the side navigation
      const sidebarToggle = document.body.querySelector('#sidebarToggle');
      if (sidebarToggle) {
          // Uncomment Below to persist sidebar toggle between refreshes
          // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
          //     document.body.classList.toggle('sb-sidenav-toggled');
          // }
          sidebarToggle.addEventListener('click', event => {
              event.preventDefault();
              document.body.classList.toggle('sb-sidenav-toggled');
              localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
          });
      }
  
  });
  }



  return ( 
    <>
    <div className="d-flex" id="wrapper">
            {/* <!-- Sidebar--> */}
            <div className="border-end bg-white" id="sidebar-wrapper">
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
                        <button className="btn btn-primary" id="sidebarToggle" onClick={handleClick()}>Toggle Menu</button>
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

export default Sidebar;