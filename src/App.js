import EmployeeForm from "./components/EmployeeForm/EmployeeForm";
import { useState } from "react";
import "./App.css";

function App() {
  // use state function
  const [value, setValue] = useState({
    name: "",
    email: "",
    jobTitle: "",
  });

  // handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("App ", value);
  };

  return (
    <div className="App">
      <h1>Welcome</h1>
      <EmployeeForm
        values={value}
        setValue={setValue}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
