import React from "react";
import "./skills.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CodeIcon from "@mui/icons-material/Code";
import PaletteIcon from "@mui/icons-material/Palette";
import WebIcon from "@mui/icons-material/Web";
import service_img1 from "../../../assets/images/services-1.webp";
import service_img2 from "../../../assets/images/services-2.webp";
import service_img3 from "../../../assets/images/services-3.webp";

function Skills() {
  const frontendSkills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS / SCSS", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "React JS", percentage: 90 },
    { name: "Next.js", percentage: 85 },
    { name: "TypeScript", percentage: 80 },
  ];

  const toolsSkills = [
    { name: "Tailwind CSS", percentage: 85 },
    { name: "Redux / Toolkit", percentage: 85 },
    { name: "Material-UI", percentage: 85 },
    { name: "Node JS / Express", percentage: 75 },
    { name: "MySQL", percentage: 75 },
    { name: "MongoDB", percentage: 70 },
  ];

  const services = [
    {
      icon: <CodeIcon />,
      title: "Frontend Development",
      description: "Build modern, responsive, and performant web applications using React, Next.js, and TypeScript. Create beautiful and functional user interfaces with clean architecture, state management, and seamless user experiences.",
      image: service_img1,
    },
    {
      icon: <PaletteIcon />,
      title: "UI/UX Implementation",
      description: "Transform design mockups into pixel-perfect, accessible, and responsive web interfaces. Expertise in Material-UI, Tailwind CSS, shadcn/ui, and custom component libraries with smooth animations and interactions.",
      image: service_img2,
    },
    {
      icon: <WebIcon />,
      title: "Web Application Development",
      description: "Develop complex enterprise applications including ERP systems, e-commerce platforms, admin dashboards, and management tools with real-time features, authentication, and data visualization.",
      image: service_img3,
    },
  ];

  const getProgressColor = (percentage) => {
    if (percentage >= 90) return "#02c8f1";
    if (percentage >= 80) return "#00b4d8";
    if (percentage >= 70) return "#0096c7";
    return "#0077b6";
  };

  return (
    <section id="skills">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-accent">{"<"}</span>
          My Skills
          <span className="title-accent">{"/>"}</span>
        </h2>
        <p className="section-subtitle">Technologies & tools I work with daily</p>
      </div>

      <div className="skills-grid">
        <div className="skill-category">
          <h3 className="category-title">
            <span className="category-icon">⚡</span>
            Frontend & Core
          </h3>
          <div className="skills-list">
            {frontendSkills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="progress-ring">
                  <CircularProgressbar
                    value={skill.percentage}
                    text={`${skill.percentage}%`}
                    styles={buildStyles({
                      pathColor: getProgressColor(skill.percentage),
                      textColor: "#fff",
                      trailColor: "rgba(255, 255, 255, 0.1)",
                      textSize: "28px",
                      pathTransitionDuration: 1.5,
                    })}
                  />
                </div>
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: `${skill.percentage}%`,
                      background: `linear-gradient(90deg, ${getProgressColor(skill.percentage)}, ${getProgressColor(skill.percentage)}88)`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3 className="category-title">
            <span className="category-icon">🛠</span>
            Tools & Backend
          </h3>
          <div className="skills-list">
            {toolsSkills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="progress-ring">
                  <CircularProgressbar
                    value={skill.percentage}
                    text={`${skill.percentage}%`}
                    styles={buildStyles({
                      pathColor: getProgressColor(skill.percentage),
                      textColor: "#fff",
                      trailColor: "rgba(255, 255, 255, 0.1)",
                      textSize: "28px",
                      pathTransitionDuration: 1.5,
                    })}
                  />
                </div>
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: `${skill.percentage}%`,
                      background: `linear-gradient(90deg, ${getProgressColor(skill.percentage)}, ${getProgressColor(skill.percentage)}88)`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-accent">{"<"}</span>
            Services
            <span className="title-accent">{"/>"}</span>
          </h2>
          <p className="section-subtitle">What I can do for you</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-card-inner">
                <div className="service-icon-wrapper">
                  <div className="service-icon">{service.icon}</div>
                </div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
                <div className="service-glow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
