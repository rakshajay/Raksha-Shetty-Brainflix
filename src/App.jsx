import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import MainVideo from "./components/Video/MainVideo";
import DescriptionSection from "./components/DescriptionSection/DescriptionSection";
import CommentSection from "./components/CommentSection/CommentSection";
import CommentList from "./components/CommentList/CommentList";
import NextVideos from "./components/NextVideos/NextVideos";
import dataArray from "./data/video-details.json";

function App() {
  const openingVideo = dataArray.find(
    (video) => video.id === "84e96018-4022-434e-80bf-000ce4cd12b8"
  );

  const [currentVideo, setCurrentVideo] = useState(openingVideo);

  const handleVideoClick = (id) => {
    const foundVideo = dataArray.find((video) => video.id === id);
    setCurrentVideo(foundVideo);
  };
  

  return (
    <>
      <Header />
      <MainVideo poster={currentVideo.image} video={currentVideo.video} />
      <div className="info">
        <div className="info-text">
          <DescriptionSection
            description={currentVideo.description}
            title={currentVideo.title}
            channel={currentVideo.channel}
            views={currentVideo.views}
            likes={currentVideo.likes}
            timestamp={new Date(currentVideo.timestamp).toLocaleDateString()}
          />
          <CommentSection commentsNumber={currentVideo.comments.length} />
          <CommentList dataArrayComments={currentVideo.comments} />
        </div>
       <div className="info-list">
       <NextVideos
          dataArray={dataArray}
          handleVideoClick={handleVideoClick}
          currentVideoID={currentVideo.id}
        />
       </div>
      </div>
    </>
  );
}

export default App;
