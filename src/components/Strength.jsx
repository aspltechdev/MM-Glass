// Strength.jsx

import "./Strength.css";

function Strength() {

  const strengthData = [

    {
      number: "10+",
      label: "Years Experience",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
    },

    {
      number: "12K+",
      label: "Projects Delivered",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    },

    {
      number: "98%",
      label: "Precision Accuracy",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600&auto=format&fit=crop",
    },

  ];

  return (

    <section className="st-section">

      {/* CINEMATIC BACKGROUND */}

      <div className="st-bg">

        <img
          src="https://images.pexels.com/photos/33566795/pexels-photo-33566795.jpeg"
          alt=""
        />

      </div>

      {/* LAYERS */}

      <div className="st-overlay"></div>

      <div className="st-light"></div>

      <div className="st-vignette"></div>

      <div className="st-grid"></div>

      {/* TOP */}

      <div className="st-top">

        <span>

          STRENGTH • PRECISION • INNOVATION

        </span>

        <h2>

          ENGINEERED <br />

          FOR MODERN <span>SPACES</span>

        </h2>

      </div>

      {/* MAIN LAYOUT */}

      <div className="st-layout">

        {/* LEFT */}

        <div className="st-left">

          <div className="st-main-image">

            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2200&auto=format&fit=crop"
              alt=""
            />

            <div className="st-image-overlay"></div>

            <div className="st-floating-card">

              <span>

                ADVANCED MANUFACTURING

              </span>

              <h3>

                Premium architectural
                glass systems crafted
                with precision engineering.

              </h3>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="st-right">

          {/* TEXT BLOCK */}

          <div className="st-text-card">

            <p>

              Our strength comes from a
              relentless focus on precision,
              architectural innovation,
              and high-performance glass
              engineering.

            </p>

            <p>

              Using advanced automated
              systems and modern fabrication
              technologies, we ensure
              exceptional dimensional
              accuracy, durability,
              and optical clarity across
              every glass unit.

            </p>

            <p>

              From luxury residential
              interiors to large-scale
              commercial facades,
              our solutions are engineered
              to elevate modern spaces
              through transparency,
              safety, and refined aesthetics.

            </p>

          </div>

          {/* METRICS */}

          <div className="st-cards">

            {strengthData.map((item, index) => (

              <div
                className="st-card"
                key={index}
              >

                {/* IMAGE */}

                <div className="st-card-image">

                  <img
                    src={item.image}
                    alt=""
                  />

                </div>

                {/* CONTENT */}

                <div className="st-card-content">

                  <h3>

                    {item.number}

                  </h3>

                  <p>

                    {item.label}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* HUGE TYPO */}

      <div className="st-bg-text">

        STRENGTH

      </div>

    </section>
  );
}

export default Strength;