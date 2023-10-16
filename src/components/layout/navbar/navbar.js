import * as React from "react";
import "./navbar.scss";
import logo from "../../../assets/images/portfolio_logo.png";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="menu">
        <Link
          activeClass="active"
          className="menuLinkItem"
          to="hero"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          className="menuLinkItem"
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          className="menuLinkItem"
          to="skills"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          className="menuLinkItem"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          Portfolio
        </Link>
      </div>
      <Link
        className="contactBtn"
        to="contact"
        smooth={true}
        offset={-80}
        duration={500}
      >
        <ModeCommentIcon className="contactIcon" />
        <span className="contactBtnText">CONTACT ME !</span>
      </Link>
    </nav>
  );
}
export default Navbar;
