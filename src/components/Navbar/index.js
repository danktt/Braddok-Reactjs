import Logo from "../../assets/logo-helpdesk.png";

import { FiLogOut } from 'react-icons/fi'
import { BsFillGearFill } from 'react-icons/bs'


import './styles.css';


function Navbar(props) {
  return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-light bg-primary" id="container">
        <a className="navbar-brand" href="/helpdesk">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ">

          <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/helpdesk"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                GEN MIRANDA
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="/helpdesk">
                  Atualizar Dados
                </a>
                <a className="dropdown-item" href="/helpdesk">
                  Atualizar Senha
                </a>
                <a className="dropdown-item" href="/helpdesk">
                  Adminstrar Usúario
                </a>
              </div>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="/" id="icon">
                <FiLogOut />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/helpdesk" id="icon">
                <BsFillGearFill />
              </a>
            </li>
            
            
          </ul>
        </div>
      </nav>


     
    </>
  );
}

export default Navbar;
