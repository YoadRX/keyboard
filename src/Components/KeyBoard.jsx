import React from "react";
import { useState } from "react";

const KeyBoard = ({ value, lang }) => {
  const [keys, setKeys] = useState(value);
  const values = keys.split("");
  return (
    <>
      <div>
        {values.map((key, index) => (
          <button key={index} id={index}>
            {key}
          </button>
        ))}
        <button id="Space">Space</button>
        <button id="Delete">Delete</button>
      </div>
    </>
  );
};

export default KeyBoard;
