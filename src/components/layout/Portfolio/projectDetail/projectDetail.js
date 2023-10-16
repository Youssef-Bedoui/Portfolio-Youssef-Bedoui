import React from "react";
import "./projectDetail.scss";
import CancelPresentationTwoToneIcon from "@mui/icons-material/CancelPresentationTwoTone";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import projectData from "../../../../constants/portfolioData.json";

function ProjectDetailModal({
  modal,
  closeModal,
  projectIndex,
  setProjectIndex,
}) {
  return (
    <div className="projectDetailsModal">
      <span className="closeModalBtn">
        <CancelPresentationTwoToneIcon
          className="X_icon"
          onClick={closeModal}
        />
      </span>
      <div className="detail_container">
        <div className="images_section">
          <Slide>
            {projectData.projects[projectIndex].images.map(
              (slideImage, index) => (
                <div className="image_cont">
                  {console.log(slideImage.url)}
                  <img
                    src={require(`../../../../assets/images/portfolio/${slideImage.url}`)}
                    alt={slideImage.url}
                    className="image_style"
                  />
                </div>
              )
            )}
          </Slide>
        </div>
        <div className="details_section">
          <h1 className="name">{projectData.projects[projectIndex].name}</h1>
          <ul>
            <li className="type">{projectData.projects[projectIndex].type}</li>
            <li className="date">
              <span className="colored">Date : </span>
              {projectData.projects[projectIndex].date}
            </li>
            <li className="skills">
              <span className="colored">Skills : </span>
              {projectData.projects[projectIndex].skills}
            </li>
          </ul>
          <p className="description">
            {projectData.projects[projectIndex].description}
          </p>
          <div className="codeBtns">
            <a
              href={projectData.projects[projectIndex].github_code1}
              className="codeBtn"
            >
              Github Code (Frontend)
            </a>
            {projectData.projects[projectIndex].github_code2 && (
              <a
                href={projectData.projects[projectIndex].github_code2}
                className="codeBtn"
              >
                Github Code (Backend)
              </a>
            )}
            {projectData.projects[projectIndex].website && (
              <a
                href={projectData.projects[projectIndex].website}
                className="codeBtn"
              >
                Visit Website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailModal;
