import "./Header.scss";
import { NavLink } from "react-router-dom";
import { Browser } from "../Browser";

export const Header = () => {
  return (
    <nav className="header">
      <h1 className="header__title">Employee Management</h1>
      <ul className="header__list">
        <li>
          <NavLink to={"/home"} className="header__list-item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/EmployeesList"} className="header__list-item">
            Employees list
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Browser"} className="header__list-item">
            <Browser />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
