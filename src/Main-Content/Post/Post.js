import React, { useRef } from "react";
import Perfil001 from "../../images/profile001.jpg";
import foto001 from "../../images/facebook-app-interface(inspiração).jpg";

function Post() {
  const btnGosteiRef = useRef(null);
  const btnComentarRef = useRef(null);
  let varGostei = 0;
  let varComentei = 0;

  function deiGostei() {
    if (varGostei === 0) {
      btnGosteiRef.current?.classList.remove("fa-regular");
      btnGosteiRef.current?.classList.add("fa-solid");
      varGostei = 1;
    } else {
      btnGosteiRef.current?.classList.remove("fa-solid");
      btnGosteiRef.current?.classList.add("fa-regular");
      varGostei = 0;
    }
  }

  function Comentei() {
    if (varComentei === 0) {
      btnComentarRef.current?.classList.remove("fa-regular");
      btnComentarRef.current?.classList.add("fa-solid");
      varComentei = 1;
    } else {
      btnComentarRef.current?.classList.remove("fa-solid");
      btnComentarRef.current?.classList.add("fa-regular");
      varComentei = 0;
    }
  }

  return (
    <div id="main__Post">
      <div className="post__Cabecalho">
        <img id="perfil" src={Perfil001} />
        <div>
          <a href="#">[Perfil]</a>
          <p>[Dia] ás [Horas]</p>
        </div>
      </div>
      <p id="post-Descricao">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quis quas
        quasi, exercitationem eaque eligendi sed itaque, asperiores eius dolorem
        ab totam quam modi reprehenderit, neque unde enim! Quos officia
        necessitatibus ducimus eum facilis reiciendis nobis quas, deleniti
        iusto, sunt, sint tenetur eveniet consectetur nihil voluptates
        cupiditate exercitationem quia beatae dolores consequatur suscipit saepe
        unde. Earum porro nulla nostrum quam nesciunt adipisci dolorem, enim
        facere vitae expedita in dolor vel voluptate rem quas voluptatem
        necessitatibus a. Molestias alias consequatur quam atque aut eligendi
        facilis illum eum, fugiat, suscipit adipisci tempore labore perferendis
        quibusdam laudantium aliquid. Quasi quibusdam eaque minus vitae.
      </p>
      <img id="post-foto" src={foto001} />
      <div className="post__Footer">
        <div className="post__Gostei">
          <span
            className="fa-regular fa-thumbs-up"
            id="Gostei"
            ref={btnGosteiRef}
            onClick={deiGostei()}
          />
        </div>
        <div className="post__Comentar">
          <span
            className="fa-regular fa-comment"
            id="Comentar"
            ref={btnComentarRef}
            onClick={Comentei()}
          />
        </div>
      </div>
    </div>
  );
}

export default Post;
