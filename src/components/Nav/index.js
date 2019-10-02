import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Oh Captain, My Captain Memory Game
      </a>
      <p>Score:   || Top Score:</p>
    </nav>
  );
}

export default Nav;
