// CoreFeatures.jsx

import "./CoreFeatures.css";

function CoreFeatures() {

  return (

    <section className="nx-core">

      {/* BACKGROUND VIDEO */}

      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="nx-video"
      >

        <source
          src="https://www.pexels.com/download/video/36103205/"
          type="video/mp4"
        />

      </video>

  
      <div className="nx-overlay"></div>
      <div className="nx-gradient"></div>
      <div className="nx-noise"></div> */}


      {/* BACKGROUND IMAGE */}

<div className="nx-bg">

  <img
    src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2200&auto=format&fit=crop"
    alt=""
  />

</div>

{/* CINEMATIC LAYERS */}

<div className="nx-overlay"></div>

<div className="nx-light"></div>

<div className="nx-vignette"></div>

      {/* HUGE BACKGROUND TEXT */}

      <div className="nx-bg-text">

        PRECISION

      </div>

      {/* FLOATING LIGHT */}

      <div className="nx-light nx-light1"></div>
      <div className="nx-light nx-light2"></div>

      {/* TOP */}

      <div className="nx-top">

        <div className="nx-badge">

          <span></span>

          FUTURE ARCHITECTURAL SYSTEMS

        </div>

        <h2>

          ENGINEERED <br />

          FOR MODERN <br />

          <span>SPATIAL EXPERIENCES</span>

        </h2>

      </div>

      {/* TIMELINE */}

      <div className="nx-timeline">

        {/* LINE */}

        <div className="nx-line"></div>

        {/* ITEM 1 */}

        <div className="nx-item left">

          <div className="nx-content">

            <span>AI PRECISION</span>

            <h3>Intelligent Processing Systems</h3>

            <p>
              AI-enhanced fabrication systems engineered for
              architectural perfection and premium execution.
            </p>

          </div>

          <div className="nx-visual">

            <img
              src="https://images.pexels.com/photos/11961012/pexels-photo-11961012.png"
              alt=""
            />

          </div>

        </div>

        {/* ITEM 2 */}

        <div className="nx-item right">

          <div className="nx-visual">

            <img
              src="https://images.pexels.com/photos/33321753/pexels-photo-33321753.jpeg"
              alt=""
            />

          </div>

          <div className="nx-content">

            <span> SMART FABRICATION</span>

            <h3>Future Manufacturing Ecosystems</h3>

            <p>
              Advanced glass engineering technologies designed
              for futuristic luxury architecture.
            </p>

          </div>

        </div>

        {/* ITEM 3 */}

        <div className="nx-item left">

          <div className="nx-content">

            <span> SPATIAL DESIGN</span>

            <h3>Cinematic Architectural Experiences</h3>

            <p>
              Transforming modern environments through
              immersive premium glass ecosystems.
            </p>

          </div>

          <div className="nx-visual">

            <img
              src="https://images.pexels.com/photos/2606383/pexels-photo-2606383.jpeg"
              alt=""
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default CoreFeatures;