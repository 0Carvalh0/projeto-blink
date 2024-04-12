import React from "react";
import "./toolBar.css";

function ToolBar() {
  return (
    <aside className="toolBar">
      <button className="fa-solid fa-house aside__Button"></button>
      <button className="fa-solid fa-user aside__Button"></button>
    </aside>
  );
}

export default ToolBar;
