import Navbar from "../../components/Navbar";
import Logo from '../../assets/logo-helpdesk.png'
import Sidebar from "../../components/Sidebar";

export default function HelpDesk() {

  return (
    <>
    <Navbar 
    title="HelpDesk"
    icon={Logo}
    />

    <Sidebar />


    </>
  );
}


