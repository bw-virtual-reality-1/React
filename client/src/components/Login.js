import React from "react";
import styled from "styled-components";

const StyledLogin = styled.div`
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

    button {
      width: 20%;
      height: 35px;
      margin-top: 0.4rem;
      font-size: 1.2rem;
    }
  }
`;

function Login(props) {
  const { submit } = props;
  return (
    <StyledLogin>
      <h1>Login Page</h1>
      <form onSubmit={submit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button>Login</button>
      </form>
    </StyledLogin>
  );
}

export default Login;
