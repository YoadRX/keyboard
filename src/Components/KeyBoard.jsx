import React from "react";
import { useState } from "react";

const KeyBoard = ({ value, lang }) => {
  const [keys, setKeys] = useState(value);
  const values = keys.split("");
  return (
    <>
      <div id="keyboard">
        {values.map((key, index) => (
          <button className="keyBtn" key={index} id={index}>
            {key}
          </button>
        ))}
        <button className="keyBtn" id="Space">
          Space
        </button>
        <button className="keyBtn" id="Delete">
          Delete
        </button>
      </div>
    </>
  );
};

export default KeyBoard;
