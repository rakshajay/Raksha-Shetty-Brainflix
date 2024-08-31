import "./CommentList.scss";
import TimeAgo from "timeago-react";
import Deleteicon from "../../assets/Icons/Delete-icon.png";
import axios from "axios";
import { useEffect, useState } from "react";

function CommentList({ commentsData, currentVideo }) {
  const [sortedCommentsList, setSortedCommentsList] = useState([]);

  const sortedComments = commentsData?.sort((a, b) => b.timestamp - a.timestamp);

  useEffect(() => {
    setSortedCommentsList(sortedComments);
  }, [commentsData]);

  const baseUrl = import.meta.env.VITE_API_URL;

  // Function to handle the deletion of a comment
  const handleDelete = async (commentId) => {
    try {
      const response = await axios.delete(`${baseUrl}/videos/${currentVideo.id}/comments/${commentId}`);
      if (response.status === 200) {
        setSortedCommentsList((prevComments) =>
          prevComments.filter((comment) => comment.id !== commentId)
        );
        console.log("Comment deleted successfully:", response.data);
      } else {
        console.error("Failed to delete the comment");
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <ul className="comments">
      {sortedCommentsList?.map((comment) => (
        <li key={comment.id} className="comments-section">
          <div className="comments-section__circle">
            <div className="comments-section__circle-color"></div>
          </div>
          <div className="comments-section-info">
            <div className="comments-section__info-tags">
              <h3>{comment.name}</h3>
              <div className="comments-section__info-tags-side">
                <h4><TimeAgo datetime={comment.timestamp} /></h4>
                <img
                  onClick={() => handleDelete(comment.id)} 
                  src={Deleteicon}
                  alt="delete icon"
                  className="delete-icon" 
                />
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
