// import "./Footer.css";
// import { Link } from "react-router-dom";
// import logo from "../assets/mmlogo.png";

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-container">

//         {/* LEFT */}
//         <div className="footer-left">

//           {/* Logo */}
//           <div className="footer-logo">
//             <Link to="/">
//               <img
//                 src={logo}
//                 alt="MM Safety Glass"
//                 className="logo-img"
//               />
//             </Link>
//           </div>

//           {/* Heading */}
//           <h2>
//             Let's build with
//             <br />
//             clarity and strength
//           </h2>

//           {/* Social Icons */}
//           <div className="footer-socials">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               f
//             </a>

//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               ◎
//             </a>

//             <a
//               href="https://x.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               𝕏
//             </a>
//           </div>

//           {/* Button */}
//           <button className="brochure-btn">
//             Download Brochure
//           </button>

//         </div>

//         {/* QUICK LINKS */}
//         <div className="footer-column">
//           <h3>Quick Links</h3>

//           <ul>
//             <li>
//               <Link to="/">• Home</Link>
//             </li>

//             <li>
//               <Link to="/about">• About Us</Link>
//             </li>

//             <li>
//               <Link to="/ourstory">• Our Story</Link>
//             </li>

//             <li>
//               <Link to="/product">• Products</Link>
//             </li>

//             <li>
//               <Link to="/gallery">• Gallery</Link>
//             </li>

//             <li>
//               <Link to="/Contactus">• Contact US</Link>
//             </li>
//           </ul>
//         </div>

//         {/* PRODUCTS */}
//         <div className="footer-column">
//           <h3>Our Products</h3>

//           <ul>
//             <li>
//               <Link to="/product">• All Clear Glasses</Link>
//             </li>

//             <li>
//               <Link to="/product">• Reflective Glasses</Link>
//             </li>

//             <li>
//               <Link to="/product">• Regular Mirror</Link>
//             </li>

//             <li>
//               <Link to="/product">• V-Groove Glasses</Link>
//             </li>

//             <li>
//               <Link to="/product">• Frosted Glass</Link>
//             </li>
//           </ul>
//         </div>

//         {/* CONTACT */}
//         <div className="footer-column">
//           <h3>Contact Us</h3>

//           {/* WhatsApp */}
//           <div className="contact-item">
//             <span>📞</span>

//             <a
//               href="https://wa.me/919876543210"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               +91 9876543210
//             </a>
//           </div>

//           {/* Email */}
//           <div className="contact-item">
//             <span>✉</span>

//             <a href="mailto:mmglass@gmail.com">
//               mmglass@gmail.com
//             </a>
//           </div>

//           {/* Location */}
//           <div className="contact-item">
//             <span>📍</span>
//             <p>Bangalore</p>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }

// export default Footer;







// Footer.jsx

import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/mmlogo.png";

function Footer() {

  return (

    <footer className="ft-section">

      {/* BACKGROUND */}

      <div className="ft-gradient"></div>
      <div className="ft-grid"></div>
      <div className="ft-noise"></div>

      {/* LIGHTS */}

      <div className="ft-light ft-light1"></div>
      <div className="ft-light ft-light2"></div>

      {/* TOP CTA */}

    

      {/* MAIN FOOTER */}

      <div className="ft-container">

        {/* BRAND */}

        <div className="ft-brand">

          {/* LOGO */}

          <Link to="/" className="ft-logo">

            <img
              src={logo}
              alt="MM Glass"
            />

          </Link>

          {/* DESCRIPTION */}

          <p>

            M M Glass House delivers
            premium architectural glass
            systems engineered for
            luxury interiors, commercial
            environments, and modern spaces.

          </p>

          {/* SOCIALS */}

          <div className="ft-socials">

            <a href="#">

              <span>Instagram</span>

            </a>

            <a href="#">

              <span>Facebook</span>

            </a>

            <a href="#">

              <span>X</span>

            </a>

          </div>

        </div>

        {/* LINKS */}

        <div className="ft-links">

          {/* COLUMN */}

          <div className="ft-column">

            <h3>

              Navigation

            </h3>

            <ul>

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/ourstory">Our Story</Link>
              </li>

              <li>
                <Link to="/product">Products</Link>
              </li>

              <li>
                <Link to="/gallery">Gallery</Link>
              </li>

              <li>
                <Link to="/contactus">Contact</Link>
              </li>

            </ul>

          </div>

          {/* COLUMN */}

          <div className="ft-column">

            <h3>

              Glass Systems

            </h3>

            <ul>

              <li>
                <Link to="/product">
                  Tempered Glass
                </Link>
              </li>

              <li>
                <Link to="/product">
                  Reflective Glass
                </Link>
              </li>

              <li>
                <Link to="/product">
                  Frosted Glass
                </Link>
              </li>

              <li>
                <Link to="/product">
                  Laminated Glass
                </Link>
              </li>

              <li>
                <Link to="/product">
                  Smart Glass
                </Link>
              </li>

            </ul>

          </div>

          {/* COLUMN */}

          <div className="ft-column">

            <h3>

              Contact

            </h3>

            <div className="ft-contact">

              <span>Phone</span>

              <a href="tel:+919876543210">

                +91 9876543210

              </a>

            </div>

            <div className="ft-contact">

              <span>Email</span>

              <a href="mailto:mmglass@gmail.com">

                mmglass@gmail.com

              </a>

            </div>

            <div className="ft-contact">

              <span>Location</span>

              <p>

                Bangalore, India

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="ft-bottom">

        <p>

          © 2026 M M Glass House.
          All Rights Reserved.

        </p>

        <div className="ft-bottom-links">

          <a href="#">

            Privacy Policy

          </a>

          <a href="#">

            Terms & Conditions

          </a>

        </div>

      </div>

      {/* HUGE TYPO */}

      <div className="ft-bg-text">

        GLASS HOUSE

      </div>

    </footer>
  );
}

export default Footer;