import "./SponsorSection.css";
import vectorImg from "/images/Vector.png";

const SponsorSection = () => {
  return (
    <div className="sponsor-section-container">
      <div className="sponsor-content">
        <p>Framer</p>
        <img src={vectorImg} alt="" className="sponsor-divider" />
        <p>Webflow</p>
        <img src={vectorImg} alt="" className="sponsor-divider" />
        <p>Figma</p>
        <img src={vectorImg} alt="" className="sponsor-divider" />
        <p>Notion</p>
        <img src={vectorImg} alt="" className="sponsor-divider" />
      </div>
    </div>
  );
};

export default SponsorSection;
