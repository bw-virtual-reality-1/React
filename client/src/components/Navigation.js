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
      {!user.loggedin && (
        <Link to="/login" className="nav-link">
          Login
        </Link>
      )}

      {!user.loggedin && (
        <Link to="/signup" className="nav-link">
          Sign Up
        </Link>
      )}
      {user.loggedin && (
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
      )}
    </Nav>
  );
};
export default Navigation;
