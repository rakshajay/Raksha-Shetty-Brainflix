import { useState,useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import "./HomePage.scss";
import Header from "../../../components/Header/Header";
import MainVideo from "../../../components/Video/MainVideo";
import DescriptionSection from "../../../components/DescriptionSection/DescriptionSection";
import CommentSection from "../../../components/CommentSection/CommentSection";
import CommentList from "../../../components/CommentList/CommentList";
import NextVideos from "../../../components/NextVideos/NextVideos";


function HomePage() {
    const [videos, setVideos] = useState([]);
    const [CurrentVideo, setCurrentVideo] = useState({});

    const apiKey = "48390e4e-7f0d-4873-bfad-a07caf2a5577";
    const url = "https://unit-3-project-api-0a5620414506.herokuapp.com";

    const params = useParams();
  
    const getVideosList = async () => {
      try {
        const videos = await axios.get(`${url}/videos?api_key=${apiKey}`);
       console.log(videos.data[0].id);
        setVideos(videos.data);
      } catch (error) {
        console.error("Error fetching movies", error);
      }

      if (params.id) {
        getSelectedVideo(params.id);
      } else {
        getSelectedVideo("84e96018-4022-434e-80bf-000ce4cd12b8");
      }
    };

    const getSelectedVideo = async (id) => {
        try {
          const video = await axios.get(`${url}/videos/${id}?api_key=${apiKey}`);
          console.log(video.data);
          setCurrentVideo(video.data);
        } catch (error) {
          console.error("Error fetching movies", error);
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


  const handleVideoClick = (id) => {
    const foundVideo = videos.find((video) => video.id === id);
    setCurrentVideo(foundVideo);
  };

  return (
    <>
      <MainVideo poster={CurrentVideo.image} video={CurrentVideo.video} />
      <div className="info">
        <div className="info-text">
          <DescriptionSection
            description={CurrentVideo.description}
            title={CurrentVideo.title}
            channel={CurrentVideo.channel}
            views={CurrentVideo.views}
            likes={CurrentVideo.likes}
            timestamp={new Date(CurrentVideo.timestamp).toLocaleDateString()}
          />
          <CommentSection commentsNumber={CurrentVideo.comments?.length} />
          <CommentList dataArrayComments={CurrentVideo.comments} />
        </div>
        <div className="info-list">
          <NextVideos
            dataArray={videos}
            handleVideoClick={handleVideoClick}
            CurrentVideo={CurrentVideo}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
