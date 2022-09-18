import React, { useEffect, useState } from "react";
import formSchema from "../../utils/form.json";
import Field from "../common/Field";
import useForm from "../../hooks/useForm";

const FormComponent = () => {
  const [formElements, setFormElements] = useState({});
  const { values, handleChange, error } = useForm();

  useEffect(() => {
    setFormElements(formSchema);
  }, [formElements]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <div className="form-component">
      <h3>{formElements.heading}</h3>
      <form type="submit" className="registration-form">
        {Object.keys(formElements).length === 0
          ? "Form field does not exist"
          : formElements.fields.map((item, i) => (
              <Field
                values={values}
                handleChange={handleChange}
                key={i}
                error={error}
                fields={item}
              />
            ))}
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
