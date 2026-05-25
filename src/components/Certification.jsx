import "./Certification.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import cert1 from "../assets/certifications/ANSI.jfif";
import cert2 from "../assets/certifications/ASTM.jfif";
import cert3 from "../assets/certifications/BIS.png";
import cert4 from "../assets/certifications/GSI.png";
import cert5 from "../assets/brands/Saint-Gobain.png";
import cert6 from "../assets/certifications/SGS.png";
import { Link } from "react-router-dom";

function Certification() {

  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);

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

  const certifications = [

    {
      image: cert1,
      title: "ANSI Certified",
      subtitle: "Global Quality Systems",
    },

    {
      image: cert2,
      title: "ASTM Standards",
      subtitle: "Precision Tested",
    },

    {
      image: cert3,
      title: "BIS Approved",
      subtitle: "Trusted Manufacturing",
    },

    {
      image: cert4,
      title: "GSI Verification",
      subtitle: "Future Glass Systems",
    },

    {
      image: cert5,
      title: "Saint-Gobain",
      subtitle: "Co-branding Partner",
    },

    {
      image: cert6,
      title: "SGS Verified",
      subtitle: "Premium Inspection",
    },

  ];

  return (

    <section
      className={`crt-section ${visible ? "crt-show" : ""}`}
      ref={sectionRef}
    >

      {/* BACKGROUND */}

      <div className="crt-bg">

        <img
          src="https://images.pexels.com/photos/29644165/pexels-photo-29644165.jpeg"
          alt=""
        />

      </div>

      <div className="crt-overlay"></div>

      <div className="crt-gradient"></div>

      <div className="crt-noise"></div>

      {/* LIGHTS */}

      <div className="crt-light crt-light1"></div>

      <div className="crt-light crt-light2"></div>

      {/* PARTICLES */}

      <div className="crt-particles">

        {Array.from({ length: 35 }).map((_, i) => (

          <span
            key={i}
            className="crt-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></span>

        ))}

      </div>

      {/* =====================================================
          LEFT CONTENT
      ====================================================== */}

      <div className="crt-content-side">

        <div className="crt-badge">

          <span></span>

          INTERNATIONAL CERTIFICATIONS

        </div>

        <h2>

          VERIFIED <br />

          FOR <span>PRECISION</span>

        </h2>

        <p>

          Every architectural glass system is engineered
          under internationally recognized quality standards
          ensuring futuristic performance, durability,
          safety, and premium manufacturing excellence.

        </p>

        {/* STATS */}

        <div className="crt-stats">

          <div className="crt-stat-card">

            <h3>6+</h3>

            <span>Global Certifications</span>

          </div>

          <div className="crt-stat-card">

            <h3>98%</h3>

            <span>Quality Accuracy</span>

          </div>

        </div>

        {/* BUTTON */}
        <Link to="/contactus">

        <button className="crt-btn">

          Explore Standards

        </button>
        </Link>

      </div>

      {/* =====================================================
          RIGHT SCROLLING CERTIFICATES
      ====================================================== */}

      <div className="crt-scroll-side">

        {/* COLUMN 1 */}

        <div className="crt-column">

          <div className="crt-track track-down">

            {[...certifications, ...certifications].map((item, index) => (

              <div
                className="crt-card"
                key={index}
              >

                {/* GLOW */}

                <div className="crt-card-glow"></div>

                {/* IMAGE */}

                <div className="crt-image-wrap">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                </div>

                {/* CONTENT */}

                <div className="crt-card-content">

                  <h3>{item.title}</h3>

                  <p>{item.subtitle}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* COLUMN 2 */}

        <div className="crt-column column-hide-mobile">

          <div className="crt-track track-up">

            {[...certifications, ...certifications].map((item, index) => (

              <div
                className="crt-card"
                key={index}
              >

                {/* GLOW */}

                <div className="crt-card-glow"></div>

                {/* IMAGE */}

                <div className="crt-image-wrap">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                </div>

                {/* CONTENT */}

                <div className="crt-card-content">

                  <h3>{item.title}</h3>

                  <p>{item.subtitle}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* HUGE TEXT */}

      <div className="crt-bg-text">

        CERTIFIED

      </div>

    </section>
  );
}

export default Certification;