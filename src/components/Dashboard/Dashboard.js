// src/components/Dashboard/Dashboard.js
import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Example tile */}
      <div className="dashboard-tile">Total Departments: 2</div>
      <div className="dashboard-tile">Total Employees: 100</div>
      {/* Add more tiles as needed */}
    </div>
  );
}

export default Dashboard;
