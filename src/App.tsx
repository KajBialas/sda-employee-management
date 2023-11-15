import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home } from "./components/Home";
import { EmployeesList } from "./components/EmployeesList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { EmployeesProvider } from "./context/EmployeesContext";

function App() {
  return (
    <>
      <>
        <EmployeesProvider>
          <>
            <Header />
            <div className="App">
              <Routes>
                <Route path="/" element={<Home />} />;
                <Route path="/employees" element={<EmployeesList />} />;
                <Route path="/employees/:id" element={<EmployeeDetails />} />;
              </Routes>
            </div>
          </>
        </EmployeesProvider>
      </>
      <Footer />
    </>
  );
}

export default App;
