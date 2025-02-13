import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import logo from "../assets/L-letter.jpg";
import { FaPhoneSquareAlt } from "react-icons/fa";

import { navLinks } from "../utils/constants";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        {/* Navbar Logo */}
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="speak easy logo" />
          </Link>
        </div>

        {/*  Navbar Links */}
        <ul className="nav-links">
          {navLinks.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <NavLink exact to={url} activeClassName="active-nav-link">
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <Link to="/login" className="auth-btn">
          Login
          <FaUserPlus />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
