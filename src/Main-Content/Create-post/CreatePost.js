import React from "react";
import Perfil001 from "../../images/profile001.jpg";

function CreatePost() {
  return (
    <div id="main__Create">
      <div className="main__Create__Header">
        <p>
          <span className="fa-solid fa-pencil" /> Fazer um post
        </p>
      </div>
      <div className="main__Create__Content">
        <img id="perfil" src={Perfil001} />
        <textarea
          id="descricao__Post"
          placeholder="O que você está pensando, PERFIL?"
          rows={5}
          maxLength={200}
        />
      </div>
      <div className="main__Create__Footer">
        <div>
          <input
            id="main__Create__fotos-videos"
            className="main__Create__Footer__botao"
            type="file"
          />
          <button className="main__Create__Footer__botao">
            <span className="fa-solid fa-face-smile" /> Sentimentos
          </button>
        </div>
        <input
          type="submit"
          id="btn__Postar"
          className="main__Create__Footer__botao"
          value={"Postar"}
        />
      </div>
    </div>
  );
}

export default CreatePost;
