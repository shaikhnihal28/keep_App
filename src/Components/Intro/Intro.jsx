import React from "react";
import "../Intro/Intro.css";
import Github from "../../images/github.png";
import Linkedin from "../../images/linkedin.png";
import Insta from "../../images/instagram.png";
import Vector1 from "../../images/Vector1.png";
import Vector2 from "../../images/Vector2.png";
import Boy from "../../images/boy.png";
import Thumbup from "../../images/thumbup.png";
import Crown from "../../images/crown.png";
import glassesimoji from "../../images/glassesimoji.png";
import FloatingDiv from "../Floating/Floating";
import { themeContext } from "../Work/Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am </span>
          <span>Mr.Nihal</span>
          <span>
            Frontend Developer With High Level Of Exprience In Web Designing And
            Developer, Producting The Qulity Works
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Insta} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
          className="floating-div"
        />
        <div style={{ top: "-2%", left: "62%" }} className="floating-div">
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "22.8rem", left: "0rem" }} className="floating-div">
          <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award" />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};
export default Intro;
