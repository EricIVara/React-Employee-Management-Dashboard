import React from "react";
import "./Cards.css";

function Cards({ employee }) {
  return (
    <div className="card-output">
      <p>Name: {employee.name}</p>
      <p>Email: {employee.email}</p>
      <p>Job Title: {employee.jobTitle}</p>
    </div>
  );
}

function CardsList({ cardData }) {
  return (
    <div className="card-container">
      {cardData.map((employee, index) => (
        <Cards key={index} employee={employee} />
      ))}
    </div>
  );
}

export default CardsList;
