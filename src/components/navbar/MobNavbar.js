import { Turn as Hamburger } from "hamburger-react";
import React from "react";
import ToggleBtn from "./Togglebtn/ToggleBtn";
import './MobNavbar.css'

export default function MobNavbar(props) {
    
    
    
  return (
    <>
      {/* for mobile */}
      <div className="mob-nav-container" style={{ position: 'sticky', top: 0 }}>
      <div className="mob-nav">
        
        <ToggleBtn  toggled={true} callback={props.OnClick} />
        <Hamburger size={20} direction="left" rounded color="#010101" />
        
        
      </div>
      </div>
    </>
  );
}
