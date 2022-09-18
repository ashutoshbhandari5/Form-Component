import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const Input = ({
  id,
  placeholder,
  value,
  type,
  label,
  handleChange,
  errorMessage,
  validations,
  error,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="input-field">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input"
        onChange={(e) => handleChange(e.target.value, id, validations)}
        placeholder={placeholder}
        value={value}
        type={type}
        id={id}
        onBlur={() => setFocused(true)}
        focused={focused.toString()}
      />
      {error[id] && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export default Input;
