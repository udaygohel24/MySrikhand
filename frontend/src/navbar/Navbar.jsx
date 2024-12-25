// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import kathiyawadImage from "../image/kathiyawad 01.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img
            src={kathiyawadImage}
            alt="kathiyawad Logo"
            className="logo-image"
          />
        </Link>

        {/* Mobile menu button */}
        <div className="mobile-menu" onClick={toggleMenu}>
          {isMobile ? (
            <FaTimes className="fatime" />
          ) : (
            <FaBars className="fatime" />
          )}
        </div>

        {/* Navigation menu */}
        <ul className={isMobile ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/product" className="nav-link" onClick={toggleMenu}>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Right side icons and buttons */}
        <div className="nav-icons">
          <div className="search-icon">
            <FaSearch />
          </div>
          <div className="cart-icon">
            <FaShoppingCart />
            <span className="cart-count">0</span>
          </div>
          {/* <button className="signup-btn">Sign Up</button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
