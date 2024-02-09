import React from "react";
import "./Header.css";
import Logo001 from "../images/logo001-pequena.png";
import Perfil001 from "../images/logo001-pequena.png";

function Header() {
  return (
    <header>
      <div id="cantoEsquerdo">
        <img src={Logo001} />
        <input type="text" placeholder="Buscar"></input>
        <label className="fa-solid fa-magnifying-glass"></label>
      </div>

      <div id="cantoDireito">
        <div id="nome">
          <img id="perfil" src={Perfil001} />
          <p>Nome</p>
        </div>
        <div id="inicio">
          <p>Inicio</p>
        </div>
        <div id="amigos">
          <p>Achar Amigos</p>
        </div>
        <div className="fa-solid fa-user-group"></div>
        <div className="fa-solid fa-gear"></div>
      </div>
    </header>
  );
}

export default Header;
