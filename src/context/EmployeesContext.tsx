import {
  ChangeEvent,
  createContext,
  FormEvent,
  JSX,
  useEffect,
  useState,
} from "react";

type EmployeeType = {
  id?: number;
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

type EmployeesContextProps = {
  employeesList: EmployeeType[];
  newEmployeeInput: EmployeeType;
  handleNewEmployeeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNewEmployeeSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

type EmployeesProviderProps = {
  children: JSX.Element;
};

const URL = "http://localhost:5000";

export const EmployeesContext = createContext<EmployeesContextProps>(
  {} as EmployeesContextProps
);

export const EmployeesProvider = ({ children }: EmployeesProviderProps) => {
  const [employeesList, setEmployeesList] = useState<EmployeeType[]>([]);
  const [newEmployeeInput, setNewEmployeeInput] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    address: "",
    city: "",
    postalCode: "",
    salary: 0,
    status: "",
    phone: "",
  });

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

  const addEmployee = async (newEmployee: EmployeeType) => {
    const {
      firstName,
      lastName,
      birthDate,
      address,
      city,
      postalCode,
      salary,
      status,
      phone,
    } = newEmployee;

    try {
      const response = await fetch(`${URL}/employees`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          birthDate,
          address,
          city,
          postalCode,
          salary,
          status,
          phone,
        }),
      });

      if (!response.ok)
        throw new Error("Something went wrong while adding new employee");

      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  };

  const handleNewEmployeeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setNewEmployeeInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleNewEmployeeSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      newEmployeeInput.firstName.length < 2 ||
      newEmployeeInput.lastName.length < 2 ||
      newEmployeeInput.address.length < 2 ||
      newEmployeeInput.city.length < 2 ||
      newEmployeeInput.postalCode.length < 6 ||
      newEmployeeInput.salary < 2000 ||
      newEmployeeInput.status === "" ||
      newEmployeeInput.phone.length < 9
    ) {
      alert("Wypełnij pola prawidłowo");
    }

    const newEmployee = {
      firstName: newEmployeeInput.firstName,
      lastName: newEmployeeInput.lastName,
      birthDate: newEmployeeInput.birthDate,
      address: newEmployeeInput.address,
      city: newEmployeeInput.city,
      postalCode: newEmployeeInput.postalCode,
      salary: newEmployeeInput.salary,
      status: newEmployeeInput.status,
      phone: newEmployeeInput.phone,
    };

    const employee = addEmployee(newEmployee);

    if (typeof employee === "object") getEmployees();
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <EmployeesContext.Provider
      value={{
        employeesList,
        newEmployeeInput,
        handleNewEmployeeInput,
        handleNewEmployeeSubmit,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};
