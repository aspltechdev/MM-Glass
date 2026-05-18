// CTA.jsx

import "./CTA.css";

function CTA() {

  return (

    <section className="cta-section">

      {/* BACKGROUND */}

      <div className="cta-gradient"></div>
      <div className="cta-grid"></div>
      <div className="cta-noise"></div>

      {/* LIGHTS */}

      <div className="cta-light cta-light1"></div>
      <div className="cta-light cta-light2"></div>

      {/* VIDEO */}
{/* BACKGROUND IMAGE */}

<div className="cta-bg">

  <img
    src="https://images.pexels.com/photos/4067525/pexels-photo-4067525.jpeg"
    alt=""
  />

</div>

{/* CINEMATIC LAYERS */}

<div className="cta-overlay"></div>

<div className="cta-light"></div>

<div className="cta-vignette"></div>

      {/* CONTENT */}

      <div className="cta-content">

        {/* LABEL */}

        

        {/* TITLE */}

        <h2>

          BUILD SPACES <br />

          THAT FEEL <span>CINEMATIC</span>

        </h2>

        {/* TEXT */}

        <p>

          Elevate modern architecture with
          precision-crafted glass systems engineered
          for luxury, transparency, and timeless spatial experiences.

        </p>

        {/* BUTTONS */}

        <div className="cta-actions">

          <button className="cta-primary">

            Start Your Project

          </button>

          <button className="cta-secondary">

            Explore Products

          </button>

        </div>

      </div>

      {/* FLOATING GLASS PANEL */}

      {/* <div className="cta-floating-panel">

        <div className="cta-panel-shine"></div>

        <span>ARCHITECTURAL GLASS</span>

        <h3>

          12,000+

        </h3>

        <p>

          Premium installations delivered
          across residential and commercial spaces.

        </p>

      </div> */}

      {/* HUGE TEXT */}

      {/* <div className="cta-bg-text">

        GLASS HOUSE

      </div> */}

    </section>
  );
}

export default CTA;