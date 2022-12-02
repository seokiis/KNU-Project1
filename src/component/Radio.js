import React from "react";

function Radio({ children, value, name, defaultChecked, disabled }) {
  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      {name}
      {value}
    </label>
  );
}

export default Radio;
