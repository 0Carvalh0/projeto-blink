import React from "react";
import "./Header.css";
import Logo001 from "../images/logo001-pequena.png";
import Perfil001 from "../images/logo001-pequena.png";

function Header() {
  return (
    <header>
      <div>
        <img src={Logo001} />
        <input type="text" placeholder="Buscar"></input>
        <label className="fa-solid fa-magnifying-glass"></label>
      </div>

      <div>
        <div>
          <img src={Perfil001} />
          <p>Nome</p>
        </div>
        <div>
          <p>Inicio</p>
        </div>
        <div>
          <p>Achar Amigos</p>
        </div>
        <span className="fa-solid fa-user-group"></span>
        <span className="fa-solid fa-gear"></span>
      </div>
    </header>
  );
}

export default Header;
