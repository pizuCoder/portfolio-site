// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';
import './App.css';

//component imports
import MobNavbar from './components/navbar/MobNavbar';
import MobLanding from './components/LandingPage/MobLanding';
import MobSkills from './components/skills/MobSkills';
import ProjectPage from './components/projects/projectsPage';

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
    window.addEventListener('resize', handleResize);
    handleResize(); // Call handleResize once initially to set the initial state
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {mobDisplay && <div id="mob-display-container"> 

        <MobNavbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

          <div style={{backgroundColor: isDarkMode? "#B29DF5" : "#322850"}}>
          <MobLanding isDarkMode={isDarkMode}/>
          </div>
          <div>
          <MobSkills/>
          </div>
          <div>
          <ProjectPage />
          </div>
          <footer>
            Made with ❤️ & ⚛️ by Priya Moghe
          </footer>
          
         
          
          
        
        </div>}
    </>
  );
}

export default App;
