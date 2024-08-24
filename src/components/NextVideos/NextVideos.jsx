import "./NextVideos.scss";
import { Link } from "react-router-dom";

function NextVideos({ handleVideoClick, dataArray, CurrentVideo }) {
  return (
    <section className="gallery">
      <h1 className="gallery-heading">NEXT VIDEOS</h1>
      <ul className="gallery-list">
        {dataArray
          ?.filter((video) => video.id !== CurrentVideo.id)
          .map((video) => (
            <li key={video.id} className="gallery-list__item">
              <Link
                className="gallery-list__item-link"
                to={`/videos/${video.id}`}
              >
                <div className="gallery-list__item-link-image">
                  <img src={video.image} alt={video.title} />
                </div>
                <div className="gallery-list__item-link-text">
                  <h2>{video.title}</h2>
                  <p>{video.channel}</p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default NextVideos;
