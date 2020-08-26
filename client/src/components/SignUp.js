import React, { useState } from "react";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { StyledForm } from "./Style";

let schema = yup.object().shape({
  firstName: yup.string().min("2", "Please enter your first name").required(),
  lastName: yup.string().min("3", "Please enter a last name").required(),
  email: yup.string().email().required("Please enter a valid email"),
  username: yup.string().min("3", "Please enter a valid username").required(),
  password: yup.string().min("6", "please enter a valid password").required(),
  role: yup.string().required(),
});



const defaultFormData = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  role: "",
};

function SignUp(props) {
  const [inputValue, setInputValue] = useState(defaultFormData);
  const [formErrors, setFormErrors] = useState([]);
  const { setUser } = props
  const history = useHistory();
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
    console.log(inputValue)
    schema
      .validate(inputValue)
      .then((valid) => {

        fetch('https://virtual-reality-fundraiser.herokuapp.com/api/register', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputValue)
        }).then(res => {
          return res.json()
        })
          .then(data => {
            console.log(data)
            setFormErrors({});

            setInputValue(defaultFormData)
            setUser({ loggedin: true })
            history.push('/dashboard')
          })
          .catch(err => setFormErrors({ statusErr: "there was an issue with your request" }))
      })
      .catch((err) => {
        setFormErrors({ formError: "All fields must be filled out correctly" });
      });

    setInputValue(defaultFormData);
  };
  return (
    <StyledForm>
      <h1>Sign Up Page</h1>
      {formErrors.firstName}
      <br />
      {formErrors.lastName}
      <br />
      {formErrors.email}
      <br />
      {formErrors.username}
      <br />
      {formErrors.password}
      <br />
      {formErrors.formError} <br />
      {formErrors.statusErr}
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          onChange={changeHandler}
          value={inputValue.firstName}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={changeHandler}
          value={inputValue.lastName}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={changeHandler}
          value={inputValue.email}
        />

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
        <label htmlFor="role">Account Type</label>
        <select className='select' name="role" onChange={changeHandler} value={inputValue.role}>
          <option value="">--- Select Account Type ---</option>
          <option value="1">Get Funds</option>
          <option value="2">Give Funds</option>
        </select>
        <button>Sign Up</button>
      </form>

    </StyledForm>
  );
}

export default SignUp;

// name, email, username, password
