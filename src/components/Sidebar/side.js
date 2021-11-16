//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  // SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaBars, FaArrowLeft } from "react-icons/fa";
import { IoHome,IoInformationCircleSharp  } from "react-icons/io5";
import { AiFillPlusCircle } from "react-icons/ai"
// import { RiPencilLine } from "react-icons/ri";
// import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./stylesSide.scss";


const Sidebar = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
            <div className="closemenu" onClick={menuIconClick}>
                  {/* changing menu collapse icon on click */}
                  <p className="name-icon" >{menuCollapse ? "" : "MENU DE NAVEGAÇÃO"}</p>
                {menuCollapse ? (
                  <FaBars />
                  ) : (
                    <FaArrowLeft />
                    )}
              </div>
          </div>
            
          </SidebarHeader>
          <SidebarContent >
            <Menu  >
              <MenuItem className="menu-icons" active={true} icon={<IoHome />}>Página Principal</MenuItem>
              <MenuItem className="menu-icons" icon={<IoInformationCircleSharp />}>Meus Chamados</MenuItem>
              <MenuItem className="menu-icons" icon={<AiFillPlusCircle />}>Novos Chamados</MenuItem>
              {/* <MenuItem icon={<RiPencilLine />}>Author</MenuItem> */}
              {/* <MenuItem icon={<BiCog />}>Settings</MenuItem> */}
            </Menu>
          </SidebarContent>
          {/* <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter> */}
        </ProSidebar>
      </div>


     
    </>
  );
};

export default Sidebar;
