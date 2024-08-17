import "./NextVideos.scss";

function NextVideos({handleVideoClick, dataArray}) {
   

    return (
        <section className="gallery">
            <h1 className="gallery-heading">NEXT VIDEOS</h1>
            <div className="gallery-list">
            {dataArray.map((video) => (
                <div onClick={() => handleVideoClick(video.id)}  
                key={video.id} className="gallery-list__item">
                <div className="gallery-list__item-image">
                    <img src={video.image} alt={video.title} />
                </div>
                <div className="gallery-list__item-text">
                    <h2 >{video.title}</h2>
                    <p >{video.channel}</p>
                    </div>
                </div>
            ))}
        </div>
        </section>
    );
}

export default NextVideos;
