import styled from "styled-components"

const StyledForm = styled.div`
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
      background-color: #629cd6;
      width: 100px;
      border: none;
      margin: 10px;
      border-radius: 20px;
      padding: 1%;
      outline: none;
      color: white; 
      font-family: "Orbitron", sans-serif;
    }
  }
`;

export { StyledForm };
