import React from "react";
import { useState } from "react";

const Size = (props) => {
  const sizes = [];
  for (let i = 2; i <= 100; i += 2) {
    sizes.push(i);
  }

  return (
    <div>
      <label htmlFor="sizes">Size </label>
      <select name="sizes" id="sizes" onChange={props.handleSize}>
        {sizes.map((size) => (
          <option value={size}>{size}</option>
        ))}
      </select>
    </div>
  );
};

export default Size;
