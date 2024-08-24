import "./MainVideo.scss";

function MainVideo({ poster, video }) {
  return (
    <section className="Video-container">
      <div className="Video-container__video">
        <video
          poster={poster}
          width="100%"
          height="auto"
          controls
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default MainVideo;
