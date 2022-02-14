import React from "react";
import "../App.css";

function Comment({ comment }) {
  return (
    <div className="comment">
      <img src={comment.userPic} className="commentPic" alt="user Pic" />
      <div className="commentBody">
        <div className="commentHeader">
          <h3 className="commentAuthor">{comment.user}</h3>
          <span className="publishDate">{comment.publishDate}</span>
        </div>
        <span className="commentContent">{comment.content}</span>
      </div>
    </div>
  );
}

export default Comment;
