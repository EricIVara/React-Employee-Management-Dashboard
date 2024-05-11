import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee, clearEmployees } from "../../store/employeeSlice";
import "./EmployeeForm.css";

function EmployeeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee({ name, email, jobTitle }));
    setName("");
    setEmail("");
    setJobTitle("");
  };

  return (
    <div className="employee-form-container">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit} className="form-wrapper">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Enter employee's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="Enter employee's email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="jobTitle">Job Title:</label>
        <input
          id="jobTitle"
          type="text"
          placeholder="Enter employee's job title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <div className="form-buttons">
          <button type="submit">Add Employee</button>
          <button type="button" onClick={() => dispatch(clearEmployees())}>
            Clear All Employees
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmployeeForm;
