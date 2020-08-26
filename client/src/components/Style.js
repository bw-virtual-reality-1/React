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
  color: white;

  form {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    width: 60%;

    label {
      width: 50%;
      font-weight: bold;
      margin: 0.5rem 0;
    }

    input {
      width: 30%;
      font-size: 1.2rem;
      margin-bottom: 0.6rem;
      padding: 0.7rem;
      color: white;
    }

    button {
      background-color: #CA2044;
      width: 100px;
      border: none;
      margin: 10px;
      border-radius: 20px;
      padding: 1%;
      outline: none;
      color: white;
      font-family: "Orbitron", sans-serif;
    }
    .select{
      font-size: 1rem;
      margin-top: 0.6rem;
      background-color: #073b70;
      color: white;
    }
  }
  form {
    animation-duration: 0.8s;
    animation-name: slidetop;
  }

@keyframes slidetop {
  from {
    margin-top: 100%;
 
  }

  to {
    margin-top: 0%;

  }
}
`;

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  height: 50px;
  width: 100%;
  background-color: #303030;
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
  h1 {
    animation-duration: 1s;
    animation-name: slidein;
  }

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%; 
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
`;

export { StyledForm, Nav, StyledHome };
