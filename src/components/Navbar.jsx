import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png"; // Ensure correct path

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="GreyCrust Logo" className="logo" />
        </Link>
      </div>

      {/* Center & Right: Navigation Links and Contact Button */}
      <div className="nav-menu">
        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/destinations">SERVICE</Link></li>
          <li><Link to="/pricing">PRICING</Link></li> 
        </ul>
        <Link to="/contact">
          <button className="contact-btn">Contact us</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
