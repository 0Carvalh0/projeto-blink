import React from "react";
import CreatePost from "./Create-post/CreatePost.js";
import Post from "./Post/Post.js";
import "./MainContent.css";

function MainContent() {
  return (
    <main>
      <CreatePost />
      <Post />
    </main>
  );
}

export default MainContent;
