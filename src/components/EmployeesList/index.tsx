import { useContext } from "react";
import "./EmployeesList.scss";
import { EmployeesContext } from "../../context/EmployeesContext";

export const EmployeesList = () => {
  const { employeesList } = useContext(EmployeesContext);

  return (
    <div className="employees-list">
      {employeesList.length > 0 ? (
        <ul className="employees-list__list">
          {employeesList.map((employee) => {
            return (
              <li key={employee.id}>
                <p>Imię: {employee.firstName}</p>
                <p>Nazwisko: {employee.lastName}</p>
                <p>Data urodzenia: {employee.birthDate}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Brak pracowników</p>
      )}
    </div>
  );
};
