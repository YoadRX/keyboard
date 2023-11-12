import React from "react";
import { useState } from "react";
import "./Btn.css";

const Color = (props) => {
  return (
    <div>
      <label className="">Color</label>
      <div id="color-container">
        <button
          className="colorbtn"
          id="red"
          onClick={() => props.setColor("red")}
        >
          red
        </button>
        <button
          className="colorbtn"
          id="blue"
          onClick={() => props.setColor("blue")}
        >
          blue
        </button>
        <button
          className="colorbtn"
          id="yellow"
          onClick={() => props.setColor("yellow")}
        >
          yellow
        </button>
        <button
          className="colorbtn"
          id="black"
          onClick={() => props.setColor("black")}
        >
          black
        </button>
      </div>
    </div>
  );
};

export default Color;
