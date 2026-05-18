// // // About.jsx

// // import "./Aboutus.css";

// // import {
// //   useEffect,
// //   useRef,
// //   useState,
// // } from "react";

// // function Aboutus() {

// //   const sectionRef = useRef(null);

// //   const [visible, setVisible] = useState(false);

// //   /* REVEAL */

// //   useEffect(() => {

// //     const observer = new IntersectionObserver(
// //       ([entry]) => {

// //         if (entry.isIntersecting) {
// //           setVisible(true);
// //         }
// //       },
// //       {
// //         threshold: 0.2,
// //       }
// //     );

// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current);
// //     }

// //     return () => {
// //       if (sectionRef.current) {
// //         observer.unobserve(sectionRef.current);
// //       }
// //     };

// //   }, []);

// //   return (
// //     <section
// //       className={`about ${visible ? "show" : ""}`}
// //       ref={sectionRef}
// //     >

// //       {/* BACKGROUND EFFECTS */}

// //       <div className="about-gradient"></div>
// //       <div className="about-grid"></div>
// //       <div className="about-noise"></div>
// //       <div className="ambient-light"></div>

// //       {/* LEFT SIDE */}

// //       <div className="about-content">

// //         <div className="about-badge">

// //           <span></span>

// //           ABOUT MM GLASS HOUSE

// //         </div>

// //         <h2>
// //           Crafting Modern <br />
// //           Spaces Through <br />
// //           Precision Glass
// //         </h2>

// //         <p>
// //           M M Glass House provides high-quality cladding services,
// //           glass partitions, and customized glass solutions for
// //           residential and commercial spaces.
// //         </p>

// //         <p>
// //           We focus on delivering durable products with
// //           professional workmanship and timely service,
// //           ensuring every project reflects innovation,
// //           reliability, and premium architectural aesthetics.
// //         </p>

// //         {/* METRICS */}

// //         <div className="about-metrics">

// //           <div className="metric-card">

// //             <h3>500+</h3>

// //             <span>Projects Delivered</span>

// //           </div>

// //           <div className="metric-card">

// //             <h3>25+</h3>

// //             <span>Years Experience</span>

// //           </div>

// //           <div className="metric-card">

// //             <h3>98%</h3>

// //             <span>Client Satisfaction</span>

// //           </div>

// //         </div>

// //       </div>

// //       {/* RIGHT SIDE */}

// //       <div className="about-visual">

// //         {/* MAIN CARD */}

// //         <div className="glass-card main-card">

// //           <img
// //             src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600&auto=format&fit=crop"
// //             alt=""
// //           />

// //           <div className="card-overlay"></div>

// //           <div className="card-content">

// //             <span>ARCHITECTURAL SYSTEMS</span>

// //             <h3>Premium Glass Solutions</h3>

// //           </div>

// //           <div className="glass-reflection"></div>

// //         </div>

// //         {/* FLOATING CARD */}

// //         <div className="glass-card floating-card">

// //           <h4>Modern Excellence</h4>

// //           <p>
// //             Intelligent glass craftsmanship
// //             engineered for contemporary spaces.
// //           </p>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }

// // export default Aboutus; 



// // About.jsx

// import "./Aboutus.css";
// import { useEffect, useRef, useState } from "react";

// function Aboutus() {

//   const sectionRef = useRef(null);

//   const [visible, setVisible] = useState(false);

//   /* REVEAL */

//   useEffect(() => {

//     const observer = new IntersectionObserver(
//       ([entry]) => {

//         if (entry.isIntersecting) {
//           setVisible(true);
//         }
//       },
//       {
//         threshold: 0.2,
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };

//   }, []);

//   return (

//     <section
//       className={`about ${visible ? "show" : ""}`}
//       ref={sectionRef}
//     >

//       {/* BACKGROUND */}

//       <div className="about-bg"></div>
//       <div className="about-gradient"></div>
//       <div className="about-noise"></div>
//       <div className="about-grid"></div>

//       {/* FLOATING GLOW */}

//       <div className="ambient-light light-1"></div>
//       <div className="ambient-light light-2"></div>

//       {/* LEFT SIDE */}

//       <div className="about-left">

//         <div className="about-badge">

//           <span></span>

//           SPATIAL GLASS SYSTEMS

//         </div>

//         <h2>

//           WE DON'T <br />

//           INSTALL <span>GLASS.</span> <br />

//           WE ENGINEER <br />

//           <span>EXPERIENCES.</span>

//         </h2>

//         <p>
//           M M Glass House delivers premium cladding systems,
//           architectural partitions, and custom-engineered glass
//           experiences designed for modern residential and
//           commercial environments.
//         </p>

//         <div className="about-actions">

//           <button className="primary-btn">
//             Explore Projects
//           </button>

//           <button className="secondary-btn">
//             Our Story
//           </button>

//         </div>

//       </div>

//       {/* RIGHT SIDE */}

//       <div className="about-right">

//         {/* MAIN CARD */}

//         <div className="main-card">

//           <img
//             src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000&auto=format&fit=crop"
//             alt=""
//           />

//           <div className="card-overlay"></div>

//           <div className="card-content">

//             <span>ARCHITECTURAL INTELLIGENCE</span>

//             <h3>Future-Driven Spaces</h3>

//           </div>

//           <div className="card-reflection"></div>

//         </div>

//         {/* FLOATING AI PANEL */}

//         <div className="floating-panel panel-1">

//           <span>AI SPATIAL SYSTEMS</span>

//           <h4>98%</h4>

//           <p>Client Satisfaction</p>

//         </div>

//         {/* FLOATING PANEL */}

//         <div className="floating-panel panel-2">

//           <span>GLOBAL EXECUTION</span>

//           <h4>500+</h4>

//           <p>Projects Delivered</p>

//         </div>

//       </div>

//       {/* HUGE BACK TEXT */}

//       <div className="background-text">

//         MM GLASS

//       </div>

//     </section>
//   );
// }

// export default Aboutus;




// Aboutus.jsx





import "./Aboutus.css";
import { useEffect, useRef, useState } from "react";

function Aboutus() {

  const aboutRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  /* SCROLL REVEAL */

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };

  }, []);

  return (

    <section
      className={`ae-section ${isVisible ? "ae-show" : ""}`}
      ref={aboutRef}
    >

      {/* BACKGROUND */}

      {/* <div className="ae-bg"></div> */}

      {/* REAL BACKGROUND IMAGE */}

<div className="ae-bg-image">

  <img
    src="https://images.pexels.com/photos/37200723/pexels-photo-37200723.jpeg"
    alt=""
  />

</div>
<div className="ae-bg-gradient"></div>
      <div className="ae-grid"></div>
      <div className="ae-noise"></div>

      {/* GLOW LIGHTS */}

      <div className="ae-light ae-light1"></div>
      <div className="ae-light ae-light2"></div>

      {/* LEFT STORY */}

      <div className="ae-story">

        <div className="ae-badge">

          <span></span>

          SPATIAL GLASS INTELLIGENCE

        </div>

        <h2>

          WE BUILD <br />

          <span>ARCHITECTURAL</span> <br />

          EXPERIENCES <br />

          THROUGH <br />

          GLASS.

        </h2>

        <p>
          M M Glass House creates futuristic glass systems,
          premium cladding environments, and immersive
          architectural solutions engineered for modern
          residential and commercial ecosystems.
        </p>

        {/* ACTIONS */}

        <div className="ae-actions">

          <button className="ae-primary-btn">
            Explore Spaces
          </button>

          <button className="ae-secondary-btn">
            Watch Story
          </button>

        </div>

        {/* FLOATING DATA */}

        <div className="ae-data-grid">

          <div className="ae-data-card">

            <h3>500+</h3>

            <span>Projects Delivered</span>

          </div>

          <div className="ae-data-card">

            <h3>9+</h3>

            <span>Years Excellence</span>

          </div>
           <div className="ae-data-card">

            <h3>2M+</h3>

            <span>Units Sold</span>

          </div>
           <div className="ae-data-card">

            <h3>50+</h3>

            <span>Variants</span>

          </div>

          <div className="ae-data-card">

            <h3>98%</h3>

            <span>Client Satisfaction</span>

          </div>

        </div>

      </div>

      {/* RIGHT VISUAL */}

      <div className="ae-visual">

        {/* MAIN IMAGE */}

        <div className="ae-main-frame">

          <img
            src="https://images.pexels.com/photos/17131943/pexels-photo-17131943.jpeg"
            alt=""
          />

          <div className="ae-image-overlay"></div>

          <div className="ae-reflection"></div>

          <div className="ae-frame-content">

            {/* <span>FUTURE ARCHITECTURE</span>

            <h3>HyperSpatial Systems</h3> */}

          </div>

        </div>

        {/* FLOATING AI PANEL */}

        <div className="ae-floating-panel panel-top">

          <div className="ae-panel-glow"></div>

          <span>AI ARCHITECTURE</span>

          <h4>Smart Glass.</h4>

          <p>
            Intelligent Glass Ecosystems powered by
            modern engineering.
          </p>

        </div>

        {/* FLOATING DASHBOARD */}

        <div className="ae-floating-panel panel-bottom">

          <div className="ae-panel-glow"></div>

          <span>LIVE METRICS</span>

          <h4>98.2%</h4>

          <p>Performance Efficiency</p>

        </div>

      </div>

      {/* HUGE BACKGROUND TYPO */}

      <div className="ae-background-text">

        MM GLASS

      </div>

    </section>
  );
}

export default Aboutus;