import React from "react";
import ErrorMessage from "./ErrorMessage";

const Input = ({
  id,
  placeholder,
  value,
  type,
  label,
  handleChange,
  errors,
}) => {
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
      />
      {errors[id]?.length > 0 && <ErrorMessage message={errors[id]} />}
    </div>
  );
};

export default Input;
