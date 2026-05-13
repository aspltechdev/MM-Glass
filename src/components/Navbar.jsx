import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/mm-logo.jpeg";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* ===== LOGO ===== */}
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="MM Glass Logo" className="logo-img" />
          </Link>
        </div>

        {/* ===== NAV LINKS ===== */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/ourstory" onClick={closeMenu}>
              Our Story
            </NavLink>
          </li>

          <li>
            <NavLink to="/product" onClick={closeMenu}>
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/gallery" onClick={closeMenu}>
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink to="/contactus" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* ===== HAMBURGER ===== */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* ===== OVERLAY ===== */}
      {menuOpen && (
        <div className="nav-overlay" onClick={closeMenu}></div>
      )}
    </>
  );
}

export default Navbar;