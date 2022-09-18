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

    console.log(validations);

    if (validations.length > 0) {
      console.log(validations);
      const results = validations.map((el) => validate(el, value));
      console.log(results);
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
