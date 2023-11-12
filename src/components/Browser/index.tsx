import React, { useState, useContext } from "react";
import "./Browser.scss";
import { EmployeesContext } from "../../context/EmployeesContext";

export const Browser = () => {
  const { employeesList } = useContext(EmployeesContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employeesList.filter((employee) =>
    employee.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="search"
        placeholder="Search employees..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredEmployees.map((employee) => (
          <li key={employee.id}>
            {employee.lastName} - {employee.id}
          </li>
        ))}
      </ul>
    </div>
  );
};
