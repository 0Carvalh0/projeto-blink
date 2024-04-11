import React from "react";
import foto001 from "../../images/facebook-app-interface(inspiração).jpg";
import Perfil001 from "../../images/profile001.jpg";

function Post() {
  const dataehora = document.getElementById("dataehora");
  let horas = new Date().getHours();
  let minutos = new Date().getMinutes();
  let dia = new Date().getDay();
  let mes = new Date().getMonth();

  function time() {
    if (horas < 10) {
      horas = "0" + horas;
    }
    if (minutos < 10) {
      minutos = "0" + minutos;
    }

    dataehora.innerHTML = `${dia}/${mes} ás ${horas}:${minutos}`;
  }

  return (
    <div id="main__Post">
      <div className="post__Cabecalho">
        <img id="perfil" src={Perfil001} />
        <div>
          <a href="#">[Perfil]</a>
          <p id="dataehora"></p>
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
          <span className="fa-regular fa-thumbs-up" id="Gostei" />
        </div>
        <div className="post__Comentar">
          <span className="fa-regular fa-comment" id="Comentar" />
        </div>
      </div>
    </div>
  );
}

export default Post;
