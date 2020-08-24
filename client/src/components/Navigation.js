import React from "react";

import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>

      <Link to="/login" className="nav-link">
        Login
      </Link>

      <Link to="/signup" className="nav-link">
        Sign Up
      </Link>
    </nav>
  );
};
export default Navigation;
