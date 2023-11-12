import React, { useState } from "react";

const KeyBoard = (props) => {
  const [keys, setKeys] = useState(props.value);
  const [booleanToggle, setBooleanToggle] = useState(false);
  let values = keys.split("");

  function toggleCaps() {
    setBooleanToggle(!booleanToggle);
  }

  return (
    <>
      <div id="keyboard">
        {values.map((key, index) => (
          <button
            className="keyBtn"
            key={index}
            id={index}
            onClick={() => {
              if (booleanToggle) {
                props.setText(key);
              } else {
                props.setText(key.toUpperCase());
              }
            }}
          >
            {key}
          </button>
        ))}
        <button className="keyBtn" id="Space">
          Space
        </button>
        <button className="keyBtn" id="Delete">
          Delete
        </button>
        <button onClick={toggleCaps} className="keyBtn" id="CapsLock">
          Caps Lock
        </button>
      </div>
    </>
  );
};

export default KeyBoard;
