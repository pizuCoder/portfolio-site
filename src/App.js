// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import MobNavbar from './components/navbar/MobNavbar';
import MobLanding from './components/LandingPage/MobLanding';
import MobSkills from './components/skills/MobSkills';

function App() {
  const [mobDisplay, setMobDisplay] = useState(false);

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
      {mobDisplay && <div> 

          <MobNavbar />
          <div style={{backgroundColor: "#B29DF5"}}>
          <MobLanding />
          </div>
          
          <MobSkills/>
         
          
          
        
        </div>}
    </>
  );
}

export default App;
