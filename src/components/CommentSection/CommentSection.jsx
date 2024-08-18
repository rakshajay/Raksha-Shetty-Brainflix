import "./CommentSection.scss";
import murgan from "../../assets/Images/Mohan-muruge.jpg";

function CommentSection({commentsNumber}) {
  return (
    <section>
        <h4>{commentsNumber} Comments</h4>
      <div className="comment">
        <div className="comment-murgan">
          <img src={murgan} alt="face of murgan" />
        </div>
        <div className="comment-content">
          <div><h1>JOIN THE CONVERSATION</h1></div>
          <form className="comment-content__form" id="myForm">
            <div className="comment-content__form-text">
              <textarea
                placeholder="Add a new comment"
                name="comment"
                id="comment"
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
