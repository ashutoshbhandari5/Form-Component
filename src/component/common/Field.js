import React from "react";
import Input from "./fields/Input";
import Select from "./fields/Select";

const Field = ({ fields, handleChange, value, error }) => {
  const {
    type,
    id,
    label,
    placeholder,
    options,
    required,
    validations,
    errorMessage,
    pattern,
  } = fields;

  const renderComponent = () => {
    switch (type) {
      case "text":
      case "password":
        return (
          <Input
            type={type}
            placeholder={placeholder}
            id={id}
            label={label}
            required={required}
            errorMessage={errorMessage}
            pattern={pattern}
            value={value}
            validations={validations}
            handleChange={handleChange}
            error={error}
          />
        );

      case "select":
        return (
          <Select
            id={id}
            label={label}
            options={options}
            value={value}
            placeholder={placeholder}
            handleChange={handleChange}
          />
        );

      default:
        return null;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default Field;
