import React from "react";
import { useState } from "react";
import "./Btn.css";

export const Lang = (props) => {
  return (
    <div>
      <label className="" type="button">
        Language
      </label>
      <div id="languages-container">
        <button className="colorbtn" onClick={() => props.handleLang("eng")}>
          English
        </button>
        <button className="colorbtn" onClick={() => props.handleLang("heb")}>
          Hebrew
        </button>
        <button className="colorbtn" onClick={() => props.handleLang("rus")}>
          Russian
        </button>
        <button className="colorbtn" onClick={() => props.setLang("arb")}>
          Arabic
        </button>
        <button className="colorbtn" onClick={() => props.setLang("jap")}>
          Japanese
        </button>
      </div>
    </div>
  );
};

// export default Lang;
