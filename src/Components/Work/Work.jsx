import React from "react";
import "../Work/Work.css";
import Upwork from "../../images/Upwork.png";
import Fiverr from "../../images/fiverr.png";
import Amazon from "../../images/amazon.png";
import Shopify from "../../images/Shopify.png";
import Facebook from "../../images/Facebook.png";
import { themeContext } from "../Work/Context";
import { useContext } from "react";

const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works For All These
        </span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur
          <br /> perspiciatis est magni et quae impedit nesciunt.
          <br /> perspiciatis est magni et quae impedit
          <br />
          adipisicing eligendi voluptates, nobis aut
        </span>
        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>

        {/* background Circle  */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Work;
