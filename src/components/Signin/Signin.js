// import { IoMdKey, IoMdPerson } from "react-icons/io";
// import styles from '../Signin/styles.module.scss';
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import StoreContext from "../Store/Context"
import "./styles.css";



  function initialState() {
    return { user: '', password: '' };
  }


  function login({ user, password }) {
    if(user === 'admin' && password === 'admin'){
      return { token: '123'};
    }
    return { error: 'Usuario ou senha invado'}
  }



const Signin = (props) => {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext)
  const history = useHistory()

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }


  function onSubmit(event) {
    event.preventDefault();

    const { token } = login(values);    
      if(token){
        setToken(token);
        return history.push('/helpdesk');
      }
      setValues(initialState);
  }





  return (
    <>
      <div id="content">
        <form className="form-signin" onSubmit={onSubmit} >
          <img
            className="mb-4"
            src="https://cdn6.campograndenews.com.br/uploads/noticias/2021/08/20/3bsg011ghcaos.jpg"
            alt="Logo"
            width="130"
            height="130"
          />
          <h1 className="h3 mb-3 font-weight-normal">Faça seu Login</h1>
          <p>3 Bateria de Artilharia Antiaérea</p>

          <input 
            type="text"
            id="user"
            name="user"
            onChange={onChange}
            value={values.user}
            className="form-control mb-1"
            placeholder="Identidade"
            required
            autoFocus
          />

          <input
            type="password"
            id="password"
            name="password"
            onChange={onChange}
            value={values.password}
            className="form-control"
            placeholder="Senha"
            required
          />

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Entrar
          </button>
          
          <p className="mt-5 mb-3 text-muted">
            Seção de Tecnologia da Informação - RITEX: 892-2031
          </p>
          <a href="http:/helpdesk "> help</a>
        </form>
      </div>
    </>
  );
};

export default Signin;
