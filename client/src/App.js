import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from './utils/axiosWithAuth'

import Dashboard from "./components/ProjectDashboard";
import AddProject from "./components/AddProject";
import Payment from "./components/Payment";
import ProjectCard from "./components/ProjectCard";

import { Route, useHistory } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navigation";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import PrivateRoute from './utils/PrivateRoute'

function App() {
  const [projects, setProjectList] = useState([]);
  const { location } = useHistory();
  const [user, setUser] = useState({ loggedin: false });

  const getProjectList = () => {
    axiosWithAuth()
      .get("https://virtual-reality-fundraiser.herokuapp.com/api/auth/funder")
      .then((res) => {
        setProjectList(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProjectList();
  }, [location]);

  console.log(projects);
  return (
    <>
      <Navbar user={user} />

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/login">
        <Login setUser={setUser} />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard projects={projects} />
      </Route>
      <Route exact path="/add-project">
        <AddProject />
      </Route>
      <Route exact path="/payment">
        <Payment />
      </Route>
      <Route exact path="/dashboard/:id">
        <ProjectCard />
      </Route>
    </>

  );
}

export default App;
