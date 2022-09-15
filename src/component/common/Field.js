import React from "react";
import Input from "./fields/Input";
import Select from "./fields/Select";

const Field = ({ fields }) => {
  const { type, id, label, placeholder, value, options } = fields;

  const renderComponent = () => {
    switch (type) {
      case "text":
        return (
          <Input
            type={type}
            placeholder={placeholder}
            id={id}
            label={label}
            value={value}
          />
        );

      case "select":
        return (
          <Select
            id={id}
            label={label}
            options={options}
            placeholder={placeholder}
          />
        );

      default:
        return null;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default Field;
