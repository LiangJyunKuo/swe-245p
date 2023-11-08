import "./Sidebar.css";
import React from "react";

function Sidebar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/eat">EAT</a>
          </li>
          <li>
            <a href="/sleep">SLEEP</a>
          </li>
          <li>
            <a href="/travel">TRAVEL</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
