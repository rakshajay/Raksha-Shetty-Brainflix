import "./CommentList.scss";
import TimeAgo from "timeago-react";

function CommentList({dataArrayComments}) {

  return (
    <ul className="comments">
      {dataArrayComments?.map((comment) => (
        <li key={comment.id} className="comments-section">
          <div className="comments-section__circle">
            <div className="comments-section__circle-color"></div>
          </div>
          <div className="comments-section-info">
            <div className="comments-section__info-tags">
              <h3>{comment.name}</h3>
              <h4><TimeAgo datetime={comment.timestamp} /></h4>
            </div>
            <div className="comments-section__info-comments">
              <p>{comment.comment}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
