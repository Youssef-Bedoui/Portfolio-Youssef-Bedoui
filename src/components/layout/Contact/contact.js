  import React from "react";
import "./contact.scss";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

function Contact() {
  return (
    <section id="contact">
      <div className="left_section">
        <h3>
          GET IN TOUCH
          <div className="line"></div>
        </h3>
        <p>
          Please don't hesitate to contact me for more information or
          suggestions.
        </p>
        <div className="info">
          <div className="infoItem">
            <LocationOnOutlinedIcon />
            <div className="right">
              <span>FIND ME</span>
              <p>Kelibia, TUNISIA</p>
            </div>
          </div>
          <div className="infoItem">
            <MailOutlineOutlinedIcon />
            <div className="right">
              <span>MAIL ME</span>
              <p>
                <a href="mailto:JozefBedoui@gmail.com">JozefBedoui@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="infoItem">
            <PhoneOutlinedIcon />
            <div className="right">
              <span>CALL ME</span>
              <p>+216 93 576 828</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
