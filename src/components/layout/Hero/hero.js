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
          Full Stack JS Developer
        </span>
        <p className="intro_content">
          Experienced frontend developer specializing in React, Next.js, and TypeScript. Building enterprise-grade applications, e-commerce platforms, and complex dashboards with modern web technologies.
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
          <a href={cv} className="link" download="Youssef_Bedoui_CV.pdf">
            <DownloadTwoToneIcon className="btnIcon" /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
