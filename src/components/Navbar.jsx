import { useEffect, useState } from "react";
import "./Navbar.css";

import logo from "../assets/mm-logo.jpeg";

import { NavLink } from "react-router-dom";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (

    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>

        {/* LEFT */}

        <div className="nav-left">

          <img
            src={logo}
            alt="MM Glass"
            className="logo"
          />

        </div>

        {/* CENTER */}

        <nav className={`nav-center ${menuOpen ? "active" : ""}`}>

          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/product">Products</NavLink>

          <NavLink to="/gallery">Projects</NavLink>

          {/* <NavLink to="/ourstory">Story</NavLink> */}

          <NavLink to="/contactus">Contact</NavLink>

        </nav>

        {/* RIGHT */}

        <div className="nav-right">

          <button className="quote-btn">
            Request Quote
          </button>

          {/* MOBILE */}

          <button
            className={`menu-btn ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >

            <span></span>
            <span></span>

          </button>

        </div>

      </header>

      {/* OVERLAY */}

      <div
        className={`mobile-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>
    </>
  );
}

export default Navbar;