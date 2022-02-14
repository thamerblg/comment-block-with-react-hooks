import React, { useState } from "react";
import "../App.css";

const CreateComment = ({ AddNewComment }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: Math.random(),
      user: "Anonym",
      content: content,
      userPic:
        "https://github.com/OlgaKoplik/CodePen/blob/master/anonym.png?raw=true",
      publishDate: "Right now",
    };
    AddNewComment(newComment);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="createComment">
      <label htmlFor="comment">Your Comment</label>
      <textarea
        id="comment"
        type="text"
        placeholder="Comment"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default CreateComment;
