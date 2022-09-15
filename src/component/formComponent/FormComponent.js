import React, { useEffect, useState } from "react";
import formSchema from "../../utils/form.json";
import Field from "../common/Field";

const FormComponent = () => {
  const [formElements, setFormElements] = useState({});

  useEffect(() => {
    setFormElements(formSchema);
  }, [formElements]);

  return (
    <div className="form-component">
      <h3>{formElements.heading}</h3>
      <form className="registration-form">
        {Object.keys(formElements).length === 0
          ? "Form field does not exist"
          : formElements.fields.map((item, i) => (
              <Field key={i} fields={item} />
            ))}
      </form>
    </div>
  );
};

export default FormComponent;
