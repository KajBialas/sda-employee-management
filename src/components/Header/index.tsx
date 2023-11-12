import "./Header.scss";
import { NavLink } from "react-router-dom";
import { Browser } from "../Browser";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <div className="header-box">
      <nav className="header">
        <h1 className="header__title">Employee Management App</h1>
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
            <NavLink to={"/Browser"} className="header__list-item-searching">
              <Browser />
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="logo-box">
        <Logo />
      </div>
    </div>
  );
};
