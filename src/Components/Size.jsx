import React from "react";
import { useState } from "react";
import "./Btn.css";
const Size = (props) => {
  const sizes = [];
  for (let i = 2; i <= 100; i += 2) {
    sizes.push(i);
  }

  console.log(props.size);
  return (
    <div>
      <label htmlFor="sizes">Size </label>
      <select
        value={props.size}
        name="sizes"
        id="sizes"
        onChange={props.handleSize}
      >
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
