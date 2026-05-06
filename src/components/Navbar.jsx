import "./Navbar.css";
import logo from "../assets/mm-logo.jpeg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
       <img src={logo} alt="MM Glass Logo" className="logo-img" />
      </div>

      <ul className="nav-links">
        <li className="active">Home</li>
        <li>About Us</li>
        <li>Our Story</li>
        <li>Products ▾</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;