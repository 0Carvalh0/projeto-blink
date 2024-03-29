import React from "react";
import "./Header.css";
import Logo001 from "../images/logo001-pequena.png";
import Perfil001 from "../images/profile001.jpg";

function Header() {
  return (
    <header>
      <div id="cantoEsquerdo">
        <img src={Logo001} />
        <div className="header__input">
          <input type="text" placeholder="Buscar"></input>
          <label className="fa-solid fa-magnifying-glass"></label>
        </div>
      </div>

      <div id="cantoDireito">
        <div id="nome">
          <img id="perfil" src={Perfil001} />
          <a href="#">Perfil</a>
        </div>
        <div id="inicio">
          <a href="#">Inicio</a>
        </div>
        <div id="amigos">
          <a href="#">Achar Amigos</a>
        </div>
        <div className="fa-solid fa-user-group"></div>
        <div className="header__settings">
          <div className="fa-solid fa-gear"></div>
          <div className="fa-solid fa-caret-down"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
