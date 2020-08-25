import React, { useState } from "react";

import * as yup from "yup";
import axios from "axios";

import { StyledForm } from "./Style";

let schema = yup.object().shape({
  username: yup.string().min("3", "Please enter a valid username").required(),
  password: yup.string().min("6", "please enter a valid password").required(),
});

function Login(props) {
  const { setUser } = props;

  const [inputValue, setInputValue] = useState({
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


        fetch('https://virtual-reality-fundraiser.herokuapp.com/api/login', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputValue)
        }).then(res => { return res.json() })
          .then(data => setUser({ token: data.token, loggedin: true }))

      })
      .catch((err) => {
        setFormErrors({ formError: "All fields must be filled out correctly" });
      });
  };

  return (
    <StyledForm>
      <h1>Login Page</h1>
      {formErrors.username}
      <br />
      {formErrors.password} <br />
      {formErrors.formError}
      <form onSubmit={submitHandler}>
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
        <button>Login</button>
      </form>
    </StyledForm>
  );
}

export default Login;
