import './styles.css';


function Home() {
  return (  
    <>

    
    <div class="services-section">
      <div class="inner-width">
        <h1 class="section-title">
          <i class="fa fa-cog rotate"></i> Sistemas de TI
        </h1>
        <p class="section-subtitle">3ª Bia AAAe</p>
        <div class="border"></div>
        <div class="services-container">
          <div class="service-box">
            <a href="../aniversariantes">
              <div class="service-icon">
                <i class="fas fa-birthday-cake"></i>
              </div>
              <div class="service-title">Aniversariantes</div>
              <div class="service-desc">
                A lista de aniversariantes do mês facilita a consulta das datas
                natalícias dos nossos irmãos e irmãs de farda.
              </div>
            </a>
          </div>

          <div class="service-box">
            <a href="../arranchamento">
              <div class="service-icon">
                <i class="fas fa-utensils"></i>
              </div>
              <div class="service-title">Arranchamento</div>
              <div class="service-desc">
                O arranchamento online permite que o usuário se arranche e veja
                o cardápio, ao furriel possibilita que o mesmo arranche
                militares de sua fração e o aprovisionador é capaz de imprimir
                arranchamento e lançar cardápio.
              </div>
            </a>
          </div>

          <div class="service-box">
            <a href="../guarda">
              <div class="service-icon">
                <i class="fas fa-bomb"></i>
              </div>
              <div class="service-title">Guarda</div>
              <div class="service-desc">
                Este serviço de controle e registro de acesso agiliza e otimiza
                os trabalhos do efetivo da Guarnição de Serviço, assim
                possibilitando aos sargentos e oficiais monitorar os registros
                de acessos.
              </div>
            </a>
          </div>

          <div class="service-box">
            <a href="../helpdesk">
              <div class="service-icon">
                <i class="far fa-life-ring"></i>
              </div>
              <div class="service-title">Help Desk</div>
              <div class="service-desc">
                Este é um serviço de atendimento ao usuário que procuram
                soluções de TI, como por exemplo: acesso a internet e intranet,
                suporte e manutenção de ativos de rede, instalação de
                impressoras entre outros.
              </div>
            </a>
          </div>

          <div class="service-box">
            <a href="../planodechamada">
              <div class="service-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="service-title">Plano de Chamada</div>
              <div class="service-desc">
                O sistema Plano de Chamada é últil em compilar todos os dados
                dos usuários em um relatório para auxiliar no acionamento do
                plano, permitindo divisão por setor de bairros.
              </div>
            </a>
          </div>

          <div class="service-box">
            <a href="../fatosobservados">
              <div class="service-icon">
             
                 <i class="far fa-address-book"></i>
              </div>
              <div class="service-title">Fatos Observados</div>
              <div class="service-desc">
                O sistema de Fatos Observados foi criado para que o Oficiais,
                Subtenentes e Sargentos possam lançar observações dos Cabos e
                Soldados.
              </div>
            </a>
          </div>

         
        </div>
        <a href="../intranet">
          <p class="section-subtitle">
            <i class="fas fa-undo"></i> Retornar para Intranet
          </p>
        </a>
      </div>
    </div>
    </>
  );
}

export default Home;