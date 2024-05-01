import EmployeeForm from "./components/EmployeeForm/EmployeeForm";
import CardsList from "./components/Cards/Cards";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const saveNames = JSON.parse(localStorage.getItem("name")) || [];
    setNames(saveNames);
  }, []);

  const addName = (newEmployee) => {
    const newNames = [...names, newEmployee];
    setNames(newNames);
    localStorage.setItem("name", JSON.stringify(newNames));
  };

  const clearNames = () => {
    setNames([]);
    localStorage.setItem("name", JSON.stringify([]));
  };

  return (
    <div className="App">
      <EmployeeForm addName={addName} clearNames={clearNames} />
      <CardsList cardData={names} />
    </div>
  );
}

export default App;
