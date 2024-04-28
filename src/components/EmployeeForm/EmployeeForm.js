import "./EmployeeForm.css";

function EmployeeForm({ setValue, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="form-wrapper">
      <h3>Employee Form</h3>
      <input
        name="name"
        type="text"
        placeholder="name"
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        name="email"
        type="email"
        placeholder="email"
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        name="jobTitle"
        type="text"
        placeholder="jobTitle"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmployeeForm;
