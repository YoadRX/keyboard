import React from "react";
import { useState } from "react";

const DisplayText = (props) => {
  const textStyle = {
    color: `${props.color}`,
    fontSize: `${props.size}px`,
    whiteSpace: "pre",
  };
  return (
    <div id="textContainer" style={textStyle}>
      {props.text}
    </div>
  );
};

export default DisplayText;
