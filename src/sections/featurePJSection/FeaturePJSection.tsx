import FeaturePJCard from "../../components/featurepjCard/FeaturePJCard";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import "./FeaturePJSection.css";
import pj1 from "/images/pj-1.png";
import pj2 from "/images/pj-2.png";
import pj3 from "/images/pj-3.png";

const FeaturePJSection = () => {
  return (
    <div className="featurepj-section-container">
      <SectionTitle title="Some Featured projects" />

      {/* pj card list */}
      <div className="featurepj-content-container">
        <FeaturePJCard pjImg={pj1} />
        <FeaturePJCard pjImg={pj2} />
        <FeaturePJCard pjImg={pj3} />
      </div>
    </div>
  );
};

export default FeaturePJSection;
