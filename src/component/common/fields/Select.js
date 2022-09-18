import React from "react";

const Select = ({ label, id, options, handleChange, value }) => {
  return (
    <>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => handleChange(e.target.value, id)}
      >
        {options.map((option, i) => (
          <option disabled={option.disabled} value={option.group} key={i}>
            {option.group}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
