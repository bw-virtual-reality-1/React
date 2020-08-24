import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { SignUpStyled } from "./Style";

let schema = yup.object().shape({
  firstName: yup.string().min("2", "Please enter your first name").required(),
  lastName: yup.string().min("3", "Please enter a last name").required(),
  email: yup.string().email().required("Please enter a valid email"),
  username: yup.string().min("3", "Please enter a valid username").required(),
  password: yup.string().min("6", "please enter a valid password").required(),
});

const signupSubmit = (event) => {
  event.preventDefault();
};

function SignUp(props) {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    yup
      .reach(schema, name)
      .validate(value)
      .then((msg) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    schema
      .validate(inputValue)
      .then((valid) => {
        axios
          .post("https://reqres.in/api/users", { inputValue })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {});
  };
  return (
    <SignUpStyled>
      <h1>Sign Up Page</h1>
      {formErrors.firstName}
      <br />
      {formErrors.lastName}
      <br />
      {formErrors.email}
      <br />
      {formErrors.username}
      <br />
      {formErrors.password}
      <br />
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          onChange={changeHandler}
          value={inputValue.firstName}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={changeHandler}
          value={inputValue.lastName}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={changeHandler}
          value={inputValue.email}
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          onChange={changeHandler}
          value={inputValue.username}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={changeHandler}
          value={inputValue.password}
        />
        <button>Sign Up</button>
      </form>
    </SignUpStyled>
  );
}

export default SignUp;

// name, email, username, password
