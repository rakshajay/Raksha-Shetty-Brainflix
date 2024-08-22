import "./HandleUpload.scss";
import Header from "../../components/Header/Header";
import thumbnailImage from "../../assets/Images/Upload-video-preview.jpg";
import murgan from "../../assets/Images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

function HandleUpload() {
  return (
    <div className="upload">
      <h1>Upload Video</h1>
      <div className="upload-sec">
        <div className="upload-sec__img">
          <h2>VIDEO THUMBNAIL</h2>
          <img src={thumbnailImage} alt="image of video preview" />
        </div>
        <div className="upload-sec__text">
          <form>
            <div className="upload-sec__text-title">
              <h2>TITTLE YOUR VIDEO</h2>
              <textarea placeholder="Add a title to your video"></textarea>
            </div>
            <div className="upload-sec__text-comment">
              <h2>ADD A VIDEO DESCRIPTION</h2>
              <textarea placeholder="Add a description to your video"></textarea>
            </div>
          </form>
        </div>
      </div>
      <div className="upload-sec__buttons">
      <button>PUBLISH</button>
        <h2>CANCEL</h2>
         </div>
    </div>
  );
}

export default HandleUpload;
