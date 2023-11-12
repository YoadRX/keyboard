import React from "react";
import { useState } from "react";

const KeyBoard = ({ value, lang }) => {
  const keys = value.split("");

  return (
    <div id="keyboard">
      {keys.map((key, index) => (
        <button id={index} onClick={}>{key}</button>
      ))}
    </div>
  );
};

export default KeyBoard;
