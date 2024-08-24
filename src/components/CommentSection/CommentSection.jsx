import "./CommentSection.scss";
import murgan from "../../assets/Images/Mohan-muruge.jpg";
import { useState } from "react";

function CommentSection({ commentsNumber }) {
  const [inputComment, setInputComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputComment = (event) => {
    setInputComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    if (inputComment.trim()) {
      alert("Comment Submitted");
    } else {
      setIsSubmitted(true);
      setTimeout(() => {
        alert("Please fill the comment section before submitting");
      }, 0);
    }
  };

  return (
    <section>
      <h4>{commentsNumber} Comments</h4>
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
            <div className={`comment-content__form-text${isSubmitted && !inputComment.trim() ? "__error" : ""}`}>
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
    </section>
  );
}

export default CommentSection;
