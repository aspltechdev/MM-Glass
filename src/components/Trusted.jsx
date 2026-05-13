import "./Trusted.css";

// Import logo images
import logo1 from "../assets/brands/AGp.png";
import logo2 from "../assets/brands/AIS.png";
import logo3 from "../assets/brands/CrystalEdgeGlass.png";
import logo4 from "../assets/brands/MirrorEdgeGlass.png";
import logo5 from "../assets/brands/PrimeShieldGlass.png";
import logo6 from "../assets/brands/ReflectaGlass.jfif";
import logo7 from "../assets/brands/Saint-Gobain.png";

function Trusted() {

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
    <section className="trusted">

      {/* Heading */}
      <div className="trusted-title">
        <p>
          <span className="dot"></span>
          Trusted By Leading Brands
        </p>
      </div>

      {/* Two Row Scrolling */}
      <div className="logo-scroll-wrapper">

        {/* First Row */}
        <div className="logo-scroll">
          <div className="logo-track">
            {[...logos, ...logos].map((logo, index) => (
              <div className="logo-box" key={index}>
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  className="logo-img"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="logo-scroll">
          <div className="logo-track reverse">
            {[...logos, ...logos].map((logo, index) => (
              <div className="logo-box" key={index}>
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  className="logo-img"
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