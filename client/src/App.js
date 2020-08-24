import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Container } from "reactstrap";

import Navbar from "./components/Navigation";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

const signupSubmit = (event) => {
  event.preventDefault();
};

const loginSubmit = (event) => {
  event.preventDefault();
};

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login submit={loginSubmit} />
        </Route>
        <Route exact path="/signup">
          <SignUp submit={signupSubmit} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
