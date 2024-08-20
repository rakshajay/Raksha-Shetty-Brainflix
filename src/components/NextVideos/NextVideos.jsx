import "./NextVideos.scss";
import axios from "axios";
import { useState,useEffect } from "react";

function NextVideos({handleVideoClick, dataArray, currentVideoID}) {

    const [videos, setVideos]= useState([]);

    const apiKey ="48390e4e-7f0d-4873-bfad-a07caf2a5577";
    const url= "https://unit-3-project-api-0a5620414506.herokuapp.com";


    const getVideosList = async() =>{
        try {
            const response = await axios.get(`${url}/videos?api_key=${apiKey}` );
            console.log(response.data)
            setVideos(response.data)
        }
        catch (error){
          console.error("Error fetching movies", error)
        }
    };

    useEffect(()=>{
        getVideosList();
   },[]);

   

    return (
        <section className="gallery">
            <h1 className="gallery-heading">NEXT VIDEOS</h1>
            <ul className="gallery-list">
            {dataArray.filter((video) => video.id !== currentVideoID)
            .map((video) => (
                <li onClick={() => handleVideoClick(video.id)}  
                key={video.id} className="gallery-list__item">
                <div className="gallery-list__item-image">
                    <img src={video.image} alt={video.title} />
                </div>
                <div className="gallery-list__item-text">
                    <h2 >{video.title}</h2>
                    <p >{video.channel}</p>
                    </div>
                </li>
            ))}
        </ul>
        </section>
    );
}

export default NextVideos;
