import "./Trusted.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

/* LOGOS */

import logo1 from "../assets/brands/AGP.png";
import logo2 from "../assets/brands/AIS.png";
import logo3 from "../assets/brands/CrystalEdgeGlass.png";
import logo4 from "../assets/brands/MirrorEdgeGlass.png";
import logo5 from "../assets/brands/PrimeShieldGlass.png";
import logo6 from "../assets/brands/ReflectaGlass.jfif";
import logo7 from "../assets/brands/Saint-Gobain.png";

function Trusted() {

  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);

  /* REVEAL */

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setVisible(true);
        }

      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {

      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

    };

  }, []);

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

    <section
      className={`trusted-section ${visible ? "trusted-show" : ""}`}
      ref={sectionRef}
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="trusted-bg">

        <img
          src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
          alt=""
        />

      </div>

      {/* OVERLAY */}

      <div className="trusted-overlay"></div>

      {/* GRADIENT */}

      <div className="trusted-gradient"></div>

      {/* NOISE */}

      <div className="trusted-noise"></div>

      {/* LIGHTS */}

      <div className="trusted-light light-1"></div>

      <div className="trusted-light light-2"></div>

      {/* PARTICLES */}

      <div className="trusted-particles">

        {Array.from({ length: 40 }).map((_, i) => (

          <span
            key={i}
            className="trusted-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></span>

        ))}

      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="trusted-header">

        <div className="trusted-badge">

          <span></span>

          GLOBAL BRAND PARTNERS

        </div>

        <h2>

        BUILT ON
<br></br>
          <span>TRUST</span>

        </h2>

        <p>

          Collaborating with globally recognized glass,
          architecture, and engineering brands to shape
          futuristic premium environments.

        </p>

      </div>

      {/* =====================================================
          RUNNING LOGOS
      ====================================================== */}

      <div className="trusted-marquee">

        <div className="trusted-track">

          {[...logos, ...logos, ...logos].map((logo, index) => (

            <div
              className="trusted-card"
              key={index}
            >

              {/* GLOW */}

              <div className="trusted-card-glow"></div>

              {/* LOGO */}

              <img
                src={logo}
                alt={`brand-${index}`}
              />

            </div>

          ))}

        </div>

      </div>

      {/* =====================================================
          FLOATING PANEL
      ====================================================== */}

      {/* <div className="trusted-panel">

        <div className="trusted-panel-glow"></div>


        <h3>50+ Strategic Collaborations</h3>

        <p>

          Engineered partnerships built on innovation,
          precision fabrication, and architectural trust.

        </p>

      </div> */}

      {/* HUGE TYPO */}

      <div className="trusted-bg-text">

        TRUSTED

      </div>

    </section>
  );
}

export default Trusted;