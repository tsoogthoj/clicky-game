import React from "react";
import "./style.css";

function ClickImg(props) {
  return (
    <div
      onClick={() => props.handleClick(props.id)}
      style={{ backgroundImage: `url("${props.image}")` }}
      className={`click-item`}
    />
  );
}

export default ClickImg;
