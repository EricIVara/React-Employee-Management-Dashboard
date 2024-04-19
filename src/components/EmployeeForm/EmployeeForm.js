import React, { useState } from "react";
import "./EmployeeForm.css";

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobTitle: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-wrapper">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmployeeForm;
