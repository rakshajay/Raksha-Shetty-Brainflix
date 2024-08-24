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
   
   // import API data for video streaming and video list
    const [videos, setVideos] = useState([]);
    const [CurrentVideo, setCurrentVideo] = useState({});

    const apiKey = "48390e4e-7f0d-4873-bfad-a07caf2a5577";
    const url = "https://unit-3-project-api-0a5620414506.herokuapp.com";

    const params = useParams();
  
    const getVideosList = async () => {
      try {
        const response = await axios.get(`${url}/videos?api_key=${apiKey}`);
        const videos = response.data;
    
        if (videos && videos.length > 0) {
          setVideos(videos);
    
          if (params.id) {
            getSelectedVideo(params.id);
          } else {
            getSelectedVideo(videos[0].id);
          }
        } else {
          console.error("No videos found.");
        }
      } catch (error) {
        console.error("Error fetching movies", error);
      }
    };
    
    const getSelectedVideo = async (id) => {
      try {
        const response = await axios.get(`${url}/videos/${id}?api_key=${apiKey}`);
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
      <MainVideo poster={CurrentVideo.image} video={videos} />
      <div className="info">
        <div className="info-text">
          <DescriptionSection
            CurrentVideo={CurrentVideo}
          />
          <CommentSection commentsNumber={CurrentVideo.comments?.length} />
          <CommentList dataArrayComments={CurrentVideo.comments} />
        </div>
        <div className="info-list">
          <NextVideos
            dataArray={videos}
            CurrentVideo={CurrentVideo}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
