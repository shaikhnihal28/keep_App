import React from "react";
import "../Contact/Contact.css";
import { themeContext } from "../Work/Context";
import { useContext } from "react";

// import emailjs from '@emailjs/browser';
// import useRef from 'react';

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // const form = useRef();

  // // const [done, setDone] =useState(false);

  // const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs.sendForm('service_2mu5xtl', 'template_m5udu2c', form.current, 'VLwg1ltOWvnCYAiK_')
  //       .then((result) => {
  //           console.log(result.text);
  //         //   setDone(true);
  //       }, (error) => {
  //           console.log(error.text);
  //       });
  //   };

  return (
    <div className="contact-from">
      <div className="contact-awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Get In Touch</span>
        <span>Contact Me</span>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="c-right">
        <form>
          {/* ref={form} onSubmit={sendEmail} */}
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="massage"
            className="user"
            placeholder="Massage"
          ></textarea>
          <input type="submit" value="Send" className="button contact-button" />
          {/* <span>{done && "thanks for cotactin me!"}</span> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
