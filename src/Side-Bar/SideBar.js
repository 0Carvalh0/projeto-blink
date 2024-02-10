import React from "react";
import "./SideBar.css";
import Perfil001 from "../images/profile001.jpg";

function SideBar() {
  return (
    <aside>
      <div className="sidebar__profile">
        <img id="perfil" src={Perfil001} />
        <a href="#">Perfil</a>
      </div>
      <ul className="sidebar__01">
        <li>
          <div><span className="fa-solid fa-newspaper" /> Feed</div>
          <span className="fa-solid fa-ellipsis" />
        </li>
        <li>
          <div><span className="fa-brands fa-rocketchat" /> Chat</div>
          <span className="fa-solid fa-ellipsis" />
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
