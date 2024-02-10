import React from "react";
import Perfil001 from "../../images/profile001.jpg";

function CreatePost() {
  return (
    <div id="main__Create">
      <div className="main__Create__Header">
        <p><span className="fa-solid fa-pencil" /> Fazer um post</p>
      </div>
      <div className="main__Create__Content">
        <img id="perfil" src={Perfil001} />
        <input
          type="text"
          placeholder="O que você está pensando, PERFIL"
        ></input>
      </div>
      <div className="main__Create__Footer">
        <button><span className="fa-solid fa-image" /> Fotos/Vídeos</button>
        <button><span className="fa-solid fa-face-smile" /> Sentimentos</button>
      </div>
    </div>
  );
}

export default CreatePost;
