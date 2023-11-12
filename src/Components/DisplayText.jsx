import React from "react";
import { useState } from "react";

const DisplayText = (props) => {
  return (
    <div id="textContainer">
      {props.text.map((item, index) => (
        <span
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
    </div>
  );
};

export default DisplayText;
