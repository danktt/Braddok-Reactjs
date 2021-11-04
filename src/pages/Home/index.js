import "./styles.scss";
// import LogoGuarda from '../../assets/logo-guarda.png';
// import LogoArranchamento from '../../assets/logo-arranchamento.png';
// import LogoHelpdesk from '../../assets/logo-helpdesk.png';
// import LogoPlanoChamada from '../../assets/logo-plano-chamada.png';
// import LogoFatoObs from '../../assets/logo-fato-obs.png';

import {
  FaPhone,
  FaBomb,
  FaRegAddressBook,
  FaBirthdayCake,
} from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoHelpBuoy } from "react-icons/io5";
import { TiArrowBack } from "react-icons/ti"

function Home() {
  return (
    <div className="Container">
      <h1>Sistemas Braddok</h1>
      <p class="section-subtitle">3ª Bia AAAe</p>

      <div className="Contant">
        <div className="service-box">
          <a href="/aniversariantes">
            <div className="service-icon">
              {/* <img src={LogoArranchamento} alt="Arranchamento" /> */}
              <FaBirthdayCake />
            </div>
            <div className="container-icon">
              <div className="service-title">Aniversariantes</div>
              <div className="service-desc">
                A lista de aniversariantes do mês facilita a consulta das datas
                natalícias dos nossos irmãos e irmãs de farda.
              </div>
            </div>
          </a>
        </div>

        <div className="service-box">
          <a href="/arranchamento">
            <div className="service-icon">
              {/* <img src={LogoArranchamento} alt="Arranchamento" /> */}
              <GiForkKnifeSpoon />
            </div>
            <div className="container-icon">
              <div className="service-title">Arranchamento</div>
              <div className="service-desc">
                O arranchamento online permite que o usuário se arranche e veja
                o cardápio, ao furriel possibilita que o mesmo arranche
                militares de sua função. O aprovisionador é capaz de imprimir
                arranchamento e lançar cardápio.
              </div>
            </div>
          </a>
        </div>

        <div className="service-box">
          <a href="/guarda">
            <div className="service-icon">
              {/* <img src={LogoGuarda} alt="Guarda" /> */}
              <FaBomb />
            </div>
            <div className="container-icon">
              <div className="service-title">Guarda</div>
              <div className="service-desc">
                Este serviço de controle e registro de acesso agiliza e otimiza
                os trabalhos do efetivo da Guarnição de Serviço, assim
                possibilitando aos sargentos e oficiais monitorar os registros
                de acessos.
              </div>
            </div>
          </a>
        </div>

        <div className="service-box">
          <a href="/helpdesk">
            <div className="service-icon">
              {/* <img src={LogoHelpdesk} alt="Helpdesk" /> */}
              <IoHelpBuoy />
            </div>
            <div className="container-icon">
              <div className="service-title">HelpDesk</div>
              <div className="service-desc">
                Este é um serviço de atendimento aos usuários que procuram
                soluções de TI, como por exemplo: acesso a internet e intranet,
                suporte e manutenção de ativos de rede, instalação de
                impressoras entre outros.
              </div>
            </div>
          </a>
        </div>

        <div className="service-box">
          <a href="/plano-chamada">
            <div className="service-icon">
              {/* <img src={LogoPlanoChamada} alt="Plano de Chamada" /> */}
              <FaPhone />
            </div>
            <div className="container-icon">
              <div className="service-title">Plano De Chamada</div>
              <div className="service-desc">
                O sistema Plano de Chamada é últil em compilar todos os dados
                dos usuários em um relatório para auxiliar no acionamento do
                plano, permitindo divisão por setor de bairros.
              </div>
            </div>
          </a>
        </div>

        <div className="service-box">
          <a href="/fatos-obs">
            <div className="service-icon">
              {/* <img src={LogoFatoObs} alt="Fatos Observados" /> */}
              <FaRegAddressBook />
            </div>
            <div className="container-icon">
              <div className="service-title">Fatos Observados</div>
              <div className="service-desc">
                O sistema de Fatos Observados foi criado para que os Oficiais,
                Subtenentes e Sargentos possam lançar observações dos Cabos e
                Soldados.
              </div>
            </div>
          </a>
        </div>
      </div>
        <a href="/">
          <TiArrowBack />
          Retornar para Intranet
        </a>
    </div>
  );
}

export default Home;
