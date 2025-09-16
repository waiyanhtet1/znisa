import Button from "../../components/button/Button";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import "./ProcessDesignSection.css";
import stepIcon from "/images/stepIcon.png";

const ProcessDesignSection = () => {
  return (
    <div className="process-section-container">
      {/* title */}
      <SectionTitle title="My process to design" />

      {/* content list */}
      <div className="process-content-container">
        <div className="process-content-item">
          <div className="process-content-left_side">
            <div className="process-content-number">1</div>
            <div className="process-content-line"></div>
          </div>

          {/* Step 1 content */}
          <div className="process-content-right_side">
            <img src={stepIcon} alt="" />
            <h3>Step 1: Product design Research</h3>
            <p>
              This initial step involves a systematic and thorough exploration
              of the market landscape, user needs, and existing solutions.
            </p>
            <Button variant="outline" className="process-content-see-examples">
              See Examples
            </Button>
          </div>
        </div>

        {/* step 2 */}
        <div className="process-content-item">
          <div className="process-content-left_side">
            <div className="process-content-number">2</div>
            <div className="process-content-line process-content-line-2"></div>
          </div>

          <div className="process-content-right_side">
            <img src={stepIcon} alt="" className="process-content-img-1" />
            <h3>Step 2: UI design in figma</h3>
            <p>
              This initial step involves a systematic and thorough exploration
              of the market landscape, user needs, and existing solutions.
            </p>
          </div>
        </div>

        {/* step 3 */}
        <div className="process-content-item">
          <div className="process-content-left_side">
            <div className="process-content-number">3</div>
            <div className="process-content-line process-content-line-2"></div>
          </div>

          <div className="process-content-right_side">
            <img src={stepIcon} alt="" className="process-content-img-2" />
            <h3>Step 3: No-code develop in webflow</h3>
            <p>
              This initial step involves a systematic and thorough exploration
              of the market landscape, user needs, and existing solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessDesignSection;
