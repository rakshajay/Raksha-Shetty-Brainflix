import "./NextVideos.scss";
import { Link } from "react-router-dom";

function NextVideos({ dataArray, currentVideo }) {
  const baseUrl = import.meta.env.VITE_API_URL;
  return (
    <section className="gallery">
      <h1 className="gallery-heading">NEXT VIDEOS</h1>
      <ul className="gallery-list">
        {dataArray
          ?.filter((video) => video.id !== currentVideo.id)
          .map((video) => (
            <li key={video.id} className="gallery-list__item">
              <Link
                className="gallery-list__item-link"
                to={`/videos/${video.id}`}
              >
                <div className="gallery-list__item-link-image">
                  <img src={`${baseUrl}/${video.image}`}  alt={video.title} />
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
