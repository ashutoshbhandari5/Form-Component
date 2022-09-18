import { useState } from "react";
import { validate } from "../utils/validation";

const useForm = () => {
  const [values, setValues] = useState({});
  const [error, setError] = useState({});

  const handleChange = (value, name, validations = []) => {
    setValues({
      ...values,
      [name]: value,
    });

    if (validations.length > 0) {
      const results = validations.map((el) => validate(el, value));
      const isCorrectValue = results.find((el) => el === false);

      if (isCorrectValue === undefined) {
        const currentErrorObj = { ...error };
        currentErrorObj[name] = false;
        setError(currentErrorObj);
      } else {
        setError({
          ...error,
          [name]: true,
        });
      }
    }
  };

  return { values, handleChange, error };
};

export default useForm;
