function SidebarNew() {
  return (
    <>
      <div class="left-sidebar-header">
        <div class="left-sidebar-title">
          {/* <p style="font-size: 12px" face="Verdana">
            MENU DE NAVEGAÇÃO
          </p> */}
        </div>
        {/* <a
          data-toggle="tooltip"
          data-placement="right"
          title="Expandir / Retrair"
        > */}
          <div
            class="left-sidebar-toggle c-hamburger c-hamburger--htla hidden-xs"
            data-toggle-class="left-sidebar-collapsed"
            data-target="html"
          >
            <span></span>
          </div>
        {/* </a> */}
      </div>
      <div id="left-nav" class="nano">
        <div class="nano-content">
          <nav>
            <ul class="nav" id="main-nav">
              <li>
                <a
                  href="index.php"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Informações do Sistema e do Usuário"
                >
                  <i class="fa fa-home" aria-hidden="true"></i>
                  <span>Página Principal</span>
                </a>
              </li>
              <li>
                <a
                  href="meu_cham.php"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Meus Chamados Abertos ou Finalizados"
                >
                  <i class="fas fa-info-circle" aria-hidden="true"></i>
                  <span>Meus Chamados</span>
                </a>
              </li>
              <li>
                <a
                  href="novo_cham.php"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Criar um Novo Chamado"
                >
                  <i class="fas fa-plus-circle" aria-hidden="true"></i>
                  <span>Novo Chamado</span>
                </a>
              </li>

              <li class="color-warning">
                <a
                  href="adm_cham.php"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Administrar Chamados Abertos"
                >
                  <i class="fas fa-toolbox" aria-hidden="true"></i>
                  <span>Administrar Chamados</span>
                </a>
              </li>

              <li class="has-child-item close-item color-warning">
                {/* <a
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Configurar Informações do Sistema"
                > */}
                  <i class="fas fa-tools" aria-hidden="true"></i>
                  <span>Sistema</span>
                {/* </a> */}
                <ul class="nav child-nav level-1">
                  <li>
                    <a href="cad_sistema_op.php">
                      <i class="fab fa-ubuntu" aria-hidden="true"></i>
                      <span>Sistemas Operacionais</span>
                    </a>
                  </li>
                  <li>
                    <a href="cad_servicos.php">
                      <i class="fas fa-wrench" aria-hidden="true"></i>
                      <span>Serviços</span>
                    </a>
                  </li>
                  <li>
                    <a href="cad_secoes.php">
                      <i class="fas fa-boxes" aria-hidden="true"></i>
                      <span>Seções</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default SidebarNew;
