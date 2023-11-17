import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home } from "./components/Home";
import { EmployeesList } from "./components/EmployeesList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { EmployeesProvider } from "./context/EmployeesContext";
import { NewEmployee } from "./components/NewEmployee";

function App() {
  return (
    <EmployeesProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/employees" element={<EmployeesList />} />;
          <Route path="/employees/:id" element={<EmployeeDetails />} />;
          <Route path="/employees/new" element={<NewEmployee />} />
        </Routes>
      </div>
    </EmployeesProvider>
  );
}

export default App;
