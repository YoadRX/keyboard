import React from "react";
import { useState } from "react";

const KeyBoard = (props) => {
  const [keys, setKeys] = useState(props.value);
  const values = keys.split("");
  return (
    <div id="keyboard">
      {values.map((key, index) => (
        <button key={index} id={index} onClick={() => props.setText(key)}>
          {key}
        </button>
      ))}
    </div>
  );
};

export default KeyBoard;
