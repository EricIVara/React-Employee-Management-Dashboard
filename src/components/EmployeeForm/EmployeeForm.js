import { useState } from "react";
import "./EmployeeForm.css";

function EmployeeForm({ addName, clearNames }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addName({ name, email, jobTitle });
    setName("");
    setEmail("");
    setJobTitle("");
  };

  return (
    <div>
      <h1>Welcome</h1>
      <form onSubmit={handleSubmit} className="form-wrapper">
        <h3>Employee Form</h3>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="jobTitle"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={clearNames}>
          Clear All Employees
        </button>
      </form>
    </div>
  );
}

export default EmployeeForm;
