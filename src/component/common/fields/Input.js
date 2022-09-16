import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const Input = ({
  id,
  placeholder,
  value,
  type,
  label,
  handleChange,
  required,
  errorMessage,
  pattern,
  fields,
}) => {
  const [focused, setFocused] = useState(false);

  const inputRequired = required === "true" ? true : false;
  return (
    <div className="input-field">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input"
        onChange={(e) => handleChange(e.target.value, id)}
        placeholder={placeholder}
        value={value}
        type={type}
        id={id}
        required={inputRequired}
        onBlur={() => setFocused(true)}
        focused={focused.toString()}
        pattern={pattern}
      />
      <ErrorMessage message={errorMessage} />
    </div>
  );
};

export default Input;
