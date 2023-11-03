import { EmployeesContext } from "../../context/EmployeesContext";
import { useContext } from "react";

export const NewEmployee = () => {
  const { newEmployeeInput, handleNewEmployeeInput, handleNewEmployeeSubmit } =
    useContext(EmployeesContext);

  return (
    <div className="new-employee">
      <form onSubmit={handleNewEmployeeSubmit}>
        <label htmlFor="firstName">
          Imię:{" "}
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={newEmployeeInput.firstName}
            onChange={handleNewEmployeeInput}
            required
          />
        </label>
        <label htmlFor="lastName">
          Nazwisko:{" "}
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={newEmployeeInput.lastName}
            onChange={handleNewEmployeeInput}
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
            value={newEmployeeInput.birthDate}
            onChange={handleNewEmployeeInput}
          />
        </label>
        <label htmlFor="address">
          Adres:{" "}
          <input
            id="address"
            type="text"
            name="address"
            value={newEmployeeInput.address}
            onChange={handleNewEmployeeInput}
            required
          />
        </label>
        <label htmlFor="city">
          Miasto:{" "}
          <input
            id="city"
            type="text"
            name="city"
            value={newEmployeeInput.city}
            onChange={handleNewEmployeeInput}
            required
          />
        </label>
        <label htmlFor="postalCode">
          Kod pocztowy:{" "}
          <input
            id="postalCode"
            type="text"
            name="postalCode"
            value={newEmployeeInput.postalCode}
            onChange={handleNewEmployeeInput}
            required
          />
        </label>
        <label htmlFor="salary">
          Wynagrodzenie:{" "}
          <input
            id="salary"
            type="number"
            name="salary"
            value={newEmployeeInput.salary}
            onChange={handleNewEmployeeInput}
            required
          />
        </label>
        <label htmlFor="status">
          Status:{" "}
          <input
            id="status"
            type="text"
            name="status"
            value={newEmployeeInput.status}
            onChange={handleNewEmployeeInput}
            required
          />
        </label>
        <label htmlFor="phone">
          Telefon:{" "}
          <input
            id="phone"
            type="text"
            name="phone"
            value={newEmployeeInput.phone}
            onChange={handleNewEmployeeInput}
            required
          />
        </label>
        <button type="submit">Dodaj pracownika</button>
      </form>
    </div>
  );
};
