import { useState, useEffect } from "react";
import UIValidation from "./UIValidation";

const usePage = (submitPage) => {
  const customers =
    localStorage.getItem("CUSTOMERS") !== null
      ? JSON.parse(localStorage.getItem("CUSTOMERS"))
      : [];
  const [names, setNames] = useState({
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    repassword: "",
  });

  const [uiErrors, setUiErrors] = useState({});
  const [nameIsCorrect, setNameIsCorrect] = useState(false);

  const handleChange = (event) => {
    setNames({
      ...names,
      [event.target.name]: event.target.value,
    });
  };

  const handlePageSubmit = (event) => {
    event.preventDefault();
    // setErrors(values);
    setUiErrors(UIValidation(names));
    setNameIsCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(uiErrors).length === 0 && nameIsCorrect) {
      //users.push({ values[fullname]= values });
      let username = names.username;
      const userobj = { username: names };
      console.log(username, userobj);
      customers.push(names);
      localStorage.setItem("CUSTOMERS", JSON.stringify(customers));
      submitPage(true);
    }
  }, [uiErrors]);
  return { handleChange, handlePageSubmit, uiErrors, names };
};

export default usePage;
