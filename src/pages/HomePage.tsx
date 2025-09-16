import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ContactSection from "../sections/contactSection/ContactSection";
import FeaturePJSection from "../sections/featurePJSection/FeaturePJSection";
import HeroSection from "../sections/heroSection/HeroSection";
import ProcessDesignSection from "../sections/processDesignSection/ProcessDesignSection";
import SponsorSection from "../sections/sponsorSection/SponsorSection";
import TestimonialsSection from "../sections/testimonialsSection/TestimonialsSection";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="homepage-container">
        <Header />
        <HeroSection />
      </div>

      <SponsorSection />

      <div className="homepage-container">
        <ProcessDesignSection />
        <FeaturePJSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
