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
  const [errors, setError] = useState({});

  const validation = (value, name) => {
    switch (name) {
      case "name":
        if (value.length === 0 || value.length < 4) {
          setError({
            errors,
            [name]: "Name characters must be greater than or equal to 4",
          });
        } else {
          delete errors[name];
        }
        break;

      case "password":
        //example TestMe@123
        if (
          !new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
          ).test(value)
        ) {
          setError({
            errors,
            [name]: "Password must be valid",
          });
        } else {
          delete errors[name];
        }
        break;

      case "email":
        //example john@example.com
        if (
          !value.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ) {
          setError({
            errors,
            [name]: "Email must be valid",
          });
        } else {
          delete errors[name];
        }
        break;

      case "address":
        if (value.length === 0 || value.length < 5) {
          setError({
            errors,
            [name]: "Address characters must be greater than or equal to 5",
          });
        } else {
          delete errors[name];
        }
        break;

      case "phone":
        if (value.length < 10 || value.length > 10) {
          setError({
            errors,
            [name]: "Contact number must equal to 10",
          });
        } else {
          delete errors[name];
        }
        break;

      default:
        return errors;
    }
  };

  const handleChange = (value, name) => {
    if (value === "Select your gender") {
      return;
    }
    setValues({
      ...values,
      [name]: value,
    });
    validation(value, name);
  };

  return { values, handleChange, errors };
};

export default useForm;
