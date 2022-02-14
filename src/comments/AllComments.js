import React from "react";
import Comment from "./Comment";

function AllComments({ comments }) {
  return (
    <div>
      {comments.length > 0 &&
        comments.map((value, i) => <Comment key={i} comment={value} />)}
    </div>
  );
}

export default AllComments;
