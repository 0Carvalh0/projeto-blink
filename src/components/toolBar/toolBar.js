import React from "react";
import "./toolBar.css";

function ToolBar() {
  return (
    <menu className="toolBar">
      <button className="fa-solid fa-house menu__Button"></button>
      <button className="fa-solid fa-user menu__Button"></button>
    </menu>
  );
}

export default ToolBar;
