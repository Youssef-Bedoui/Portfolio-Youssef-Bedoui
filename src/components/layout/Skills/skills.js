import React from "react";
import "./skills.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import service_img1 from "../../../assets/images/services-1.webp";
import service_img2 from "../../../assets/images/services-2.webp";
import service_img3 from "../../../assets/images/services-3.webp";

function Skills() {
  const percentage = [75, 80, 70, 70, 85, 70, 65];

  return (
    <section id="skills">
      <p className="skills_title">
        My Skills
        <div className="divider"></div>
      </p>
      <div className="skills_container">
        <div className="skill_item">
          <CircularProgressbar
            className="circle"
            value={percentage[0]}
            text={`${percentage[0]}%`}
          />
          <p className="skill_title">HTML</p>
        </div>
        <div className="skill_item">
          <CircularProgressbar
            className="circle"
            value={percentage[1]}
            text={`${percentage[1]}%`}
          />
          <p className="skill_title">CSS / SCSS</p>
        </div>
        <div className="skill_item">
          <CircularProgressbar
            className="circle"
            value={percentage[2]}
            text={`${percentage[2]}%`}
          />
          <p className="skill_title">JavaScript</p>
        </div>
        <div className="skill_item">
          <CircularProgressbar
            className="circle"
            value={percentage[3]}
            text={`${percentage[3]}%`}
          />
          <p className="skill_title">React JS</p>
        </div>
        <div className="skill_item">
          <CircularProgressbar
            className="circle"
            value={percentage[4]}
            text={`${percentage[4]}%`}
          />
          <p className="skill_title">Express JS</p>
        </div>
        <div className="skill_item">
          <CircularProgressbar
            className="circle"
            value={percentage[5]}
            text={`${percentage[5]}%`}
          />
          <p className="skill_title">MySQL</p>
        </div>
        <div className="skill_item">
          <CircularProgressbar
            className="circle"
            value={percentage[6]}
            text={`${percentage[6]}%`}
          />
          <p className="skill_title">MongoDB</p>
        </div>
      </div>

      <div className="services">
        <p className="services_title">
          What Services I'm Providing
          <div className="divider"></div>
        </p>
        <div className="services_container">
          <div className="service_item">
            <img
              src={service_img1}
              alt="Frontend Development"
              className="service_img"
            />
            <h3 className="service_name">Frontend Development</h3>
            <p className="service_parag">
              Enhance your website's user interface with my frontend development
              services. Create a beautiful and functional frontend that sets
              your business apart from the competition.
            </p>
          </div>
          <div className="service_item">
            <img
              src={service_img2}
              alt="Frontend Development"
              className="service_img"
            />
            <h3 className="service_name">API Development</h3>
            <p className="service_parag">
              Build a reliable and secure backend for your web applications with
              my API development services. I create scalable and secure APIs
              that power your web
            </p>
          </div>
          <div className="service_item">
            <img
              src={service_img3}
              alt="Frontend Development"
              className="service_img"
            />
            <h3 className="service_name">JavaScript Development</h3>
            <p className="service_parag">
              Create dynamic and interactive web applications with my JavaScript
              development services. I specialize in creating custom JavaScript
              solutions that meet your business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
