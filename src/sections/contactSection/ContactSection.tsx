import Button from "../../components/button/Button";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import "./ContactSection.css";
import contactImage from "/images/contact.png";

const ContactSection = () => {
  return (
    <div className="contact-section-container" data-aos="fade-right">
      <div className="content-section-text">
        <SectionTitle title="Have idea about project?" />
        <p>
          Write anything here something about yourself to showcase what actually
          you doing or targeting etc.
        </p>
        <Button>Send us a message</Button>
      </div>

      <img src={contactImage} alt="" className="content-section-image" />
    </div>
  );
};

export default ContactSection;
