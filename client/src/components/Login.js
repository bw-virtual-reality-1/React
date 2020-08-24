import React, { useState } from "react";

import * as yup from "yup";

import { StyledLogin } from "./Style";

const loginSubmit = (event) => {
  event.preventDefault();
};

let schema = yup.object().shape({
  username: yup.string().min("3", "Please enter a valid username").required(),
  password: yup.string().min("6", "please enter a valid password").required(),
});

function Login(props) {
  const { submit } = props;
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

  return (
    <StyledLogin>
      <h1>Login Page</h1>
      {formErrors.username}
      <br />
      {formErrors.password}
      <form onSubmit={loginSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          onChange={changeHandler}
          value={inputValue.name}
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
    </StyledLogin>
  );
}

export default Login;
