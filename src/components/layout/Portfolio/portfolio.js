import React, { useState } from "react";
import "./portfolio.scss";
import Klupea_img from "../../../assets/images/portfolio/klupea/Klupea_main.png";
import EvenToGo_img from "../../../assets/images/portfolio/Eventogo/EvenToGo - Opera 28_04_2023 12_40_49 AM.png";
import MovieLights_img from "../../../assets/images/portfolio/MovieLights/React App - Opera 14_05_2023 9_09_16 PM.png";
import RainyForecast_img from "../../../assets/images/portfolio/RainyForecast/React App - Opera 18_10_2023 8_25_17 PM.png";
import Al_Aajel_img from "../../../assets/images/portfolio/Al_Aajel_News/Al Aajel News et 6 pages de plus - Personnel – Microsoft​ Edge 07_11_2023 9_58_48 PM.png";
import ProjectDetailModal from "./projectDetail/projectDetail";

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
          <div
            className="project_item"
            onClick={() => {
              openModal(0);
            }}
          >
            <img src={Klupea_img} alt="Klupea" className="project_image" />
            <div className="project_details">
              <div className="project_name">Klupea</div>
              <div className="project_type">E-commerce App</div>
            </div>
          </div>
          <div
            className="project_item"
            onClick={() => {
              openModal(1);
            }}
          >
            <img src={EvenToGo_img} alt="Eventogo" className="project_image" />
            <div className="project_details">
              <div className="project_name">Eventogo</div>
              <div className="project_type">Web application</div>
            </div>
          </div>
          <div
            className="project_item"
            onClick={() => {
              openModal(2);
            }}
          >
            <img
              src={MovieLights_img}
              alt="MovieLights"
              className="project_image"
            />
            <div className="project_details">
              <div className="project_name">MovieLights</div>
              <div className="project_type">Web application</div>
            </div>
          </div>
          <div
            className="project_item"
            onClick={() => {
              openModal(3);
            }}
          >
            <img
              src={RainyForecast_img}
              alt="Rainy Forecast"
              className="project_image"
            />
            <div className="project_details">
              <div className="project_name">Rainy Forecast</div>
              <div className="project_type">Website</div>
            </div>
          </div>
          <div
            className="project_item"
            onClick={() => {
              openModal(4);
            }}
          >
            <img src={Al_Aajel_img} alt="Al Aajel" className="project_image" />
            <div className="project_details">
              <div className="project_name">Al Aajel News</div>
              <div className="project_type">Website</div>
            </div>
          </div>
        </div>
      </section>
      {/*modal*/}

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
