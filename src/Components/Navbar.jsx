import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeCounterContext } from "../ThemeContext";
import { FaBars } from "react-icons/fa"; // hamburger icon
import "../Styles/Navbar.css";
import List from "./Search";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeCounterContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="logo">MyLogo</div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/Rating" activeClassName="active">
          Rating_Filters
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <FaBars size={24} /> {/* Hamburger icon */}
      </div>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>Dark Theme</button>
      </div>
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button className= "list" onClick={List}>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
