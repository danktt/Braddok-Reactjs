
// import styles from '../Signin/styles.module.scss';

// import { IoMdKey, IoMdPerson } from "react-icons/io";


import './styles.css'

export function Signin(props) {
  return (

    <>
    <div id="content">

      <form className="form-signin">
    
        <img className="mb-4" src="https://github.com/calwann.png" alt="Logo" width="130" height="130" />
        <h1 className="h3 mb-3 font-weight-normal">Faça seu Login</h1>
        {/* <label for="inputEmail" className="sr-only">Email address</label> */}
        <input type="email" id="inputEmail" className="form-control mb-1" placeholder="Identidade" required autofocus/>
        
        {/* <label for="inputPassword" className="sr-only">Password</label> */}
        <input type="password" id="inputPassword" className="form-control" placeholder="Senha" required />
        
        <button className="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
        <p className="mt-5 mb-3 text-muted">Seção de Tecnologia da Informação - RITEX: 892-2031</p>
      {/* <a href="http:/helpdesk "> help</a> */}
      </form>
    </div>




     

    </>
  );
}