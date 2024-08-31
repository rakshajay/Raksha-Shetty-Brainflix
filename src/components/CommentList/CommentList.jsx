import "./CommentList.scss";
import TimeAgo from "timeago-react";
import Deleteicon from "../../assets/Icons/Delete-icon.png";

function CommentList({dataArrayComments}) {
  //console.log("dataArrayComments",dataArrayComments);
  const sortedComments = dataArrayComments?.sort((a, b) => b.timestamp - a.timestamp);
  
  return (
    <ul className="comments">
      {sortedComments?.map((comment) => (
        <li key={comment.id} className="comments-section">
          <div className="comments-section__circle">
            <div className="comments-section__circle-color"></div>
          </div>
          <div className="comments-section-info">
            <div className="comments-section__info-tags">
              <h3>{comment.name}</h3>
              <div className="comments-section__info-tags-side">
             <h4><TimeAgo datetime={comment.timestamp} /></h4>
             <img src={Deleteicon} alt="delete icon" />
              </div>
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
