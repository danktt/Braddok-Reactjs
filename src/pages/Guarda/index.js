import Navbar from "../../components/Navbar";
import Logo from "../../assets/logo-guarda.png";
// import { GoPerson } from "react-icons/go";
import Sidebar from "../../components/Sidebar/index"

import "./styles.scss";

function Guarda() {
  return (
    <>

      <div className="container-fluid p-0">
        <Navbar title="Guarda" icon={Logo} />
				<div className="row">
					<Sidebar />
			
				</div>
			</div>



















      {/* <div className="row">
        <div className="col-md-4 batata">
          <div className="icon-div">
            <span className="icon-user">
              {" "}
              <GoPerson />{" "}
            </span>
          </div>

          <div className="user-div">
            <p className="subtitle">
              Usúario: <b>CB</b>
            </p>
            <h1 className="title">MIRANDA</h1>
          </div>
        </div>

        <div className="col-md-12">.col-xs-6 .col-md-4</div>
      </div> */}
    </>
  );
}

export default Guarda;
