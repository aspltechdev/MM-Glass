
// import "./Footer.css";
// import {
//   FaInstagram,
//   FaLinkedinIn,
//   FaFacebookF,
//   FaXTwitter,
//   FaYoutube
// } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// // import logo from "../assets/mmglass11.png";
// import logo from "../assets/gl.jpeg";

// function Footer() {

//   return (

//     <footer className="ft-section">

//       {/* BACKGROUND */}

//       <div className="ft-gradient"></div>
//       <div className="ft-grid"></div>
//       <div className="ft-noise"></div>

//       {/* LIGHTS */}

//       <div className="ft-light ft-light1"></div>
//       <div className="ft-light ft-light2"></div>

//       {/* TOP CTA */}

    

//       {/* MAIN FOOTER */}

//       <div className="ft-container">

//         {/* BRAND */}

//         <div className="ft-brand">

//           {/* LOGO */}

//           <Link to="/" className="ft-logo">

//             <img
//               src={logo}
//               alt="MM Glass"
//             />

//           </Link>

//           {/* DESCRIPTION */}

//           <p>

//             M M Glass House delivers
//             premium architectural glass
//             systems engineered for
//             luxury interiors, commercial
//             environments, and modern spaces.

//           </p>

//           {/* SOCIALS */}

//           {/* <div className="ft-socials">

//             <a href="#">

//               <span>Instagram</span>

//             </a>
//              <a href="#">

//               <span>LinkedIn</span>

//             </a>

//             <a href="#">

//               <span>Facebook</span>

//             </a>

//             <a href="#">

//               <span>X</span>

//             </a>

//           </div> */}
//           <div className="ft-socials">

//   <a
//     href="https://www.instagram.com/mm_safety_glass?utm_source=qr"
//     target="_blank"
//     rel="noreferrer"
//     className="ft-social-icon"
//   >

//     <FaInstagram />

//   </a>

//   <a
//     href="https://www.linkedin.com/company/mm-safety-glass/"
//     target="_blank"
//     rel="noreferrer"
//     className="ft-social-icon"
//   >

//     <FaLinkedinIn />

//   </a>

//   <a
//     href="https://facebook.com"
//     target="_blank"
//     rel="noreferrer"
//     className="ft-social-icon"
//   >

//     <FaFacebookF />

//   </a>

//   <a
//     href="https://www.youtube.com/@MMSafetyGlass"
//     target="_blank"
//     rel="noreferrer"
//     className="ft-social-icon"
//   >

//     <FaYoutube />

//   </a>

// </div>

//         </div>

//         {/* LINKS */}

//         <div className="ft-links">

//           {/* COLUMN */}

//           <div className="ft-column">

//             <h3>

//               Navigation

//             </h3>

//             <ul>

//               <li>
//                 <Link to="/">Home</Link>
//               </li>

//               <li>
//                 <Link to="/about">About</Link>
//               </li>

            

//               <li>
//                 <Link to="/product">Products</Link>
//               </li>

//               <li>
//                 <Link to="/gallery">Projects</Link>
//               </li>

//               <li>
//                 <Link to="/contactus">Contact</Link>
//               </li>

//             </ul>

//           </div>

//           {/* COLUMN */}

//           <div className="ft-column">

//             <h3>

//               Glass Systems

//             </h3>

//             <ul>

//               <li>
//                 <Link to="/product">
//                   Tempered Glass
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/product">
//                   Reflective Glass
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/product">
//                   Frosted Glass
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/product">
//                   Laminated Glass
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/product">
//                   Smart Glass
//                 </Link>
//               </li>

//             </ul>

//           </div>

//           {/* COLUMN */}

//           <div className="ft-column">

//             <h3>

//               Contact

//             </h3>

//             <div className="ft-contact">

//               <span>Phone</span>

//               <a href="tel:+919606859044">

//                 +91 9606859044 <br>
//                 </br> 
//                 +91 7975833653

//               </a>
//                 {/* <a href="tel:+917975833653">

//                 +91 7975833653

//               </a> */}

//             </div>

//             <div className="ft-contact">

//               <span>Email</span>

//               <a href="mailto:info@mmglass.co.in">

//               info@mmglass.co.in

//               </a>

//             </div>

//             <div className="ft-contact">

//               <span>Location</span>

//               <p>

//                 Bangalore, India

//               </p>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* BOTTOM */}

//       <div className="ft-bottom">

//         <p>

//           © 2026 M M Glass House.
//           All Rights Reserved.

//         </p>

//         <div className="ft-bottom-links">

//           <a href="#">

//             Privacy Policy

//           </a>

//           <a href="#">

//             Terms & Conditions

//           </a>

//         </div>

//       </div>

//       {/* HUGE TYPO */}

//       <div className="ft-bg-text">

//         GLASS HOUSE

//       </div>

//     </footer>
//   );
// }

// export default Footer;




import "./Footer.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaYoutube
} from "react-icons/fa6";
import { Link } from "react-router-dom";
// import logo from "../assets/mmglass11.png";
import logo from "../assets/gl.jpeg";
import brandImage from "../assets/brand.jpeg"; // Add your brand certification image

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

      {/* MAIN FOOTER */}

      <div className="ft-container">

        {/* BRAND */}

        <div className="ft-brand">

          {/* LOGO WITH CERTIFICATION BADGE */}

          <div className="ft-logo-wrapper">
            <Link to="/" className="ft-logo">
              <img
                src={logo}
                alt="MM Glass"
              />
            </Link>
            
            {/* Brand Certification Image near logo */}
            <div className="ft-brand-cert">
              <img 
                src={brandImage} 
                alt="Saint-Gobain MM Safety Glass Certification"
                className="ft-brand-cert-image"
              />
              <div className="ft-brand-cert-glow"></div>
            </div>
          </div>

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

            <a
              href="https://www.instagram.com/mm_safety_glass?utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="ft-social-icon"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/mm-safety-glass/"
              target="_blank"
              rel="noreferrer"
              className="ft-social-icon"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="ft-social-icon"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.youtube.com/@MMSafetyGlass"
              target="_blank"
              rel="noreferrer"
              className="ft-social-icon"
            >
              <FaYoutube />
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
                <Link to="/product">Products</Link>
              </li>

              <li>
                <Link to="/gallery">Projects</Link>
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

              <a href="tel:+919606859044">

                +91 96068590444 <br />
                +91 7975833653

              </a>

            </div>

            <div className="ft-contact">

              <span>Email</span>

              <a href="mailto:info@mmglass.co.in">

                info@mmglass.co.in

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