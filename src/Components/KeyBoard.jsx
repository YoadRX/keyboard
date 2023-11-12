import React from "react";
import { useState } from "react";

const KeyBoard = ({ value, lang }) => {
  const [keys, setKeys] = useState(value);
  const values = keys.split("");
  return (
    <div>
      {values.map((key, index) => (
        <button key={index} id={index}>
          {key}
        </button>
      ))}
    </div>
  );
};

export default KeyBoard;
