// src/components/Sidebar/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/manage-employees">Manage Employees</Link>
      {/* Add additional links as needed */}
    </div>
  );
}

export default Sidebar;
