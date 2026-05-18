


import { useEffect, useRef, useState } from "react";
import "./Hero.css";

const slides = [
  {
    title: "FUTURE DRIVEN SPATIAL DESIGN",
    subtitle:
      "Immersive architectural ecosystems engineered with intelligent transparency and cinematic AI-enhanced experiences.",
    image:
      "https://images.pexels.com/photos/30662683/pexels-photo-30662683.jpeg",
  },
  {
    title: "DIGITAL LUXURY GLASS SYSTEMS",
    subtitle:
    "Next-generation smart surfaces with premium visual storytelling and futuristic spatial intelligence.",
    image:
      "https://images.pexels.com/photos/10863463/pexels-photo-10863463.jpeg",
  },
  {
    title: "AI POWERED ARCHITECTURE EXPERIENCE",
    subtitle:
    "Cinematic environments blending modern architecture, immersive UI systems and interactive storytelling.",
    image:
      "https://images.pexels.com/photos/9476576/pexels-photo-9476576.jpeg",
  },
];

function Hero() {
  const [active, setActive] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (heroRef.current) {
        heroRef.current.style.setProperty(
          "--parallax",
          `${scroll * 0.4}px`
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero" ref={heroRef}>

      {/* BACKGROUND SLIDES */}
      <div className="background-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`bg-slide ${active === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
        ))}
      </div>

      {/* VIDEO LAYER */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-aerial-view-of-modern-buildings-5176/1080p.mp4"
          type="video/mp4"
        />
      </video>

    
      <div className="hero-overlay"></div>


      <div className="hero-gradient"></div>
      <div className="hero-grid"></div>
      <div className="hero-vignette"></div>
      <div className="hero-noise"></div>

      {/* PARTICLES */}
      {/* <div className="particles">
        {Array.from({ length: 50 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></span>
        ))}
      </div> */}

     
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-content">

        

          <div className="content-slider">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`content-slide ${active === index ? "active" : ""}`}
              >
                <h1>
                  {slide.title.split("").map((line, i) => (
                    <span key={i}>
                      {line}
                      {/* <br /> */}
                    </span>
                  ))}
                </h1>

                <p>{slide.subtitle}</p>
              </div>
            ))}
        </div>

        <div className="hero-actions">
          {/* <button className="primary-btn">
            Enter Future
          </button> */}

          <button className="secondary-btn">
         Get Started
          </button>
        </div>

        {/* DASHBOARD */}
    

      </div>

      {/* RIGHT */}
      <div className="hero-visual">

        <div className="ring ring1"></div>
        <div className="ring ring2"></div>

        <div className="glass-card">

          <img
            src={slides[active].image}
            alt="Futuristic"
          />

          {/* <div className="glass-overlay"></div>
          <div className="glass-reflection"></div> */}

         

        </div>

      </div>

    </div>

      {/* SCROLL INDICATOR */ }
  <div className="scroll-indicator">
    <span></span>
  </div>

    </section >
  );
}

export default Hero;

