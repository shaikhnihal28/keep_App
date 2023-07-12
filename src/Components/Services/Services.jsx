import React from "react";
import '../Services/Services.css';
import HeartEmoji from '../../images/heartemoji.png';
import Glasses from '../../images/glasses.png';
import Humble from '../../images/humble.png';
import Card from '../Card/Card';
import Resume from '../Services/Resume.pdf';
import  { themeContext } from '../Work/Context';
import { useContext } from "react";

const Services = () => {
  

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    return(
        <div className="services" id="Services">
          {/* left side */}
          <div className="awesome">
             <span style = {{color: darkMode? 'white':''}}>My Awesome</span>
             <span>Services</span>
             <span>Lorem ipsum dolor, sit amet consectetur adipisicing eligendi voluptates, nobis aut <br /> perspiciatis est magni et quae impedit nesciunt.</span>
             <a href={Resume} download>
             <button className="button s-button">
              Download CV
             </button>
             </a>
             <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
          </div>
          {/* first Card */}
          <div className="cards">
              <div style={{left
            :'16rem'}}>
                <Card 
                emoji ={HeartEmoji}
                heading ={'Design'}
                detail ={"Figma, Sketch, Photoshop, Adobe, adobe xd"}
                />
              </div>
          </div>
           {/* second Card  */}
           <div className="cards">
              <div style={{top:'14rem',left
            :'-7rem'}}>
                <Card 
                emoji ={Glasses}
                heading ={'Developer'}
                detail ={"HTML, CSS, JavaScript, React, angular, JQuery, Java"}
                />
              </div>
          </div>
          {/* thard card */}
          <div className="cards">
              <div style={{top:'22rem',left
            :'13rem'}}>
                <Card 
                emoji ={Humble}
                heading ={'UI/UX'}
                detail ={"In this Reactjs project, we will make an awesome responsive personal"}
                />
              </div>
              <div className="blur s-blur2" style={{background:'var(--purple'}}></div>
          </div>
        </div>
    )
}

export default Services