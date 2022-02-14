import React, { useState } from "react";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import CreateComment from "./CreateComment";

const Post = ({ data, AddNewComment, commentsList }) => {
  const [like, setLike] = useState(false);
  const [nbrLike, setNbrLike] = useState(data.post.likes);

  return (
    <div className="post">
      <div className="postBody">
        <img src={data.post.userPic} className="postPic" alt="user Pic" />
        <div className="postContent">
          <div className="postHeader">
            <h2 className="postAuthor" id={data.post.id}>
              {data.post.user}
            </h2>
            <span className="publishDate">{data.post.publishDate}</span>
          </div>
          <span className="postText">{data.post.content}</span>
          <div className="postDesc">
            <span className="desc">
              {like ? (
                <FaHeart
                  className="icon"
                  onClick={() => {
                    setLike(false);
                    setNbrLike(nbrLike - 1);
                  }}
                />
              ) : (
                <FaRegHeart
                  className="icon"
                  onClick={() => {
                    setLike(true);
                    setNbrLike(nbrLike + 1);
                  }}
                />
              )}
              <span>{nbrLike} </span>
              Likes
            </span>
            <span className="desc">
              <FaRegComment className="icon" />
              <span>{commentsList.length}</span> Comments
            </span>
          </div>
        </div>
      </div>
      <CreateComment data={data} AddNewComment={AddNewComment} />
    </div>
  );
};

export default Post;
