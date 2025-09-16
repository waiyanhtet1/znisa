import "./FeaturePJCard.css";

interface Props {
  pjImg: string;
}

const FeaturePJCard = ({ pjImg }: Props) => {
  return (
    <div className="pjcard-container" data-aos="zoom-in">
      <div className="pjcard-img"></div>

      <div className="pjcard-content">
        <img src={pjImg} alt="" />
        <h2>Project Name</h2>
      </div>
    </div>
  );
};

export default FeaturePJCard;
