import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-dark">
      <a className="navbar-brand" href="/">
        <strong>O Captain, My Captain Memory Game</strong>
      </a>
      <div className="score">
        <p>Score: {props.current}</p><p>Top Score: {props.top}</p></div>
    </nav>
  );
}

export default Nav;
