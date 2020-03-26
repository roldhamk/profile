import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link className="a" to="/">
          Home
        </Link>
        <Link className="a" to="/about">
          About
        </Link>
        <Link className="a" to="/portfolio">
          Portfolio
        </Link>
        <Link className="a" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
