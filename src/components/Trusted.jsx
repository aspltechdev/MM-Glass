// import "./Trusted.css";

// // Import logo images
// import logo1 from "../assets/brands/AGP.png";
// import logo2 from "../assets/brands/AIS.png";
// import logo3 from "../assets/brands/CrystalEdgeGlass.png";
// import logo4 from "../assets/brands/MirrorEdgeGlass.png";
// import logo5 from "../assets/brands/PrimeShieldGlass.png";
// import logo6 from "../assets/brands/ReflectaGlass.jfif";
// import logo7 from "../assets/brands/Saint-Gobain.png";

// function Trusted() {

//   const logos = [
//     logo1,
//     logo2,
//     logo3,
//     logo4,
//     logo5,
//     logo6,
//     logo7,
//   ];

//   return (
//     <section className="trusted">

//       {/* Heading */}
//       <div className="trusted-title">
//         <p>
//           <span className="dot"></span>
//           Trusted By Leading Brands
//         </p>
//       </div>

//       {/* Two Row Scrolling */}
//       <div className="logo-scroll-wrapper">

//         {/* First Row */}
//         <div className="logo-scroll">
//           <div className="logo-track">
//             {[...logos, ...logos].map((logo, index) => (
//               <div className="logo-box" key={index}>
//                 <img
//                   src={logo}
//                   alt={`logo-${index}`}
//                   className="logo-img"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Second Row */}
//         <div className="logo-scroll">
//           <div className="logo-track reverse">
//             {[...logos, ...logos].map((logo, index) => (
//               <div className="logo-box" key={index}>
//                 <img
//                   src={logo}
//                   alt={`logo-${index}`}
//                   className="logo-img"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>

//     </section>
//   );
// }

// export default Trusted;






// Trusted.jsx

import "./Trusted.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

// LOGOS

import logo1 from "../assets/brands/AGP.png";
import logo2 from "../assets/brands/AIS.png";
import logo3 from "../assets/brands/CrystalEdgeGlass.png";
import logo4 from "../assets/brands/MirrorEdgeGlass.png";
import logo5 from "../assets/brands/PrimeShieldGlass.png";
import logo6 from "../assets/brands/ReflectaGlass.jfif";
import logo7 from "../assets/brands/Saint-Gobain.png";

function Trusted() {

  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);

  /* INTERSECTION */

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };

  }, []);

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
  ];

  return (
    <section
      className={`trusted ${visible ? "show" : ""}`}
      ref={sectionRef}
    >

      {/* BACKGROUND EFFECTS */}
{/* REAL BG IMAGE */}

<div className="trusted-bg-image">

  <img
    src="https://images.pexels.com/photos/575363/pexels-photo-575363.jpeg"
    alt=""
  />

</div>
      {/* <div className="trusted-gradient"></div> */}
      {/* <div className="trusted-gradient"></div> */}
      <div className="trusted-gradient-overlay"></div>
      <div className="trusted-noise"></div>
      <div className="trusted-grid"></div>

      {/* TOP */}

      <div className="trusted-header">

        <div className="trusted-badge">

          <span></span>

          TRUSTED BY INDUSTRY LEADERS

        </div>

        <h2>
          Partnerships Built <br />
          On Precision & Trust
        </h2>

        <p>
          Collaborating with globally recognized architectural,
          construction, and glass technology brands to shape
          modern premium environments.
        </p>

      </div>

      {/* FLOATING GLOW */}

      <div className="ambient-glow"></div>

      {/* SCROLL SECTION */}

      <div className="trusted-slider">

        {/* ROW 1 */}

        <div className="logo-row">

          <div className="logo-track">

            {[...logos, ...logos].map((logo, index) => (

              <div
                className="logo-card"
                key={index}
              >

                <div className="card-glow"></div>

                <img
                  src={logo}
                  alt={`logo-${index}`}
                />

              </div>

            ))}

          </div>

        </div>

        {/* ROW 2 */}

        <div className="logo-row reverse-row">

          <div className="logo-track reverse">

            {[...logos, ...logos].map((logo, index) => (

              <div
                className="logo-card"
                key={index}
              >

                <div className="card-glow"></div>

                <img
                  src={logo}
                  alt={`logo-${index}`}
                />

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Trusted;