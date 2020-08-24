import React from "react";
import styled from "styled-components";

import { SignUpStyled } from "./Style";

const signupSubmit = (event) => {
  event.preventDefault();
};

function SignUp(props) {
  const { submit } = props;
  return (
    <SignUpStyled>
      <h1>Sign Up Page</h1>
      <form onSubmit={signupSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" />

        <label htmlFor="username">Username</label>
        <input type="text" name="username" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button>Sign Up</button>
      </form>
    </SignUpStyled>
  );
}

export default SignUp;

// name, email, username, password
