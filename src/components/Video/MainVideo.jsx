import "./MainVideo.scss";
import { Link } from "react-router-dom"

function MainVideo({ poster, video}) {
  return (
    <section className="Video-container">
      <div className="Video-container__video">
      <video poster={poster} controls width="100%"  height="auto">
        <source src={video}  />
      </video>
      </div>
    </section>
  );
}

export default MainVideo;
