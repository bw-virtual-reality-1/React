import React, { useState, useEffect } from "react";
import axios from "axios";
import Login from './components/LogIn'
import Dashboard from "./components/ProjectDashboard";
import AddProject from "./components/AddProject";
import Payment from "./components/Payment";
import ProjectCard from "./components/ProjectCard";
import Signup from './components/SignUp'
import { Route, useHistory } from "react-router-dom";
import Project from './components/Project'
import Update from './components/updateProject'

import "./App.css";

import Navbar from "./components/Navigation";
import Home from "./components/Home";
import PrivateRoute from './utils/PrivateRoute'

function App() {
  const [projects, setProjectList] = useState([]);
  const { location } = useHistory();
  const [user, setUser] = useState({ loggedin: false });


  //console.log(projects);
  return (
    <>
      <Navbar user={user} />

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/login">
        <Login/>
      </Route>
      <Route exact path="/signup">
    <Signup/>
      </Route>
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      <PrivateRoute exact path="/add-project" component={AddProject}/>
      <Route exact path="/payment">
        <Payment />
      </Route>
      <Route exact path="/dashboard/:id">
        <Project />
        <Update/>
      </Route>
    </>

  );
}

export default App;
