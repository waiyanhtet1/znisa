import drabble from "/images/drabble.png";
import facebook from "/images/facebook.png";
import instagram from "/images/instagram.png";
import twitter from "/images/twitter.png";

import { User } from "lucide-react";
import Button from "../button/Button";
import "./Footer.css";
import logo from "/images/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* logo placement */}
      <div className="footer-logo">
        <img src={logo} alt="" className="footer-logo-img" />
        <p className="footer-logo-title">znisa</p>
      </div>

      <div className="footer-navigation-container">
        <div className="footer-navigation-item navigation-active">
          <img src={twitter} alt="" />
        </div>
        <div className="footer-navigation-item navigation-active">
          <img src={drabble} alt="" />
        </div>
        <div className="footer-navigation-item navigation-active">
          <img src={instagram} alt="" />
        </div>
        <div className="footer-navigation-item navigation-active">
          <img src={facebook} alt="" />
        </div>
      </div>

      <div className="footer-action-container desktop-nav">
        <Button>Hire Me</Button>
        <Button variant="circular">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default Footer;
