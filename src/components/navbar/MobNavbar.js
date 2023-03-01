import { Turn as Hamburger } from "hamburger-react";
import React from "react";
import sampleResume from "../resume/sampleResume.pdf";
import ToggleBtn from "./Togglebtn/ToggleBtn";
import "./MobNavbar.css";

import githubDark from "../assets/github-icon-dark-small.png";
import githubLight from "../assets/github-icon-light-small.png";
import twtIcon from '../assets/twitter-icon-small.png';
import instaIcon from '../assets/insta-icon-small.png';
import behanceLight from '../assets/behance-icon-light-small.png'
import behanceDark from '../assets/behance-icon-dark-small.png'
import mailLight from '../assets/mail-icon-light-small.png'
import mailDark from '../assets/mail-icon-dark-small.png'



export default function MobNavbar(props, { isDarkMode }) {
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
    position: "sticky",
    top: 0,
    backgroundColor: isScrolled
      ? props.isDarkMode
        ? "#B29DF5"
        : "#322850"
      : props.isDarkMode
      ? "#fff"
      : "#212529",
  };

  const sidebarStyles = {
    backgroundColor: props.isDarkMode ? "white" : "#212529",
    color: props.isDarkMode ? "#212529" : "white",
    border: props.isDarkMode ? "1px solid #212529" : "1px solid white",
  };

  return (
    <>
      {/* for mobile */}
      <div className="mob-nav-container" style={navStyle}>
        <div className="mob-nav">
          <ToggleBtn toggled={isDarkMode} onClick={props.toggleDarkMode} />

          <Hamburger
            size={20}
            direction="left"
            rounded
            color={props.isDarkMode ? "#010101" : "#fff"}
            toggled={showSideBar}
            toggle={handleHamburgerToggle}
          />

          {showSideBar && (
            <div
              id="side-bar"
              onClick={handleHamburgerToggle}
              className={showSideBar ? "show" : "hide"}
              style={sidebarStyles}
            >
              <p onClick={() => window.scrollTo(0, 0)}>HOME</p>
              <p
                onClick={() =>
                  window.scrollTo(
                    0,
                    document.getElementById("skills-section").offsetTop
                  )
                }
              >
                SKILLS
              </p>
              <p
                onClick={() =>
                  window.scrollTo(
                    0,
                    document.getElementById("projects-section").offsetTop
                  )
                }
              >
                PROJECTS
              </p>
              <p>
                <a
                  href={sampleResume}
                  download="MyExampleDoc"
                  target="_blank"
                  rel="noreferrer"
                >
                  RESUME
                </a>
              </p>
              {/* -------------------------- */}
              <p>
                <a href="https://github.com/pizuCoder" target="_blank" rel="noreferrer">
                  <img
                    src={props.isDarkMode ? githubDark : githubLight}
                    alt="github icon"
                  />
                </a>
              </p>
              {/* ----------------- */}
              <p>
                <a href="https://twitter.com/pizzaCoder" target="_blank" rel="noreferrer">
                  <img src={twtIcon} alt="twitter"/>
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/pizucoder/" target="_blank" rel="noreferrer">
                  <img src={instaIcon} alt="instagram"/>
                </a>
              </p>
              <p>
                <a href="https://www.behance.net/priya_moghe" target="_blank" rel="noreferrer">
                  <img
                    src={props.isDarkMode ? behanceDark : behanceLight}
                    alt="behance icon"
                  />
                </a>
              </p>
              <p>
                <a href="mailto:priyamoghe2299@gmail.com" target="_blank" rel="noreferrer">
                  <img
                    src={props.isDarkMode ? mailDark : mailLight}
                    alt="mail icon"
                  />
                </a>
              </p>
              
            </div>
          )}
        </div>
      </div>
    </>
  );
}
