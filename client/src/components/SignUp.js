import React from "react";
import styled from "styled-components";

const SignUpStyled = styled.div`
  font-family: serif;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    width: 100%;
  }

  form {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    width: 60%;

    label {
      width: 100%;
      font-weight: bold;
      margin: 0.5rem 0;
    }

    input {
      width: 40%;
      font-size: 1.2rem;
      margin-bottom: 0.6rem;
    }
  }
`;

function SignUp(props) {
  const { submit } = props;
  return (
    <SignUpStyled>
      <h1>Sign Up Page</h1>
      <form onSubmit={submit}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button>Submit</button>
      </form>
    </SignUpStyled>
  );
}

export default SignUp;

// name, email, username, password
