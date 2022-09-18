import React from "react";
import Input from "./fields/Input";
import Select from "./fields/Select";

const Field = ({ fields, handleChange, values, error }) => {
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
            value={values["id"]}
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
            value={values["id"]}
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
