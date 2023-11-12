import React from "react";
import { useState } from "react";

export const Lang = (props) => {
  return (
    <div>
      <button type="button">Lang</button>
      <div id="languages-container">
        <button onClick={() => props.setLang("eng")}>English</button>
        <button onClick={() => props.setLang("heb")}>Hebrew</button>
        <button onClick={() => props.setLang("span")}>Spanish</button>
      </div>
    </div>
  );
};

// export default Lang;
