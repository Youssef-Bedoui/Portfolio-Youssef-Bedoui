import React, { useState, useRef, useCallback } from "react";
import "./projectDetail.scss";
import CancelPresentationTwoToneIcon from "@mui/icons-material/CancelPresentationTwoTone";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import projectData from "../../../../constants/portfolioData.json";

const portfolioImages = require.context(
  "../../../../assets/images/portfolio/",
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

function ProjectDetailModal({
  modal,
  closeModal,
  projectIndex,
  setProjectIndex,
}) {
  const project = projectData.projects[projectIndex];
  const hasGithubLinks = project.github_code1 || project.github_code2;
  const hasWebsite = project.website;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  const imageContainerRef = useRef(null);

  const totalImages = project.images.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalImages);
    setZoom(1);
  }, [totalImages]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalImages) % totalImages);
    setZoom(1);
  }, [totalImages]);

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5));
  const resetZoom = () => setZoom(1);

  const toggleImageFullscreen = () => {
    setIsImageFullscreen(!isImageFullscreen);
    setZoom(1);
  };

  const currentImage = project.images[currentSlide];
  const imgPath = currentImage ? getImagePath(currentImage.url) : null;

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") {
        if (isImageFullscreen) setIsImageFullscreen(false);
        else closeModal();
      }
    },
    [nextSlide, prevSlide, closeModal, isImageFullscreen]
  );

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className={`projectDetailsModal ${isImageFullscreen ? "image-fullscreen-mode" : ""}`}>
      <div className="modal-backdrop" onClick={closeModal} />
      
      <div className="modal-content">
        <button className="closeModalBtn" onClick={closeModal}>
          <CancelPresentationTwoToneIcon />
        </button>

        <div className="detail_container">
          <div className="images_section">
            <div className="image-viewer" ref={imageContainerRef}>
              <div className="image-controls">
                <button className="control-btn" onClick={prevSlide} title="Previous">
                  <ArrowBackIosNewIcon />
                </button>
                <span className="slide-counter">{currentSlide + 1} / {totalImages}</span>
                <button className="control-btn" onClick={nextSlide} title="Next">
                  <ArrowForwardIosIcon />
                </button>
                <div className="zoom-controls">
                  <button className="control-btn" onClick={zoomOut} title="Zoom Out">
                    <ZoomOutIcon />
                  </button>
                  <button className="control-btn" onClick={resetZoom} title="Reset Zoom">
                    {Math.round(zoom * 100)}%
                  </button>
                  <button className="control-btn" onClick={zoomIn} title="Zoom In">
                    <ZoomInIcon />
                  </button>
                </div>
                <button className="control-btn" onClick={toggleImageFullscreen} title="Toggle Fullscreen">
                  {isImageFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
                </button>
              </div>

              <div className="image-display">
                {imgPath ? (
                  <img
                    src={imgPath}
                    alt={project.name}
                    className={`image-style ${isImageFullscreen ? "fullscreen-image" : ""}`}
                    style={{
                      transform: `scale(${zoom})`,
                      transition: "transform 0.3s ease",
                    }}
                  />
                ) : (
                  <div className="image-placeholder">
                    <span>{project.name}</span>
                    <small>Image not found</small>
                  </div>
                )}
              </div>

              <div className="thumbnails">
                {project.images.map((slideImage, index) => {
                  const thumbPath = getImagePath(slideImage.url);
                  return (
                    <button
                      key={index}
                      className={`thumbnail ${index === currentSlide ? "active" : ""}`}
                      onClick={() => {
                        setCurrentSlide(index);
                        setZoom(1);
                      }}
                    >
                      {thumbPath ? (
                        <img src={thumbPath} alt={`Slide ${index + 1}`} />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="details_section">
            <h1 className="name">{project.name}</h1>
            <div className="project-meta">
              <div className="meta-item">
                <span className="meta-label">Type</span>
                <span className="meta-value">{project.type}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Date</span>
                <span className="meta-value">{project.date}</span>
              </div>
            </div>
            <div className="skills-container">
              <span className="meta-label">Tech Stack</span>
              <div className="skills-list">
                {project.skills.split(",").map((skill, i) => (
                  <span key={i} className="skill-tag">{skill.trim()}</span>
                ))}
              </div>
            </div>
            <p className="description">{project.description}</p>
            {(hasGithubLinks || hasWebsite) && (
              <div className="codeBtns">
                {project.github_code1 && (
                  <a
                    href={project.github_code1}
                    className="codeBtn primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Frontend
                  </a>
                )}
                {project.github_code2 && (
                  <a
                    href={project.github_code2}
                    className="codeBtn secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Backend
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    className="codeBtn website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailModal;
