import React, { useState } from "react";
import postImage from "../../images/_ad55e2cc-b6d9-4c71-8d37-5b477fa6fbc4.jpg";
import profile01 from "../../images/logo001-pequena.png";
import "./postContent.css";

function PostContent() {
  const [liked, setLiked] = useState(false);

  function toggleLike(e) {
    if (liked) {
      e.target.style.background = "var(--colorwhite)";
      e.target.style.color = "var(--colorblack)";
    } else {
      e.target.style.background = "var(--color03)";
      e.target.style.color = "var(--colorwhite)";
    }
    setLiked(!liked);
  }

  return (
    <section className="container__Post">
      <img className="main__ProfileImage" src={profile01} alt="Profile Image" />
      <p className="main__PostDescription"></p>
      <img className="main__PostImage" src={postImage} alt="Post Image" />
      <button className="main__Button" id="btnLike" onClick={toggleLike}>
        <i className={`fa-${liked ? 'solid' : 'regular'} fa-thumbs-up`}></i> Gostei
      </button>
    </section>
  );
}

export default PostContent;
