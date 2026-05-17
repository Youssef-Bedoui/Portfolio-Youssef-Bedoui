import React, { useState } from "react";
import "./portfolio.scss";
import projectData from "../../../constants/portfolioData.json";
import ProjectDetailModal from "./projectDetail/projectDetail";

const portfolioImages = require.context(
  "../../../assets/images/portfolio/",
  true,
  /\.(png|jpe?g|svg)$/
);

function getImagePath(url) {
  try {
    return portfolioImages(`./${url}`);
  } catch {
    return null;
  }
}

function Portfolio() {
  const [modal, setModal] = useState(false);
  const [projectIndex, setProjectIndex] = useState(null);

  const openModal = (index) => {
    setProjectIndex(index);
    setModal(true);
    document.body.classList.add("modal_open");
  };
  const closeModal = () => {
    setModal(false);
    document.body.classList.remove("modal_open");
  };

  return (
    <>
      <section id="portfolio">
        <h1 className="title">PORTFOLIO</h1>
        <div className="portfolio_container">
          {projectData.projects.map((project, index) => {
            const firstImage = project.images[0];
            const imgPath = firstImage ? getImagePath(firstImage.url) : null;

            return (
              <div
                className="project_item"
                key={project.id}
                onClick={() => openModal(index)}
              >
                {imgPath ? (
                  <img src={imgPath} alt={project.name} className="project_image" />
                ) : (
                  <div className="project_image_placeholder">
                    <span>{project.name.split("|")[0].trim()}</span>
                  </div>
                )}
                <div className="project_details">
                  <div className="project_name">{project.name.split("|")[0].trim()}</div>
                  <div className="project_type">{project.type}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {modal && (
        <ProjectDetailModal
          modal={modal}
          closeModal={closeModal}
          projectIndex={projectIndex}
          setProjectIndex={setProjectIndex}
        />
      )}
    </>
  );
}

export default Portfolio;
