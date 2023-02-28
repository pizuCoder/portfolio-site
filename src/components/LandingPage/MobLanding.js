import myImg from "../assets/myImg-light-small.png";
import headerImg from "../assets/priyamoghe-light-small.png";
import Button from 'react-bootstrap/Button';
import "./MobLanding.css";
import React from "react"

export default function MobLanding({ isDarkMode }) {

  
    return (
      <div className="container" >
        <div className="text-part" >
          <img src={headerImg} alt="priya moghe" />
          <p style={{color: isDarkMode ? "#212529":'white' }}>{`Hi, my name is Priya, and I am a front-end developer and designer with experience 
                  in UI design, graphic design, and illustration. I specialize in creating responsive and 
                  user-friendly websites using JavaScript, Python, HTML, CSS, and React. My portfolio 
                  showcases some of my best web development work and highlights my skills in both coding and 
                  design.`}</p>
        </div>
  
        <Button variant={isDarkMode ? "dark" :"light"} className="btn">VIEW PROJECTS</Button>
        <Button variant={isDarkMode ? "dark" :"light"} className="btn">RESUME</Button>
        <div class="my-img">
          <img src={myImg} alt="priya standing" />
        </div>
        
      </div>
    );
  }
  