// src/components/Navbar/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure CSS is properly linked

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="navbar">
      <div className="navbar-section admin-section">
        <span className="admin-title">ADMIN</span>
      </div>
      <div className="navbar-section dashboard-title">
        <h1>Dashboard</h1>
      </div>
      <div className="navbar-section user-info-section">
        <div className="user-info" onClick={toggleDropdown}>
          Eric F. Vara <span className="dropdown-arrow">▼</span>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/logout">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
