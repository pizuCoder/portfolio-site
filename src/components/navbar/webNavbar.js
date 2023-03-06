import React from "react";
import "./webNavBar.css";
import sampleResume from 
"../resume/sampleResume.pdf";
import ToggleBtn from "./Togglebtn/ToggleBtn";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import Navbar from 'react-bootstrap/Navbar';

import pizzaIcon from "../assets-web/pizzaIcon-web.png";

export default function WebNavbar(props) {
  console.log("darkMode", props.isDarkMode);
  const [isScrolled, setIsScrolled] = React.useState(false);
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
      ? "#FFFFFF"
      : "#212529",
  };
  return (
    <Container className="container" style={navStyle}>
      <Nav className="web-nav">
        <div>
        <img
          src={pizzaIcon}
          alt="pizza icon"
          onClick={() => window.scrollTo(0, 0)}
        />
        </div>

        <div id="desktop-menu">
          <Button
          variant = {props.isDarkMode ? "dark" : "light"}
          className="button"
          style={{
            width: "50%"
          }}
            onClick={() =>
              window.scrollTo(
                0,
                document.getElementById("skills-section").offsetTop
              )
            }
          >
            SKILLS
          </Button>
          <Button
          variant = {props.isDarkMode ? "dark" : "light"}
          className="button"
            onClick={() =>
              window.scrollTo(
                0,
                document.getElementById("projects-section").offsetTop
              )
            }
          >
            PROJECTS
          </Button>
          <Button className="button" variant = {props.isDarkMode ? "dark" : "light"}>
            <a
              href={sampleResume}
              download="MyExampleDoc"
              target="_blank"
              rel="noreferrer"
              style={{color: "inherit", textDecoration: "none"}}
            >
              RESUME
            </a>
          </Button>
        </div>
        <ToggleBtn toggled={props.isDarkMode} onClick={props.toggleDarkMode} />
      </Nav>
    </Container>
  );
}
