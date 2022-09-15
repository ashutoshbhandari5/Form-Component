import React from "react";

const Input = ({ id, placeholder, value, type, label }) => {
  return (
    <div className="input-field">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input"
        placeholder={placeholder}
        value={value}
        type={type}
        id={id}
      />
    </div>
  );
};

export default Input;
