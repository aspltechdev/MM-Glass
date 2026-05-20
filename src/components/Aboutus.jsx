



// // import "./Aboutus.css";
// // import { useEffect, useRef, useState } from "react";

// // function Aboutus() {

// //   const aboutRef = useRef(null);

// //   const [isVisible, setIsVisible] = useState(false);

// //   /* SCROLL REVEAL */

// //   useEffect(() => {

// //     const observer = new IntersectionObserver(
// //       ([entry]) => {

// //         if (entry.isIntersecting) {
// //           setIsVisible(true);
// //         }
// //       },
// //       {
// //         threshold: 0.2,
// //       }
// //     );

// //     if (aboutRef.current) {
// //       observer.observe(aboutRef.current);
// //     }

// //     return () => {
// //       if (aboutRef.current) {
// //         observer.unobserve(aboutRef.current);
// //       }
// //     };

// //   }, []);

// //   return (

// //     <section
// //       className={`ae-section ${isVisible ? "ae-show" : ""}`}
// //       ref={aboutRef}
// //     >

// //       {/* BACKGROUND */}

// //       {/* <div className="ae-bg"></div> */}

// //       {/* REAL BACKGROUND IMAGE */}

// // <div className="ae-bg-image">

// //   <img
// //     // src="https://images.pexels.com/photos/9317997/pexels-photo-9317997.jpeg"
// //     src="https://images.pexels.com/photos/270480/pexels-photo-270480.jpeg"
// //     alt=""
// //   />

// // </div>
// // <div className="ae-bg-gradient"></div>
// //       <div className="ae-grid"></div>
// //       <div className="ae-noise"></div>

// //       {/* GLOW LIGHTS */}

// //       <div className="ae-light ae-light1"></div>
// //       <div className="ae-light ae-light2"></div>

// //       {/* LEFT STORY */}

// //       <div className="ae-story">

// //         <div className="ae-badge">

// //           <span></span>

// //           SPATIAL GLASS INTELLIGENCE

// //         </div>

// //         <h2>

// //           WE BUILD <br />

// //           <span>ARCHITECTURAL</span> <br />

// //           EXPERIENCES <br />

// //           THROUGH <br />

// //           GLASS.

// //         </h2>

// //         <p>
// //           M M Glass House creates futuristic glass systems,
// //           premium cladding environments, and immersive
// //           architectural solutions engineered for modern
// //           residential and commercial ecosystems.
// //         </p>

// //         {/* ACTIONS */}

// //         <div className="ae-actions">

// //           <button className="ae-primary-btn">
// //             Explore Spaces
// //           </button>

// //           <button className="ae-secondary-btn">
// //             Watch Story
// //           </button>

// //         </div>

// //         {/* FLOATING DATA */}

// //         {/* <div className="ae-data-grid">

// //           <div className="ae-data-card">

// //             <h3>500+</h3>

// //             <span>Projects Delivered</span>

// //           </div>

// //           <div className="ae-data-card">

// //             <h3>9+</h3>

// //             <span>Years Excellence</span>

// //           </div>
// //            <div className="ae-data-card">

// //             <h3>2M+</h3>

// //             <span>Units Sold</span>

// //           </div>
// //            <div className="ae-data-card">

// //             <h3>50+</h3>

// //             <span>Variants</span>

// //           </div>

// //           <div className="ae-data-card">

// //             <h3>98%</h3>

// //             <span>Client Satisfaction</span>

// //           </div>

// //         </div> */}

// //       </div>

// //       {/* RIGHT VISUAL */}

// //       <div className="ae-visual">

// //         {/* MAIN IMAGE */}

// //         <div className="ae-main-frame">

// //           <img
// //             src="https://images.pexels.com/photos/270480/pexels-photo-270480.jpeg"
// //             alt=""
// //           />

// //           <div className="ae-image-overlay"></div>

// //           <div className="ae-reflection"></div>

// //           <div className="ae-frame-content">

// //             {/* <span>FUTURE ARCHITECTURE</span>

// //             <h3>HyperSpatial Systems</h3> */}

// //           </div>

// //         </div>

// //         {/* FLOATING AI PANEL */}

// //         <div className="ae-floating-panel panel-top">

// //           <div className="ae-panel-glow"></div>

// //           <span>AI ARCHITECTURE</span>

// //           <h4>Smart Glass.</h4>

// //           <p>
// //             Intelligent Glass Ecosystems powered by
// //             modern engineering.
// //           </p>

// //         </div>

// //         {/* FLOATING DASHBOARD */}

// //         <div className="ae-floating-panel panel-bottom">

// //           <div className="ae-panel-glow"></div>

// //           <span>LIVE METRICS</span>

// //           <h4>98.2%</h4>

// //           <p>Performance Efficiency</p>

// //         </div>

// //       </div>

// //       {/* HUGE BACKGROUND TYPO */}

// //       <div className="ae-background-text">

// //         MM GLASS

// //       </div>

// //     </section>
// //   );
// // }

// // export default Aboutus;








// import "./Aboutus.css";
// import { useEffect, useRef, useState } from "react";

// function Aboutus() {

//   const aboutRef = useRef(null);

//   const [isVisible, setIsVisible] = useState(false);

//   /* REVEAL */

//   useEffect(() => {

//     const observer = new IntersectionObserver(
//       ([entry]) => {

//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }

//       },
//       {
//         threshold: 0.2,
//       }
//     );

//     if (aboutRef.current) {
//       observer.observe(aboutRef.current);
//     }

//     return () => {

//       if (aboutRef.current) {
//         observer.unobserve(aboutRef.current);
//       }

//     };

//   }, []);

//   return (

//     <section
//       className={`ae-section ${isVisible ? "ae-show" : ""}`}
//       ref={aboutRef}
//     >

//       {/* BACKGROUND */}

//       <div className="ae-bg-image">

//         <img
//           src="https://images.pexels.com/photos/12842631/pexels-photo-12842631.jpeg"
//           alt=""
//         />

//       </div>

//       <div className="ae-overlay"></div>

//       <div className="ae-gradient"></div>

//       <div className="ae-noise"></div>

//       {/* FLOATING LIGHTS */}

//       <div className="ae-light ae-light1"></div>

//       <div className="ae-light ae-light2"></div>

//       {/* LEFT SIDE */}

//       <div className="ae-content">

//         <div className="ae-badge">

//           <span></span>

//           NEXT GEN GLASS SYSTEMS

//         </div>

//         <h2>

// DESIGNING <br />

// <span>SPACES</span> <br />

// THAT FEEL <br />

// FUTURISTIC.

//         </h2>

//         <p>

//           We engineer premium architectural glass systems,
//           luxury façades, and immersive spatial environments
//           that transform modern residential and commercial
//           experiences.

//         </p>

//         {/* STATS */}



//         {/* BUTTONS */}

//         <div className="ae-buttons">

//           <button className="ae-btn-primary">

//             Explore Projects

//           </button>

//           <button className="ae-btn-secondary">

//             View Story

//           </button>

//         </div>

//       </div>

//       {/* RIGHT SIDE */}

//       <div className="ae-gallery">

//         {/* BIG CARD */}

//         <div className="ae-card ae-card-large">

//           <img
//             src="https://media.istockphoto.com/id/537956543/photo/glass-cubes.jpg?b=1&s=612x612&w=0&k=20&c=KjrMep3vWd5-PauwtwX3hN6WW2SQ7D9IDH5JPJvZUMo="
//             alt=""
//           />

//           <div className="ae-card-overlay"></div>

//           <div className="ae-card-content">

//             <span>FUTURE ARCHITECTURE</span>

//             <h3> Glass Spaces</h3>

//           </div>

//         </div>

//         {/* SMALL CARD */}

//         <div className="ae-card ae-card-small">

//           <img
//             src="https://images.pexels.com/photos/32421760/pexels-photo-32421760.png"
//             alt=""
//           />

//           <div className="ae-card-overlay"></div>

//           <div className="ae-card-content">

//             <span>SMART SYSTEMS</span>

//             <h3>Minimal Elegance</h3>

//           </div>

//         </div>

//         {/* FLOAT PANEL */}

//         <div className="ae-floating-box">

//           <div className="ae-box-glow"></div>



//           <h4>Spatial Intelligence</h4>

//           <p>

//             Precision engineered glass ecosystems
//             for futuristic environments.

//           </p>

//         </div>

//       </div>

//       {/* HUGE TEXT */}

//       <div className="ae-bg-text">

//         MM GLASS

//       </div>

//     </section>
//   );
// }

// export default Aboutus;




















import "./Aboutus.css";
import { useEffect, useRef, useState } from "react";
import vide01 from "../assets/herovideo.mp4";
import image1 from "../assets/aboutm.png";
import { Link } from "react-router-dom";

function Aboutus() {

  const aboutRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  /* =====================================================
      REVEAL
  ====================================================== */

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

      {/* =====================================================
          CINEMATIC VIDEO BACKGROUND
      ====================================================== */}

      <div className="ae-video-wrap">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="ae-video"
        >

          <source
            src={vide01}
            type="video/mp4"
          />

        </video>

      </div>

      {/* OVERLAYS */}

      <div className="ae-overlay"></div>

      <div className="ae-gradient"></div>

      <div className="ae-grid"></div>

      <div className="ae-noise"></div>

      {/* LIGHTS */}

      <div className="ae-light ae-light1"></div>

      <div className="ae-light ae-light2"></div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="ae-container">

        {/* LEFT */}

        <div className="ae-content">

          <div className="ae-badge">

            <span></span>



          </div>

          <h2>

            DESIGNING <br />

            <span>SPACES</span> <br />

            THAT FEEL <br />

            FUTURISTIC.

          </h2>

          <p>

            We create immersive architectural glass
            ecosystems engineered with precision,
            cinematic aesthetics, and futuristic
            design language for luxury residential
            and commercial environments.

          </p>

          {/* STATS */}

          {/* <div className="ae-stats">

            <div className="ae-stat">

              <h3>12K+</h3>

              <span>Projects Delivered</span>

            </div>

            <div className="ae-stat">

              <h3>98%</h3>

              <span>Precision Accuracy</span>

            </div>

            <div className="ae-stat">

              <h3>10+</h3>

              <span>Years Excellence</span>

            </div>

          </div> */}

          {/* BUTTONS */}

          <div className="ae-buttons">
            <Link to ="/about">

            <button className="ae-btn-primary">

              Explore Projects

            </button>
            </Link>

            {/* <button className="ae-btn-secondary">

              Watch Story

            </button> */}

          </div>

        </div>

        {/* RIGHT */}

        <div className="ae-visual">

      

          {/* <div className="ae-main-card">

            <img
              src={image1}
              alt="About image"
            />

            <div className="ae-card-overlay"></div>

            <div className="ae-main-content">

              <span>FUTURE GLASS SYSTEMS</span>

              <h3>

                Intelligent Architectural
                Glass Environments

              </h3>

            </div>

          </div> */}

          {/* FLOATING GLASS CARD */}

          <div className="ae-floating-card card-one">

            <div className="ae-card-glow"></div>

            <span>SMART SPACES</span>

            <h4>Minimal Luxury</h4>

            <p>

              Future-ready glass systems
              designed for immersive
              spatial experiences.

            </p>

          </div>

          {/* FLOATING GLASS CARD */}

          <div className="ae-floating-card card-two">

            <div className="ae-card-glow"></div>

            <span>AI PRECISION</span>

            <h4>98.2%</h4>

            <p>

              Architectural fabrication
              engineered with advanced
              automated systems.

            </p>

          </div>

        </div>

      </div>

      {/* HUGE TYPO */}

      <div className="ae-bg-text">

        MM GLASS

      </div>

    </section>
  );
}

export default Aboutus;