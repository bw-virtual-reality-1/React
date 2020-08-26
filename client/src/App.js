import React, { useState} from "react";


import Dashboard from "./components/ProjectDashboard";
import AddProject from "./components/AddProject";
import Payment from "./components/Payment";
import ProjectCard from "./components/ProjectCard";

import { Route} from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navigation";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import PrivateRoute from './utils/PrivateRoute'

function App() {
  const [user, setUser] = useState({ loggedin: false });

 
  return (
    <>
      <Navbar user={user} />

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/login">
        <Login setUser={setUser} user={user} />
      </Route>
      <Route exact path="/signup">
        <SignUp setUser={setUser} user={user} />
      </Route>
      <PrivateRoute exact path="/dashboard">
        <Dashboard  />
      </PrivateRoute>
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
