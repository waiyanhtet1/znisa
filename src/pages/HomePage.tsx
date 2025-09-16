import Header from "../components/header/Header";
import HeroSection from "../sections/heroSection/HeroSection";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Header />
      <HeroSection />
    </div>
  );
};

export default HomePage;
