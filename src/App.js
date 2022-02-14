import { useState } from "react";
import "./App.css";
import AllComments from "./comments/AllComments";
import Post from "./comments/Post";

function App() {
  const data = {
    post: {
      id: 1,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      user: "John Doe",
      userPic: "https://assets.codepen.io/285131/hat-man.png",
      publishDate: "2 Weeks ago",
      likes: 18,
      commentsNumber: 3,
    },
    comments: [
      {
        id: 0,
        user: "Bonorum Doe",
        content:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        userPic: "https://assets.codepen.io/285131/winking-girl.png",
        publishDate: "2 days ago",
      },
      {
        id: 1,
        user: "Cicero Areals",
        content:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
        userPic: "https://assets.codepen.io/285131/smiling-girl.png",
        publishDate: "4 days ago",
      },
      {
        id: 2,
        user: "Hanna Pages",
        content:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        userPic: "https://assets.codepen.io/285131/hat-man.png",
        publishDate: "1 Week ago",
      },
    ],
  };

  const [commentsList, setCommentsList] = useState(data.comments);

  const AddNewComment = (newComment) => {
    commentsList.push(newComment);
    setCommentsList([...commentsList]);
  };

  return (
    <div className="commentBox">
      <Post
        data={data}
        AddNewComment={AddNewComment}
        commentsList={commentsList}
      />
      <AllComments comments={commentsList} />
    </div>
  );
}

export default App;
