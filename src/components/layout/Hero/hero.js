import React from "react";
import "./hero.scss";
import profile_img from "../../../assets/images/profile_photo.png";
import BusinessCenterTwoToneIcon from "@mui/icons-material/BusinessCenterTwoTone";
import DownloadTwoToneIcon from "@mui/icons-material/DownloadTwoTone";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import cv from "../../../assets/cv/EN cv, Youssef Bedoui.pdf";
import { Link } from "react-scroll";


function Hero() {
  return (
    <section id="hero">
      <img src={profile_img} alt="Hero" className="hero_image" />
      <div className="hero_intro">
        <span className="welcome">Welcome,</span>
        <span className="intro_info">
          I'm <span className="intro_name">Youssef Bedoui</span>
          <br />
          Web Developer
        </span>
        <p className="intro_content">
          I am an aspiring junior web developer dedicated to crafting responsive
          and engaging websites.
        </p>
        <div className="intro_btns">
          <Link
            to="#resume"
            className="link"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector("#resume");
              target.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <MoreHorizTwoToneIcon className="btnIcon" /> RESUME
          </Link>
          <Link
            to="#contact"
            className="link"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector("#contact");
              target.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <BusinessCenterTwoToneIcon className="btnIcon" />
            HIRE ME
          </Link>
          <Link to={cv} className="link" download>
            <DownloadTwoToneIcon className="btnIcon" /> Download CV
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
