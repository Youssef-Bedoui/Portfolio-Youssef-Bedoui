import React from "react";
import "./about.scss";

function About() {
  return (
    <section id="about">
      <p className="about_title">
        MORE <span className="colored">ABOUT ME</span>
      </p>
      <div className="divider"></div>
      <div className="about_container">
        <div className="left_section">
          <p className="about_paragraph">
            I'm a 25-year-old Full-Stack web developer, with a degree from RBK
            Tunisia RebootKamp. My journey in the world of web development has
            been marked by hard work, effective teamwork, and strong
            communication skills. Self-learning has become one of my core
            strengths, honed through numerous projects. This drive fuels my
            ongoing growth and potential within the field. My specialization
            lies in Front-end web development, where I craft clean, appealing,
            and functional websites that adhere to the latest web standards.
          </p>
        </div>
        <div className="right_section">
          <div className="aboutInfoItem">
            <span>Age :</span>
            <span className="colored">25 Years</span>
          </div>
          <div className="aboutInfoItem">
            <span>Date of birth :</span>
            <span className="colored">06-10-1998</span>
          </div>
          <div className="aboutInfoItem">
            <span>E-mail :</span>
            <span className="colored">Jozefbedoui@gmail.com</span>
          </div>
          <div className="aboutInfoItem">
            <span>Phone :</span>
            <span className="colored">+216 93 576 828</span>
          </div>
          <div className="aboutInfoItem">
            <span>Freelance:</span>
            <span className="colored">Available</span>
          </div>
          <button className="contactBtn">GET IN TOUCH WITH ME</button>
        </div>
      </div>
    </section>
  );
}

export default About;
