import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header({ onLoginClick }) {
  return (
    <header className="header">
      <div className="header__logo">Gym Progress Tracker</div>

      <nav className="header__nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `header__link ${isActive ? "header__link_active" : ""}`
          }
        >
          Today
        </NavLink>

        <NavLink
          to="/exercises"
          className={({ isActive }) =>
            `header__link ${isActive ? "header__link_active" : ""}`
          }
        >
          Exercises
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            `header__link ${isActive ? "header__link_active" : ""}`
          }
        >
          History
        </NavLink>
      </nav>

      <button
        type="button"
        className="header__auth-button"
        onClick={onLoginClick}
      >
        Log in
      </button>
    </header>
  );
}

export default Header;
