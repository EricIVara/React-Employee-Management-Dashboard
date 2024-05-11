import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";
import CardsList from "./components/Cards/Cards";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const savedNames = JSON.parse(localStorage.getItem("employees")) || [];
    setNames(savedNames);
  }, []);

  const addName = (newEmployee) => {
    const newNames = [...names, newEmployee];
    setNames(newNames);
    localStorage.setItem("employees", JSON.stringify(newNames));
  };

  const clearNames = () => {
    setNames([]);
    localStorage.setItem("employees", JSON.stringify([]));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<h1>Welcome to the Employee Management App</h1>}
          />
          <Route
            path="/manage-employees"
            element={
              <>
                <EmployeeForm addName={addName} clearNames={clearNames} />
                <CardsList cardData={names} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
