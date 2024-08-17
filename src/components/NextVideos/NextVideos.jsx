import "./NextVideos.scss";

function NextVideos({handleVideoClick, dataArray, currentVideoID}) {

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
