import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../HomePage/HomePage.scss";
import MainVideo from "../../components/Video/MainVideo";
import DescriptionSection from "../../components/DescriptionSection/DescriptionSection";
import CommentSection from "../../components/CommentSection/CommentSection";
import CommentList from "../../components/CommentList/CommentList";
import NextVideos from "../../components/NextVideos/NextVideos";
import { apiKey, baseUrl } from "../../utils";

function HomePage() {
  // import API data for video streaming and video list
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});

  const params = useParams();

  const getVideosList = async () => {
    try {
      const response = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
      const videos = response.data;

      if (videos && videos.length > 0) {
        setVideos(videos);
      }
      if (!params.id) {
        // If no params.id, select the first video by default
        getSelectedVideo(videos[0].id);
      } else {
        console.error("No videos found.");
      }
    } 
    catch (error) {
      console.error("Error fetching movies", error);
    }
  };

  const getSelectedVideo = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/videos/${id}?api_key=${apiKey}`);
      setCurrentVideo(response.data);
    } catch (error) {
      console.error("Error fetching movie", error);
    }
  };

  useEffect(() => {
    getVideosList();
  }, []);

  useEffect(() => {
    if (params.id) {
      getSelectedVideo(params.id);
    } else {
      getVideosList();
    }
  }, [params.id]);
  //   console.log(getSelectedVideo("84e96018-4022-434e-80bf-000ce4cd12b8"))

  return (
    <>
      <MainVideo poster={currentVideo.image} video={videos} />
      <div className="info">
        <div className="info-text">
          <DescriptionSection currentVideo={currentVideo} />
          <CommentSection currentVideo={currentVideo}
          />
        </div>
        <div className="info-list">
          <NextVideos dataArray={videos} currentVideo={currentVideo} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
