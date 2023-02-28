import { Turn as Hamburger } from "hamburger-react";
import React from "react";
import ToggleBtn from "./Togglebtn/ToggleBtn";
import './MobNavbar.css'


export default function MobNavbar(props,{isDarkMode}) {
  const [showSideBar, setShowSideBar] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);


  const handleHamburgerToggle = () => {
    setShowSideBar(!showSideBar);
  };
    
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 750) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navStyle = { 
    position: 'sticky', 
    top: 0, 
    backgroundColor: 
    isScrolled ?
    props.isDarkMode ? "#B29DF5": "#322850" :
  props.isDarkMode ? "#fff" : "#212529" }

  const sidebarStyles = {
    backgroundColor: props.isDarkMode ? "white": "#212529",
    color: props.isDarkMode ? "#212529": "white",
    border: props.isDarkMode ? "1px solid #212529": "1px solid white"
  }
    
  return (
    
    <>
      {/* for mobile */}
      <div className="mob-nav-container" style={navStyle}>
      <div className="mob-nav">
        
      <ToggleBtn toggled={isDarkMode} onClick={props.toggleDarkMode} />

        <Hamburger size={20} direction="left" rounded color={props.isDarkMode? "#010101" : "#fff"} toggled={showSideBar} toggle={handleHamburgerToggle} />
        
        {showSideBar && (
        <div id="side-bar" 
        onClick={handleHamburgerToggle} 
        className={showSideBar ? "show" : "hide"}
        style = {sidebarStyles}>
          <p onClick={() => window.scrollTo(0, 0)}>HOME</p>
          <p onClick={() => window.scrollTo(0, document.getElementById("skills-section").offsetTop)} >SKILLS</p>
          <p onClick={() => window.scrollTo(0, document.getElementById("projects-section").offsetTop)}>PROJECTS</p>
          <p>RESUME</p>

        </div>
      )}
      </div>
      </div>
    </>
  );
}
