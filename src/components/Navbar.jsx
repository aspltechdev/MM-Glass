import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/mmlogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo with navigation to home */}
      <Link to="/" onClick={closeMenu} aria-label="Home">
        <div className="logo">
          <img src={logo} alt="MM Glass Logo" className="logo-img" />
        </div>
      </Link>

      {/* Hamburger Button */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
        <li><Link to="/ourstory" onClick={closeMenu}>Our Story</Link></li>
        <li><Link to="/product" onClick={closeMenu}>Products</Link></li>
        <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
        <li><Link to="/contactus" onClick={closeMenu}>Contact</Link></li>
      </ul>

      {/* Overlay */}
      {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </nav>
  );
}

export default Navbar;