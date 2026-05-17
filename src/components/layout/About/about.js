import React, { useState, useEffect } from "react";
import "./about.scss";

function About() {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const birthDate = new Date(1998, 9, 6);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  }, []);

  return (
    <section id="about">
      <p className="about_title">
        MORE <span className="colored">ABOUT ME</span>
      </p>
      <div className="divider"></div>
      <div className="about_container">
        <div className="left_section">
          <p className="about_paragraph">
            I'm a {age}-year-old Frontend Developer with over 3 years of professional experience, currently working at Atomic IT PRO. My journey in web development has been marked by hard work, effective teamwork, and strong communication skills. I specialize in building modern, responsive web applications using React, Next.js, and TypeScript. With expertise in complex enterprise systems including ERP platforms, e-commerce solutions, and management dashboards, I craft clean, performant, and accessible user interfaces that adhere to the latest web standards.
          </p>
        </div>
        <div className="right_section">
          <div className="aboutInfoItem">
            <span>Age :</span>
            <span className="colored">{age} Years</span>
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
