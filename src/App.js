import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar/Navbar"; // Import the Navbar component
import CardsList from "./components/Cards/Cards";
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
        <Navbar /> {/* Navbar component added for consistent navigation */}
        <Routes>
          <Route
            path="/"
            element={<h1>Welcome to the Employee Management App</h1>}
          />
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
    </Router>
  );
}

export default App;
