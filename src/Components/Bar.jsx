import React, { useState } from "react";
import Color from "./Color";
import Size from "./Size";
import Lang from "./Lang";

function Bar() {
  return (
    <div id="bar">
      <Color />
      <Size />
      <Lang />
    </div>
  );
}

export default Bar;
