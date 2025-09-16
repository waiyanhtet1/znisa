import SectionTitle from "../../components/sectionTitle/SectionTitle";
import TestimonialsCard from "../../components/testimonialsCard/TestimonialsCard";
import "./TestimonialsSection.css";

const TestimonialsSection = () => {
  return (
    <div className="testimonials-section-container">
      <SectionTitle title="Client testimonials" />

      <div className="testimonials-content-section">
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
      </div>
    </div>
  );
};

export default TestimonialsSection;
