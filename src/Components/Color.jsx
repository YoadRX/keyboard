import React from "react";
import { useState } from "react";

const Color = (props) => {
  return (
    <div>
      <button>Color</button>
      <div id="color-container">
        <button onClick={() => props.setColor("red")}>red</button>
        <button onClick={() => props.setColor("blue")}>blue</button>
        <button onClick={() => props.setColor("yellow")}>yellow</button>
        <button onClick={() => props.setColor("black")}>black</button>
      </div>
    </div>
  );
};

export default Color;
