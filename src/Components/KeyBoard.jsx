import React from "react";
import { useState } from "react";

const KeyBoard = ({ value, lang }) => {
  const keys = value.split("");
  return (
    <div>
      {keys.forEach((element) => (
        <button>{element}</button>
      ))}
    </div>
  );
};

export default KeyBoard;
