import React from "react";
import Perfil001 from "../../images/profile001.jpg";
import foto001 from "../../images/facebook-app-interface(inspiração).jpg"

function Post() {
  return (
    <div id="main__Post">
      <div className="post__Cabecalho">
        <img id="perfil" src={Perfil001} />
        <div>
          <a href="#">[Perfil]</a>
          <p>[Dia] ás [Horas]</p>
        </div>
      </div>
      <p id="post-Descricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quis quas quasi, exercitationem eaque eligendi sed itaque, asperiores eius dolorem ab totam quam modi reprehenderit, neque unde enim! Quos officia necessitatibus ducimus eum facilis reiciendis nobis quas, deleniti iusto, sunt, sint tenetur eveniet consectetur nihil voluptates cupiditate exercitationem quia beatae dolores consequatur suscipit saepe unde. Earum porro nulla nostrum quam nesciunt adipisci dolorem, enim facere vitae expedita in dolor vel voluptate rem quas voluptatem necessitatibus a. Molestias alias consequatur quam atque aut eligendi facilis illum eum, fugiat, suscipit adipisci tempore labore perferendis quibusdam laudantium aliquid. Quasi quibusdam eaque minus vitae.</p>
      <img id="post-foto" src={foto001} />
    </div>
  );
}

export default Post;
