import "./AboutGallery.css";

function AboutGallery() {

  const images = [

    "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1800&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1800&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1800&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1800&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1800&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=1800&auto=format&fit=crop",

  ];

  return (

    <section className="ag-section">

      {/* BG */}

      <div className="ag-bg-image">

  <img
    src="https://images.pexels.com/photos/36423820/pexels-photo-36423820.jpeg"
    alt=""
  />

</div>


<div className="ag-gradient-overlay"></div>
    <div className="ag-grid"></div>
      {/* <div className="ag-bg"></div> */}

      <div className="ag-overlay"></div>

      <div className="ag-light"></div>

      {/* TOP */}

      <div className="ag-top">

        <span>

          INSIDE OUR ECOSYSTEM

        </span>

        <h2>

          Sneak peek into
          our glass world.

        </h2>

      </div>

      {/* ROW 1 */}

      <div className="ag-row row-right">

        <div className="ag-track">

          {[...images, ...images].map((img, index) => (

            <div
              className="ag-card"
              key={index}
            >

              <img
                src={img}
                alt=""
              />

              <div className="ag-card-overlay"></div>

            </div>

          ))}

        </div>

      </div>

      {/* ROW 2 */}

      <div className="ag-row row-left">

        <div className="ag-track">

          {[...images, ...images].map((img, index) => (

            <div
              className="ag-card large"
              key={index}
            >

              <img
                src={img}
                alt=""
              />

              <div className="ag-card-overlay"></div>

            </div>

          ))}

        </div>

      </div>

      {/* FLOATING GLASS PANEL */}

      <div className="ag-floating-panel">

        <span>

          CINEMATIC MANUFACTURING

        </span>

        <h3>

          Precision-crafted
          architectural glass systems.

        </h3>

      </div>

    </section>
  );
}

export default AboutGallery;