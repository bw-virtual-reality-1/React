import styled from "styled-components";

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
      width: 60%;
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

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  height: 50px;
  width: 100%;
  background-color: black;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.6rem;

  a {
    margin: 0 0.8rem;
  }
`;

const StyledHome = styled.section`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`;

export { StyledForm, Nav, StyledHome };
