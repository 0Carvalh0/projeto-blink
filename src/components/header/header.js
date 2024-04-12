import React from "react";
import "./header.css"
import logo01 from "../../images/logo001-pequena.png";

function Header() {
  return (
    <header className="header">
      <img className="logoBlink" src={logo01}></img>
    </header>
  );
}

export default Header;
