import logo from "./components/assets/logo192.png";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";
import "./App.css";

//component imports
import MobNavbar from "./components/navbar/MobNavbar";
import MobLanding from "./components/LandingPage/MobLanding";
import MobSkills from "./components/skills/MobSkills";
import ProjectPage from "./components/projects/projectsPage";

import WebNavbar from "./components/navbar/webNavbar";
import WebLanding from './components/LandingPage/WebLanding';
import WebSkills from './components/skills/WebSkills';
import WebProjects from './components/projects/WebProjects'

function App() {
  const [mobDisplay, setMobDisplay] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setMobDisplay(true);
      } else {
        setMobDisplay(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Call handleResize once initially to set the initial state
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const footStyle = {
    color: isDarkMode ? "#212529" : "white",
    backgroundColor: isDarkMode ? "white" : "#212529",
    
  };

  return (
    <>
      {mobDisplay && (
        <div id="mob-display-container" style={{backgroundColor: isDarkMode ? "": "#212529"}}>
          <MobNavbar
            isDarkMode={isDarkMode}
            toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          />

          <div
            style={{
              backgroundColor: isDarkMode ? "#B29DF5" : "#322850",
              margin: 0,
            }}
          >
            <MobLanding isDarkMode={isDarkMode} />
          </div>
          <div id="skills-section">
            <MobSkills isDarkMode={isDarkMode} />
          </div>
          <div
            id="projects-section"
            style={{
              backgroundColor: isDarkMode ? "#fff" : "#212529"
            }}
          >
            <ProjectPage isDarkMode={isDarkMode} />
          </div>
          <div style={footStyle} className="Footer">
            <footer>
              Made with ❤️ &{" "}
              <i>
                <img
                  src={logo}
                  alt="react logo"
                  style={{ width: "24px", height: "24px", display: "inline" }}
                />
              </i>{" "}
              by Priya Moghe
            </footer>
          </div>
        </div>
      )}
      {!mobDisplay && (
        <div id="web-display-container" style={{backgroundColor: isDarkMode ? "": "#212529"}}>
          <WebNavbar 
          isDarkMode={isDarkMode} 
          toggleDarkMode={() => setIsDarkMode(!isDarkMode)}/>
          <div
            style={{
              backgroundColor: isDarkMode ? "#B29DF5" : "#322850",
              margin: 0,
            }}
          >
            <WebLanding isDarkMode={isDarkMode} />
          </div>
          <WebSkills isDarkMode={isDarkMode} />
          <WebProjects isDarkMode={isDarkMode} />
          <div style={footStyle} className="Footer">
            <footer>
              Made with ❤️ &{" "}
              <i>
                <img
                  src={logo}
                  alt="react logo"
                  style={{ width: "24px", height: "24px", display: "inline" }}
                />
              </i>{" "}
              by Priya Moghe
            </footer>
          </div>
        

        </div>
      )}
    </>
  );
}

export default App;
