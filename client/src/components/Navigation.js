import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Nav } from "./Style";

const Navigation = (props) => {
  const { user } = props;
  return (
    <Nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
    
        <Link to="/login" className="nav-link">
          Login
        </Link>
     
        <Link to="/signup" className="nav-link">
          Sign Up
        </Link>
    
     
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
        
      
 
    </Nav>
  );
};
export default Navigation;
