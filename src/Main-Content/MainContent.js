import React from "react";
import "./MainContent.css";
import CreatePost from "./Create-post/CreatePost.js"
import Post from "./Post/Post.js"

function MainContent() {
  return <main>
    <CreatePost />
    <Post />
  </main>
}

export default MainContent;