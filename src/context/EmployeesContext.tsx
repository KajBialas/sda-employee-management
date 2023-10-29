import { createContext, JSX, useEffect, useState } from "react";

type EmployeeType = {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  address: string;
  city: string;
  postalCode: string;
  salary: number;
  status: string;
  phone: string;
};

type EmployeesContextProps = {};

type EmployeesProviderProps = {
  children: JSX.Element;
};

const URL = "http://localhost:5000";

const EmployeesContext = createContext<EmployeesContextProps>(
  {} as EmployeesContextProps
);

export const EmployeesProvider = ({ children }: EmployeesProviderProps) => {
  const [employeesList, setEmployeesList] = useState<EmployeeType[]>([]);

  const getEmployees = async () => {
    try {
      const response = await fetch(`${URL}/employees`);

      if (!response.ok)
        throw new Error("Somethnig went wrong while fetching Employees");

      const data = await response.json();
      setEmployeesList(data);
      return data;
    } catch (error) {
      throw new Error();
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <EmployeesContext.Provider value={employeesList}>
      {children}
    </EmployeesContext.Provider>
  );
};
