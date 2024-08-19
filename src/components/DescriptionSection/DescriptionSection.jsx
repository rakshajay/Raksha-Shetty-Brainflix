import "./DescriptionSection.scss";
import likesIcon from "../../assets/Icons/likes.svg";
import viewsIcon from "../../assets/Icons/views.svg";

function DescriptionSection({
  description,
  title,
  views,
  likes,
  timestamp,
  channel,
}) {
  return (
    <div className="description">
      <div className="description-title">
        <h1>{title}</h1>
      </div>
      <div className="description-details">
        <div className="description-details__name">
          <div>
            <h3>By {channel}</h3>
          </div>
          <div>
            <h4>{timestamp}</h4>
          </div>
        </div>
        <div className="description-details__visits">
          <div className="description-details__visits-views">
            <img src={viewsIcon} alt="icon of eye" />
            <h4>{views}</h4>
          </div>
          <div className="description-details__visits-likes">
            <img src={likesIcon} alt="icon of heart" />
            <h4>{likes}</h4>
          </div>
        </div>
      </div>
      <div className="description-content">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default DescriptionSection;