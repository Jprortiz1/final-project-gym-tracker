import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `nav__link ${isActive ? "nav__link_active" : ""}`
        }
      >
        Today
      </NavLink>

      <NavLink
        to="/exercises"
        className={({ isActive }) =>
          `nav__link ${isActive ? "nav__link_active" : ""}`
        }
      >
        Exercises
      </NavLink>

      <NavLink
        to="/history"
        className={({ isActive }) =>
          `nav__link ${isActive ? "nav__link_active" : ""}`
        }
      >
        History
      </NavLink>
    </nav>
  );
}

export default Navigation;
