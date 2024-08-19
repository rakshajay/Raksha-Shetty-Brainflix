import "./CommentSection.scss";
import murgan from "../../assets/Images/Mohan-muruge.jpg";
import { useState } from "react";

function CommentSection({commentsNumber}) {
   
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const textarea = event.target.querySelector('textarea');
    if (textarea.value.trim() === '') {
      setError(true);
      console.log("Error class applied");
    } else {
      setError(false);
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
          <div><h1>JOIN THE CONVERSATION</h1></div>
          <form onSubmit={handleSubmit} className="comment-content__form" id="myForm">
            <div className={`comment-content__form-text ${error ? 'error' : ''}`}>
              <textarea className="textarea"
                placeholder="Add a new comment"
                required
               ></textarea>
            </div>
            <div className="comment-content__form-button">
              <button type="submit"><h3>COMMENT</h3></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CommentSection;
