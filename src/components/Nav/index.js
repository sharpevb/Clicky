import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        O Captain, My Captain Memory Game
      </a>
      <p>Score: {props.current} || Top Score: {props.top}</p>
    </nav>
  );
}

export default Nav;
