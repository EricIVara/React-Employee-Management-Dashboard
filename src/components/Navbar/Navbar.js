import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Importing the CSS specific to the Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/manage-employees" className="nav-link">
        Manage Employees
      </Link>
    </nav>
  );
}

export default Navbar;
