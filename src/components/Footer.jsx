import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/mmlogo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">

          {/* Logo — clicks navigate to Home */}
          <div className="footer-logo">
            <Link to="/">
              <img
                src={logo}
                alt="MM Safety Glass"
                className="logo-img"
              />
            </Link>
          </div>

          {/* Heading */}
          <h2>
            Let's build with
            <br />
            clarity and strength
          </h2>

          {/* Social Icons */}
          <div className="footer-socials">
            <a href="/">f</a>
            <a href="/">◎</a>
            <a href="/">𝕏</a>
          </div>

          {/* Button */}
          <button className="brochure-btn">
            Download Brochure
          </button>

        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>• Home</li>
            <li>• About Us</li>
            <li>• Our Story</li>
            <li>• Products</li>
            <li>• Gallery</li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div className="footer-column">
          <h3>Our Products</h3>
          <ul>
            <li>• All Clear Glasses</li>
            <li>• Reflective Glasses</li>
            <li>• Regular Mirror</li>
            <li>• V-Groove Glasses</li>
            <li>• Frosted Glass</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <span>📞</span>
            <p>+91 9876543210</p>
          </div>
          <div className="contact-item">
            <span>✉</span>
            <p>mmglass@gmail.com</p>
          </div>
          <div className="contact-item">
            <span>📍</span>
            <p>Bangalore</p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;