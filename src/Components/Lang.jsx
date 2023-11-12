import React from "react";
import { useState } from "react";

const Lang = () => {
  return (
    <div>
      <button type="button">Lang</button>
      <div id="languages-container">
        <button>English</button>
        <button>Hebrew</button>
        <button>Spanish</button>
      </div>
    </div>
  );
};

export default Lang;
