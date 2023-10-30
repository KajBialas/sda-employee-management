import "./Browser.scss";
import React, { useState } from "react";

import { EmployeeDetails } from "../EmployeeDetails";
import { EmployeesList } from "../EmployeesList";

export const Browser: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Employee[]>([]);

  const handleSearch = (query: string) => {
    const filteredEmployees = employees.filter((employee) =>
      employee.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredEmployees);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search employee..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <ul>
        {searchResults.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};
