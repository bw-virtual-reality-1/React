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
    width: 100%;

    label {
      width: 100%;
      font-weight: bold;
      margin: 0.5rem 0;
    }

    input {
      width: 80%;
      font-size: 1.2rem;
      margin-bottom: 0.6rem;
    }

    button {
      width: 40%;
      height: 35px;
      margin-top: 0.4rem;
      font-size: 1.2rem;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  height: 75px;
  width: 100%;
`;

const StyledHome = styled.section`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`;

export { StyledForm, Nav, StyledHome };
