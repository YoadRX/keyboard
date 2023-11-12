import React from "react";
import { useState } from "react";

const DisplayText = (props) => {
  return (
    <div id="textContainer">
      {props.text}
      {/* {"aaa\naaaa"} */}
    </div>
  );
};

export default DisplayText;
