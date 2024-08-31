import "./UploadPage.scss";
import thumbnailImage from "../../assets/Images/Upload-video-preview.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UploadPage() {
  const baseUrl = import.meta.env.VITE_API_URL;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (title.trim() && description.trim()) {
      try {
        const response = await axios.post(`${baseUrl}/videos`, {
          title: title.trim(),
          description: description.trim(),
        });
        alert("Video Uploaded Successfully");
        setTitle("");
        navigate("/");
      } catch (error) {
        console.error("Error publishing vedio:", error);
        alert("Failed to publish vedio. Please try again.");
      }
    } else {
      setIsSubmitted(true);
      setTimeout(() => {
        alert("Please fill in all fields before submitting");
      }, 0);
    }
  };

  return (
    <div className="upload">
      <h1>Upload Video</h1>
      <div className="upload-sec">
        <div className="upload-sec__img">
          <h2>VIDEO THUMBNAIL</h2>
          <img src={thumbnailImage} alt="image of video preview" />
        </div>
        <div className="upload-sec__text">
          <form onSubmit={handleSubmit}>
            <div className="upload-sec__text-title">
              <h2>TITLE YOUR VIDEO</h2>
              <textarea
                id={`upload-title${
                  isSubmitted && !title.trim() ? "__error" : ""
                }`}
                onChange={handleTitleChange}
                value={title}
                placeholder="Add a title to your video"
              ></textarea>
            </div>
            <div className="upload-sec__text-comment">
              <h2>ADD A VIDEO DESCRIPTION</h2>
              <textarea
                id={`upload-description${
                  isSubmitted && !title.trim() ? "__error" : ""
                }`}
                onChange={handleDescriptionChange}
                value={description}
                placeholder="Add a description to your video"
              ></textarea>
            </div>
            <div className="upload-sec__buttons">
              <button type="submit">PUBLISH</button>
              <Link to="/" className="upload-sec__buttons-link">
                <h2>CANCEL</h2>
              </Link>
              <div id="empty-placehodler"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadPage;
