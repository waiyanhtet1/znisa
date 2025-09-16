import "./SectionTitle.css";
import startImg from "/images/star.png";

interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="section-title-container">
      <h2 className="section-title">{title}</h2>
      <img src={startImg} alt="" />
    </div>
  );
};

export default SectionTitle;
