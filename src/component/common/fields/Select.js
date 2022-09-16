import React from "react";

const Select = ({ label, id, options, handleChange }) => {
  return (
    <>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <select id={id} onChange={(e) => handleChange(e.target.value, id)}>
        {options.map((option, i) => (
          <option value={option.group} key={i}>
            {option.group}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
