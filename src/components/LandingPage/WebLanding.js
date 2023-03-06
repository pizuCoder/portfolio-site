import myImg from "../assets/myImg2.jpeg";
import headerImgLight from "../assets/priyamoghe-light-small.png";
import headerImgDark from "../assets/priyamoghe-dark-small.png"
import Button from 'react-bootstrap/Button';
import sampleResume from '../resume/sampleResume.pdf'
import "./WebLanding.css";
import React from "react"

export default function MobLanding({ isDarkMode }) {
        
  
    return (
      <div className="container" >
        <div className="text-part" >
          <img src={isDarkMode ? headerImgLight : headerImgDark} alt="priya moghe" />
          <p style={{color: isDarkMode ? "#212529":'white' }}>{`Hi, my name is Priya, and I am a front-end developer and designer with experience 
                  in UI design, graphic design, and illustration. I specialize in creating responsive and 
                  user-friendly websites using JavaScript, Python, HTML, CSS, and React. My portfolio 
                  showcases some of my best web development work and highlights my skills in both coding and 
                  design.`}</p>
        </div>
  
        <Button  variant = {isDarkMode ? "dark" : "light"} className="btn" onClick={() => window.scrollTo(0, document.getElementById("projects-section").offsetTop)}>VIEW PROJECTS</Button>
        <a href={sampleResume} download="MyExampleDoc" target='_blank' rel="noreferrer" style={{ width:"100%"}}>
          <Button  variant = {isDarkMode ? "dark" : "light"} className="btn">RESUME</Button>
        </a>
        <div class="my-img">
          <img src={myImg} alt="priya standing" style={{width: "70%", borderRadius: "1rem"}}/>
        </div>
        
      </div>
    );
  }
  