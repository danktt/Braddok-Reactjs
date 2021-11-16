import Navbar from "../../components/Navbar";
import Logo from '../../assets/logo-helpdesk.png'
import Sidebar  from "../../components/Sidebar/index";
import '../../styles/stylesContets.scss';


export default function HelpDesk() {

  return (
    <>
    <Navbar 
    title="HelpDesk"
    icon={Logo}
    />

    
   
    <div className="wrapper">

     <Sidebar /> 


     <main>
     <h1>VAMOS LA </h1>
    <h1>VAMOS LA </h1>
    <h1>VAMOS LA </h1>
    <h1>VAMOS LA </h1>
    <h1>VAMOS LA </h1>
    <h1>VAMOS LA </h1>
    <h1>VAMOS LA </h1>

     </main> 

    </div> 


    </>
  );
}


