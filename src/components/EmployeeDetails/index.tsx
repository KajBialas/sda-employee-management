import { useParams } from "react-router-dom";
import "./EmployeeDetails.scss";
import { useContext, useEffect } from "react";
import { EmployeesContext } from "../../context/EmployeesContext";

export const EmployeeDetails = () => {
  const { id } = useParams();

  const {
    employee,
    isEditable,
    allowDelete,
    handleEditEmployeeInput,
    handleEditEmployee,
    getSingleEmployee,
    toggleEditing,
    setAllowDelete,
    handleDelete,
  } = useContext(EmployeesContext);

  useEffect(() => {
    if (id) getSingleEmployee(id);
  }, [id]);

  return (
    <div className="employee-details">
      <form onSubmit={handleEditEmployee}>
        <input type="hidden" value={id} />
        <label htmlFor="firstName">
          Imię:{" "}
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={handleEditEmployeeInput}
            disabled={!isEditable}
            required
          />
        </label>
        <label htmlFor="lastName">
          Nazwisko:{" "}
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={handleEditEmployeeInput}
            disabled={!isEditable}
            required
          />
        </label>
        <label htmlFor="birthDate">
          Data urodzenia:{" "}
          <input
            id="birthDate"
            type="date"
            name="birthDate"
            required
            pattern="\d{4}-\d{2}-\d{2}"
            value={employee.birthDate}
            onChange={handleEditEmployeeInput}
            disabled={!isEditable}
          />
        </label>
        <label htmlFor="address">
          Adres:{" "}
          <input
            id="address"
            type="text"
            name="address"
            value={employee.address}
            onChange={handleEditEmployeeInput}
            disabled={!isEditable}
            required
          />
        </label>
        <label htmlFor="city">
          Miasto:{" "}
          <input
            id="city"
            type="text"
            name="city"
            value={employee.city}
            onChange={handleEditEmployeeInput}
            disabled={!isEditable}
            required
          />
        </label>
        <label htmlFor="postalCode">
          Kod pocztowy:{" "}
          <input
            id="postalCode"
            type="text"
            name="postalCode"
            value={employee.postalCode}
            onChange={handleEditEmployeeInput}
            disabled={!isEditable}
            required
          />
        </label>
        <label htmlFor="salary">
          Wynagrodzenie:{" "}
          <input
            id="salary"
            type="number"
            name="salary"
            value={employee.salary}
            onChange={handleEditEmployeeInput}
            disabled={!isEditable}
            required
          />
        </label>
        <label htmlFor="status">
          Status:{" "}
          <input
            id="status"
            type="text"
            name="status"
            value={employee.status}
            onChange={handleEditEmployeeInput}
            disabled={!isEditable}
            required
          />
        </label>
        <label htmlFor="phone">
          Telefon:{" "}
          <input
            id="phone"
            type="text"
            name="phone"
            value={employee.phone}
            onChange={handleEditEmployeeInput}
            disabled={!isEditable}
            required
          />
        </label>
        {!isEditable && (
          <button type="button" onClick={() => toggleEditing(id!)}>
            Edytuj pracownika
          </button>
        )}

        {isEditable && (
          <>
            <button type="submit">Zapisz</button>
            <button type="button" onClick={() => toggleEditing(id!)}>
              Anuluj
            </button>
          </>
        )}
      </form>
      <button type="button" onClick={() => setAllowDelete(true)}>
        Usuń
      </button>
      {allowDelete && (
        <div>
          Czy na pewno chcesz usunąć {employee.firstName} {employee.lastName} z
          listy pracowników?
          <button onClick={handleDelete}>Tak</button>
          <button onClick={() => setAllowDelete(false)}>Nie</button>
        </div>
      )}
    </div>
  );
};
