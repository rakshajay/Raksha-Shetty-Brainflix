import "./CommentSection.scss";
import murgan from "../../assets/Images/Mohan-muruge.jpg";
import { useState } from "react";
import axios from "axios";
import { apiKey, baseUrl } from "../../utils";
import CommentList from "../CommentList/CommentList";

function CommentSection({currentVideo}) {
  
  const { comments, id, length } = currentVideo;

  const [inputComment, setInputComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [commentsData, setCommentsData] = useState(comments);

  const handleInputComment = (event) => {
    setInputComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inputComment.trim()) {
      try {
        const response = await axios.post(
          `${baseUrl}/videos/${id}/comments?api_key=${apiKey}`,
          {
            name: "No name",
            comment: inputComment.trim(),
          }
        );
        alert("Comment Submitted");

        setCommentsData((prevCommentsData) => [response.data,...prevCommentsData]);
        setInputComment("");
      } catch (error) {
        console.error("Error submitting comment:", error);
        alert("Failed to submit comment. Please try again.");
      }
    } else {
      setIsSubmitted(true);
      setTimeout(() => {
        alert("Please fill the comment section before submitting");
      }, 0);
    }
  };

  return (
    <section>
      <h4>{length} Comments</h4>
      <div className="comment">
        <div className="comment-murgan">
          <img src={murgan} alt="face of murgan" />
        </div>
        <div className="comment-content">
          <div>
            <h1>JOIN THE CONVERSATION</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="comment-content__form"
            id="myForm"
          >
            <div
              className={`comment-content__form-text${
                isSubmitted && !inputComment.trim() ? "__error" : ""
              }`}
            >
              <textarea
                onChange={handleInputComment}
                value={inputComment}
                placeholder="Add a new comment"
              ></textarea>
            </div>
            <div className="comment-content__form-button">
              <button type="submit">
                <h3>COMMENT</h3>
              </button>
            </div>
          </form>
        </div>
      </div>
      <CommentList dataArrayComments={commentsData} />
    </section>
  );
}

export default CommentSection;
