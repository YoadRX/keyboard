import React from "react";
import { useState } from "react";
import "./Btn.css";
const Size = (props) => {
  const sizes = [];
  for (let i = 2; i <= 100; i += 2) {
    sizes.push(i);
  }

  return (
    <div>
      <label htmlFor="sizes">Size </label>
      <select name="sizes" id="sizes" onChange={props.handleSize}>
        {sizes.map((size, index) => (
          <option key={index} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Size;
