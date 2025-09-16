import React from "react";
import Button from "../../components/button/Button";
import "./HeroSection.css";
import portalSvg from "/images/Portal.svg";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section" data-aos="zoom-in">
      <div className="grid-background">
        {Array.from({ length: 6 * 7 }).map((_, index) => (
          <div key={index} className="grid-cell"></div>
        ))}
      </div>
      <div className="hero-content">
        <img src={portalSvg} alt="Portal" className="portal-svg" />
        <img src={portalSvg} alt="Portal" className="portal-svg-1" />
        <h1>I design and build clean websites</h1>
        <p>
          Write anything here something about yourself to showcase what actually
          you doing or targeting etc.
        </p>
        <Button className="hero-content-button">Hire Me</Button>
      </div>
    </section>
  );
};

export default HeroSection;
