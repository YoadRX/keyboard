import React from "react";
import { useState } from "react";

const KeyBoard = (props) => {
  const [keys, setKeys] = useState(props.value);
  const values = keys.split("");
  return (
    <>
      <div id="keyboard">
        {values.map((key, index) => (
          <button
            className="keyBtn"
            key={index}
            id={index}
            onClick={() => props.setText(key)}
          >
            {key}
          </button>
        ))}
        <button
          className="keyBtn"
          id="Space"
          onClick={() => props.setText(" ")}
        >
          Space
        </button>
        <button
          className="keyBtn"
          id="Delete"
          onClick={() => props.setText(-1)}
        >
          Delete
        </button>

        <button
          className="keyBtn"
          id="DeleteAll"
          onClick={() => props.setText("All")}
        >
          Delete All
        </button>
        <button
          className="keyBtn"
          id="enter"
          onClick={() => props.setText("\n")}
        >
          Enter
        </button>
      </div>
    </>
  );
};

export default KeyBoard;
