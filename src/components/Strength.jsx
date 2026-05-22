
import "./Strength.css";
import str1 from "../assets/mmglass_6.png"

function Strength() {

  const strengthCards = [

    {
      title: "Precision Engineering",
      text:
        "Advanced fabrication systems delivering flawless dimensional accuracy.",
      image:
        str1,
    },

    {
      title: "Architectural Excellence",
      text:
        "Premium glass ecosystems crafted for luxury interiors and facades.",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    },

    {
      title: "Future Ready Systems",
      text:
        "Modern automated processes ensuring durability and optical clarity.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
    },

  ];

  return (

    <section className="str-section">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="str-bg">

        <img
          src="https://media.istockphoto.com/id/184619832/photo/business-district-at-dusk-london.jpg?b=1&s=612x612&w=0&k=20&c=JiX4z2EUobVhvE8ruPaOv_BjZ6OqaRiBJ_R9B0YzUNk="
          alt=""
        />

      </div>

      <div className="str-overlay"></div>

      <div className="str-gradient"></div>

      <div className="str-grid"></div>

      <div className="str-noise"></div>

      {/* LIGHTS */}

      <div className="str-light str-light1"></div>

      <div className="str-light str-light2"></div>

      {/* =====================================================
          TOP
      ====================================================== */}

      <div className="str-top">

        <span>

          STRENGTH • PERFORMANCE • PRECISION

        </span>

        <h2>

          BUILT FOR <br />

          FUTURE <span>ARCHITECTURE</span>

        </h2>

      </div>

      {/* =====================================================
          MAIN LAYOUT
      ====================================================== */}

      <div className="str-layout">

        {/* =====================================================
            LEFT SIDE
        ====================================================== */}

        <div className="str-left">

          <div className="str-image-box">

            <img
              src={str1}
              alt=""
            />

            <div className="str-image-overlay"></div>

            {/* FLOATING PANEL */}

            <div className="str-floating-panel">

              <span>

                FUTURE SYSTEMS

              </span>

              <h3>

                Intelligent glass solutions
                engineered for modern
                premium environments.

              </h3>

            </div>

          </div>

        </div>

        {/* =====================================================
            RIGHT SIDE
        ====================================================== */}

        <div className="str-right">

          {/* TEXT BLOCK */}

          {/* <div className="str-text-box">

            <div className="str-line"></div>

            <p>

              Our engineering philosophy
              combines precision fabrication,
              modern automation, and
              architectural innovation to
              create glass systems that
              redefine contemporary spaces.

            </p>

            <p>

              Every panel is manufactured
              using high-performance
              technologies ensuring
              structural durability,
              premium clarity, and
              exceptional finishing quality.

            </p>

          </div> */}

          {/* CARDS */}

          <div className="str-cards">

            {strengthCards.map((item, index) => (

              <div
                className="str-card"
                key={index}
              >

                {/* IMAGE */}

                <div className="str-card-image">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="str-card-overlay"></div>

                </div>

                {/* CONTENT */}

                <div className="str-card-content">

                  <h3>

                    {item.title}

                  </h3>

                  <p>

                    {item.text}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* HUGE TEXT */}

      <div className="str-bg-text">

        STRENGTH

      </div>

    </section>
  );
}

export default Strength;