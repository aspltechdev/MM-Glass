import "./CoreFeatures.css";



function CoreFeatures() {


  return (
   <>
   <section className="core-feature-section">

  {/* Heading */}

  {/* <div className="products-heading">
    <button>
      <span className="dot"></span>
      Core Features
    </button>
  </div> */}

  {/* Content */}

  <div className="core-feature-container">

    {/* Left Content */}

    <div className="core-feature-left">

      <h2>
        Innovative glass solutions built for modern spaces
      </h2>

      <p>
        We continuously invest in advanced glass processing
        technologies, research, and innovation to stay ahead of
        evolving architectural and industrial needs.
      </p>

      <button>LEARN MORE →</button>

    </div>

    {/* Right Features */}

    <div className="core-feature-right">

      <div className="feature-progress">
        <div className="circle">90%</div>

        <h3>QUALITY ASSURANCE</h3>

        <p>
          Every glass unit undergoes strict quality checks to
          ensure strength and long-term reliability.
        </p>
      </div>

      <div className="feature-progress">
        <div className="circle">95%</div>

        <h3>SKILLED CRAFTSMANSHIP</h3>

        <p>
          Our experienced team ensures precision in every cut,
          finish, and installation-ready product.
        </p>
      </div>

      <div className="feature-progress">
        <div className="circle">92%</div>

        <h3>PRECISION PROCESSING</h3>

        <p>
          Advanced machinery enables accurate cutting and
          finishing for flawless results.
        </p>
      </div>

      <div className="feature-progress">
        <div className="circle">98%</div>

        <h3>INDUSTRY EXPERTISE</h3>

        <p>
          Years of experience delivering trusted glass solutions
          across architectural and industrial sectors.
        </p>
      </div>

    </div>

  </div>
</section>

   </>
  );
}

export default CoreFeatures;