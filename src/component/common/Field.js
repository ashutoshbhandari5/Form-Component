import React from "react";
import Input from "./fields/Input";
import Select from "./fields/Select";

const Field = ({ fields, handleChange, values, errors }) => {
  const { type, id, label, placeholder, options } = fields;

  const renderComponent = () => {
    switch (type) {
      case "text":
      case "password":
        return (
          <Input
            errors={errors}
            type={type}
            placeholder={placeholder}
            id={id}
            label={label}
            value={values["id"]}
            handleChange={handleChange}
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
