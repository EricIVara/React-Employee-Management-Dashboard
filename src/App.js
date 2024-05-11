import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar/Navbar"; // Navigation bar at the top
import Sidebar from "./components/Sidebar/Sidebar"; // Sidebar component for navigation
import Dashboard from "./components/Dashboard/Dashboard"; // Main Dashboard component
import CardsList from "./components/Cards/Cards"; // For displaying lists of cards
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeEmployees } from "./store/employeeSlice";
import "./App.css";

const EmployeeForm = lazy(() =>
  import("./components/EmployeeForm/EmployeeForm")
);

function App() {
  const dispatch = useDispatch();
  const names = useSelector((state) => state.employees.employees);

  useEffect(() => {
    const savedNames = JSON.parse(localStorage.getItem("employees")) || [];
    dispatch(initializeEmployees(savedNames));
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Consistent top navigation */}
        <div className="app-body">
          <Sidebar /> {/* Sidebar for additional navigation */}
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/manage-employees"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <EmployeeForm />
                    <CardsList cardData={names} />
                  </Suspense>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
