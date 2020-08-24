import styled from "styled-components";

const StyledLogin = styled.div`
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

const SignUpStyled = styled.div`
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

export { StyledLogin, SignUpStyled };
