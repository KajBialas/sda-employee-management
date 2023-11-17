import { useParams } from "react-router-dom";
import "./EmployeeDetails.scss";
import { useContext, useEffect, useState } from "react";
import { EmployeesContext } from "../../context/EmployeesContext";

export const EmployeeDetails = () => {
  const { id } = useParams();
  const [isEditable, setIsEditable] = useState(false);

  const {
    editEmployeeInput,
    handleEditEmployeeInput,
    handleEditEmployee,
    getSingleEmployee,
  } = useContext(EmployeesContext);

  const toggleEditing = () => {
    if (isEditable && id) getSingleEmployee(id);
    setIsEditable((prev) => !prev);
  };

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
            value={editEmployeeInput.firstName}
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
            value={editEmployeeInput.lastName}
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
            value={editEmployeeInput.birthDate}
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
            value={editEmployeeInput.address}
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
            value={editEmployeeInput.city}
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
            value={editEmployeeInput.postalCode}
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
            value={editEmployeeInput.salary}
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
            value={editEmployeeInput.status}
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
            value={editEmployeeInput.phone}
            onChange={handleEditEmployeeInput}
            disabled={!isEditable}
            required
          />
        </label>
        {!isEditable && (
          <button type="button" onClick={toggleEditing}>
            Edytuj pracownika
          </button>
        )}

        {isEditable && (
          <>
            <button type="submit" onClick={toggleEditing}>
              Zapisz
            </button>
            <button type="button" onClick={toggleEditing}>
              Anuluj
            </button>
          </>
        )}
      </form>
    </div>
  );
};
