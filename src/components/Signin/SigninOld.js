



import styles from '../Signin/styles.module.scss';

// import { IoMdKey, IoMdPerson } from "react-icons/io";




export function Signin(props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentLogo}>
          <img src="https://github.com/calwann.png" alt="Logo" />
        </div>

        <div className={styles.sectionInput}>
          <p className={styles.nameSpan}>Sitema</p>
          <h1 className={styles.systemName}>{props.title}</h1>
          <p>3 Bateria de Artilharia Antiaérea</p>
          <div className={styles.inputText}>
            {/* <IoMdPerson /> */}
            <input type="text" placeholder=" Login de acesso" />
          </div>

          <div className={styles.inputPw}>
            {/* <IoMdKey /> */}
            <input type="password" placeholder=" Senha" />
          </div>

          <button className={styles.enterBtn}>Confirmar</button>
          <p className={styles.spanBotton}>Seção de Tecnologia da Informação - RITEX: 892-2031</p>
        </div>
      </div>
    </div>
  );
}
