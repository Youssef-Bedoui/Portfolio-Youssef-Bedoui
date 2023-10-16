import React, { useState } from "react";
import "./contact.scss";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
const handleFormSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  try {
    const response = await fetch(
      "https://portfolio-back-yw6i.onrender.com/contact_me/",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      setSuccess(true);
      setError(false);
    } else {
      setError(true);
      setSuccess(false);
    }
  } catch (error) {
    console.log(error)
    setError(true);
    setSuccess(false);
  }
};

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
      <form
   
        className="right_section"
        onSubmit={handleFormSubmit}
      >
        <h3>
          CONTACT FORM
          <div className="line"></div>
        </h3>
        <input placeholder="Name" className="input" name="name" type="text" />
        <input
          placeholder="E-mail"
          className="input"
          name="email"
          type="email"
        />
        <textarea
          name="message"
          className="messageArea"
          placeholder="Your message..."
        />
        <button className="submit submitBtn" type="submit">
          SEND MESSAGE
        </button>
        {success && (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Your Message sent successfully.
          </Alert>
        )}
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            An Error occured !<strong>Please retry later .</strong>
          </Alert>
        )}
      </form>
    </section>
  );
}

export default Contact;
