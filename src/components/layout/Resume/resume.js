import React from "react";
import "./resume.scss";

function Resume() {
  return (
    <>
      <section id="resume">
        <h1 className="resume_title">
          MY RESUME
          <div className="line"></div>
        </h1>
        <div className="resume_container">
          <div className="education">
            <h3 className="title">
              Education
              <div className="line"></div>
            </h3>
            <div className="education_container">
              <div class="education_item">
                <div class="date">2017 - 2020</div>
                <div class="place">Higher Institute Of Language - Nabel</div>
                <div class="event">Bachelors in Arabic Language</div>
              </div>
              <div class="education_item">
                <div class="date">2021 - 2022</div>
                <div class="place">RBK | RebootKamp TUNISIA - Ariana</div>
                <div class="event">Full Stack JavaScript Developer</div>
              </div>
            </div>
            <h3 className="title">
              Experience
              <div className="line"></div>
            </h3>
            <div className="education_container">
              <div class="education_item">
                <div class="date">June 2022 - Septembre 2022</div>
                <div class="place">E-Tafakna Startup - Tunis(remote)</div>
                <div class="event">Full Stack Developer (Web app)</div>
              </div>
              <div class="education_item">
                <div class="date">Jully 2023 - Septembre 2023</div>
                <div class="place">DESIGNET Web Agency (Menzel Temime)</div>
                <div class="event">Frontend developer</div>
              </div>
            </div>
          </div>
          <div className="right_section">
            <h3 className="title">
              CERTIFICATIONS
              <div className="line"></div>
            </h3>
            <div className="certifications">
              <div class="certification_item">
                <div class="date">Dec 2021, Juin 2022</div>
                <div class="place">RBK | RebootKamp TUNISIA - Ariana</div>
                <div class="event">Full-Stack JavaScript Developer</div>
              </div>
            </div>
            <h3 className="title">
              COURSES AND TRAINING
              <div className="line"></div>
            </h3>
            <div className="courses">
              <div class="course_item">
                <div class="date">Feb 2020 - Apr 2020</div>
                <div class="place">IBH Training Center - Kelibia</div>
                <div class="event">Certification in Web Development</div>
              </div>
              <div class="course_item">
                <div class="date">Feb 2022 - March 2022</div>
                <div class="place">Designet Training Center - Menzel Temim</div>
                <div class="event">Certification in React JS / Angular JS</div>
              </div>
              <div class="course_item">
                <div class="date">May 2023</div>
                <div class="place">Sololearn</div>
                <div class="event">Certification in React JS + Redux</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
