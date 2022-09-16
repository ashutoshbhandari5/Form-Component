import { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    gender: "",
    phone: "",
  });

  const handleChange = (value, name) => {
    if (value === "Select your gender") {
      return;
    }
    setValues({
      ...values,
      [name]: value,
    });
  };

  return { values, handleChange };
};

export default useForm;
