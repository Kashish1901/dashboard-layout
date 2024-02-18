import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="flex">
        <NavLink to="/" exact>
          <li>
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </li>
        </NavLink>
        <NavLink to="/articles" exact>
          <li>
            <i className="fa-sharp fa-solid fa-font"></i>
            <span>Articles</span>
          </li>
        </NavLink>
        <NavLink to="/people" exact>
          <li>
            <i className="fa-solid fa-user-group"></i>
            <span>People</span>
          </li>
        </NavLink>
        <NavLink to="/books">
          <li>
            <i className="fa-sharp fa-solid fa-book"></i>
            <span>Books</span>
          </li>
        </NavLink>
        <NavLink to="/help">
          <li>
            <i className="fa-sharp fa-solid fa-tickets"></i>
            <span>Help & Support</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;
