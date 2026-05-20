// // CTA.jsx

// import "./CTA.css";

// function CTA() {

//   return (

//     <section className="cta-section">

//       {/* BACKGROUND */}

//       <div className="cta-gradient"></div>
//       <div className="cta-grid"></div>
//       <div className="cta-noise"></div>

//       {/* LIGHTS */}

//       <div className="cta-light cta-light1"></div>
//       <div className="cta-light cta-light2"></div>

//       {/* VIDEO */}
// {/* BACKGROUND IMAGE */}

// <div className="cta-bg">

//   <img
//     src="https://images.pexels.com/photos/4067525/pexels-photo-4067525.jpeg"
//     alt=""
//   />

// </div>

// {/* CINEMATIC LAYERS */}

// <div className="cta-overlay"></div>

// <div className="cta-light"></div>

// <div className="cta-vignette"></div>

//       {/* CONTENT */}

//       <div className="cta-content">

//         {/* LABEL */}

        

//         {/* TITLE */}

//         <h2>

//           BUILD SPACES <br />

//           THAT FEEL <span>CINEMATIC</span>

//         </h2>

//         {/* TEXT */}

//         <p>

//           Elevate modern architecture with
//           precision-crafted glass systems engineered
//           for luxury, transparency, and timeless spatial experiences.

//         </p>

//         {/* BUTTONS */}

//         <div className="cta-actions">

//           <button className="cta-primary">

//             Start Your Project

//           </button>

//           <button className="cta-secondary">

//             Explore Products

//           </button>

//         </div>

//       </div>

//       {/* FLOATING GLASS PANEL */}

//       {/* <div className="cta-floating-panel">

//         <div className="cta-panel-shine"></div>

//         <span>ARCHITECTURAL GLASS</span>

//         <h3>

//           12,000+

//         </h3>

//         <p>

//           Premium installations delivered
//           across residential and commercial spaces.

//         </p>

//       </div> */}

//       {/* HUGE TEXT */}

//       {/* <div className="cta-bg-text">

//         GLASS HOUSE

//       </div> */}

//     </section>
//   );
// }

// export default CTA;















import { Link } from "react-router-dom";
import "./CTA.css";

function CTA() {

  return (

    <section className="cta-section">

      {/* =====================================================
          CINEMATIC GLASS BACKGROUND
      ====================================================== */}

      <div className="cta-cinematic-bg">

        {/* GLASS BUILDINGS */}

        <div className="cta-building building-1"></div>

        <div className="cta-building building-2"></div>

        <div className="cta-building building-3"></div>

        {/* REFLECTIONS */}

        <div className="cta-reflection reflection-1"></div>

        <div className="cta-reflection reflection-2"></div>

        <div className="cta-reflection reflection-3"></div>

        {/* ORBS */}

        <div className="cta-orb orb-1"></div>

        <div className="cta-orb orb-2"></div>

        {/* GRID */}

        <div className="cta-grid"></div>

      </div>

      {/* =====================================================
          OVERLAYS
      ====================================================== */}

      <div className="cta-overlay"></div>

      <div className="cta-gradient"></div>

      <div className="cta-vignette"></div>

      <div className="cta-noise"></div>

      {/* HUGE TYPO */}

      <div className="cta-bg-text">

        MM GLASS

      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="cta-container">

        {/* LEFT */}

        <div className="cta-content">

          <span className="cta-label">

            FUTURE ARCHITECTURAL SYSTEMS

          </span>

          <h2>

            BUILD SPACES <br />

            THAT FEEL <span>CINEMATIC</span>

          </h2>

          <p>

            Elevate modern architecture through
            premium glass ecosystems engineered
            for luxury, transparency, precision,
            and immersive spatial experiences.

          </p>

          {/* ACTIONS */}

          <div className="cta-actions">
<Link to="/contactus">
            <button className="cta-primary">

              Start Your Project

            </button>
            </Link>
            <Link to="/contactus">

            <button className="cta-secondary">

              Explore Products

            </button>
            </Link>

          </div>

        </div>

        {/* RIGHT PANEL */}

        <div className="cta-panel">

          {/* SHINE */}

          <div className="cta-panel-shine"></div>

          {/* IMAGE */}

          <div className="cta-panel-image">

            <img
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2200&auto=format&fit=crop"
              alt=""
            />

            <div className="cta-panel-overlay"></div>

          </div>

          {/* CONTENT */}

          <div className="cta-panel-content">

            <span>

              PREMIUM GLASS SYSTEMS

            </span>

            <h3>

              12,000+

            </h3>

            <p>

              Luxury residential and commercial
              installations engineered with
              precision craftsmanship.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;