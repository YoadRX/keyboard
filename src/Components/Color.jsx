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
          onClick={() => props.handleColor("red")}
        >
          red
        </button>
        <button
          className="colorbtn"
          id="blue"
          onClick={() => props.handleColor("blue")}
        >
          blue
        </button>
        <button
          className="colorbtn"
          id="yellow"
          onClick={() => props.handleColor("yellow")}
        >
          yellow
        </button>
        <button
          className="colorbtn"
          id="black"
          onClick={() => props.handleColor("black")}
        >
          black
        </button>
      </div>
    </div>
  );
};

export default Color;
