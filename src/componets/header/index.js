import React from "react";
import NavMessage from "../navMessage"
import "./style.css";

function Header(props) {
  return (
    <header className="header">
      <h3>
        <ul>
          <div className="currentScore"></div>Score: {props.score}
          <div className="topScore">Top Score: {props.topScore}</div>
          <NavMessage score={props.score} topScore={props.topScore} />
        </ul>
      </h3>
      <div>
        <h3>Rules</h3>
        <p>Click on an image to get 1 point</p>
        <p>Click on the same image twice will reset your points</p>
        <p>Click on all 15 images once to get the highest score</p>
      </div>
    </header>


  );
}

export default Header;
