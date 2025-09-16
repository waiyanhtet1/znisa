import "./TestimonialsCard.css";
import quoteImg from "/images/quote.png";

const TestimonialsCard = () => {
  return (
    <div className="testmoni-card-container">
      <div className="testmoni-card-content-container">
        <div className="testmoni-card-content-information">
          {/* user image placement */}
          <div className="testmoni-card-content-profile"></div>

          {/* username and role */}
          <div className="testmoni-card-content-userInfo">
            <p>Client Name.</p>
            <span>Product Designer</span>
          </div>
        </div>

        <img src={quoteImg} alt="" />
      </div>

      <p className="testmoni-card-content-quote">
        s simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the
      </p>
    </div>
  );
};

export default TestimonialsCard;
