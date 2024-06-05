import React from "react";

function Input({ handleChange, value, title, name, color }) {
  return (
    <div className="inputs">
      <input
        onChange={(e) => handleChange(e)}
        type="radio"
        value={value}
        name={name}
      />
      <span className="category-title" style={{ backgroundColor: color }}>
        {title}
      </span>
    </div>
  );
}

export default Input;
