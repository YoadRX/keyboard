import React, { useState } from "react";
import "./Btn.css";
const KeyBoard = (props) => {
  const [keys, setKeys] = useState(props.value);
  const [booleanToggle, setBooleanToggle] = useState(false);
  let values = props.value.split("");
  // console.log(values);
  function toggleCaps() {
    setBooleanToggle(!booleanToggle);
  }

  return (
    <>
      <div id="keyboard">
        {values.map((char, index) => (
          <button
            className="keyBtn button-28 "
            key={index}
            id={index}
            onClick={() => {
              if (!booleanToggle) {
                props.setText(char);
              } else {
                props.setText(char.toUpperCase());
              }
            }}
          >
            {char}
          </button>
        ))}
        <button
          className="keyBtn button-28"
          id="Space"
          onClick={() => props.setText(" ")}
        >
          Space
        </button>
        <button
          className="keyBtn button-28"
          id="Delete"
          onClick={() => props.setText(-1)}
        >
          Delete
        </button>
        <button onClick={toggleCaps} className="keyBtn button-28" id="CapsLock">
          Caps Lock
        </button>
        <button
          className="keyBtn button-28"
          id="DeleteAll"
          onClick={() => props.setText("All")}
        >
          Delete All
        </button>
        <button
          className="keyBtn button-28"
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
