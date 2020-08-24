import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';
import Navbar from './components/Navigation'
import Login from './components/Login';
import SignUp from './components/SignUp';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
