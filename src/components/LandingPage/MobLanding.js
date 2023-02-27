import myImg from "../assets/myImg-light-small.png";
import headerImg from "../assets/priyamoghe-light-small.png";
import "./MobLanding.css";

export default function MobLanding() {
    return (
      <div className="container">
        <div className="text-part">
          <img src={headerImg} alt="priya moghe" />
          <p>{`Hi, my name is Priya, and I am a front-end developer and designer with experience 
                  in UI design, graphic design, and illustration. I specialize in creating responsive and 
                  user-friendly websites using JavaScript, Python, HTML, CSS, and React. My portfolio 
                  showcases some of my best web development work and highlights my skills in both coding and 
                  design.`}</p>
        </div>
  
        <button className="btn">VIEW PROJECTS</button>
        <button className="btn">RESUME</button>
        <div class="my-img">
          <img src={myImg} alt="priya standing" />
        </div>
        
      </div>
    );
  }
  