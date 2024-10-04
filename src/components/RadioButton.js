import React, { useState } from "react";

const RadioButton = ({ id, name, value, label, onChange, selectedValue }) => {
  return (
    <div className="radio-buttons">
      <input
        id={`radio-${id}`}
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={selectedValue === value}
      />
      <label htmlFor={`radio-${id}`}>
        <div className="radio-buttons-content">
          <p>{label}</p>
        </div>
      </label>
    </div>
  );
};

export default RadioButton;
