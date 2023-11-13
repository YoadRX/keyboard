import React from "react";
import { useState } from "react";

const DisplayText = (props) => {
  return (
    <div id="textContainer">
      {props.text.map((item, index) => (
        <span
          className="letter"
          key={index}
          style={{
            color: item.color,
            fontSize: `${item.size}px`,
            whiteSpace: "pre",
          }}
        >
          {item.char}
        </span>
      ))}
      <span
        id="line"
        style={{
          fontSize: `${props.text[props.text.length - 1]?.size || 12}px`,
        }}
      >
        |
      </span>
    </div>
  );
};

export default DisplayText;
