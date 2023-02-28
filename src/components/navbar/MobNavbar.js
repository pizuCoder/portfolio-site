import { Turn as Hamburger } from "hamburger-react";
import React from "react";
import ToggleBtn from "./Togglebtn/ToggleBtn";
import './MobNavbar.css'


export default function MobNavbar(props) {
  const [showSideBar, setShowSideBar] = React.useState(false);

  const handleHamburgerToggle = () => {
    setShowSideBar(!showSideBar);
  };
    
    
  return (
    <>
      {/* for mobile */}
      <div className="mob-nav-container" style={{ position: 'sticky', top: 0, backgroundColor: props.isDarkMode? "#fff" : "#212529"}}>
      <div className="mob-nav">
        
      <ToggleBtn toggled={props.isDarkMode} onClick={props.toggleDarkMode} />

        <Hamburger size={20} direction="left" rounded color={props.isDarkMode? "#010101" : "#fff"} toggled={showSideBar} toggle={handleHamburgerToggle} />
        
        {showSideBar && (
        <div id="side-bar" onClick={handleHamburgerToggle} className={showSideBar ? "show" : "hide"}>
          <p>Texting 123</p>
          <p>Texting 123</p>
          <p>Texting 123</p>
          <p>Texting 123</p>
          <p>Texting 123</p>

        </div>
      )}
      </div>
      </div>
    </>
  );
}
