import { useEffect, useRef, useState, useCallback } from "react";
import "./Hero.css";

const slides = [
  {
    title: "ARCHITECTURE IN LIGHT",
    subtitle:
      "Where precision glass meets visionary design — creating spaces that breathe with transparency and light.",
    image:
      "https://images.pexels.com/photos/9255001/pexels-photo-9255001.jpeg",
    accent: "#64b5f6",
  },
  {
    title: "CLARITY MEETS CRAFTSMANSHIP",
    subtitle:
      "Intelligent glass systems that transform environments through seamless integration of technology and elegance.",
    image:
      "https://images.pexels.com/photos/19599880/pexels-photo-19599880.jpeg",
    accent: "#82b1ff",
  },
  {
    title: "WHERE GLASS BECOMES ART",
    subtitle:
      "Engineering emotional connections through light-responsive surfaces and architectural innovation.",
    image:
      "https://images.pexels.com/photos/6016190/pexels-photo-6016190.jpeg",
    accent: "#b388ff",
  },
];

function Hero() {
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const contentRef = useRef(null);
  const cursorRef = useRef(null);
  const intervalRef = useRef(null);
  const parallaxLayersRef = useRef([]);

  // Auto-slide with smooth transition
  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
  }, []);

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, [resetInterval]);

  // Scroll-based parallax and reveal
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        const progress = Math.min(scroll / (heroHeight * 0.8), 1);
        setScrollProgress(progress);
        
        heroRef.current.style.setProperty("--scroll-progress", progress);
        heroRef.current.style.setProperty("--parallax-primary", `${scroll * 0.5}px`);
        heroRef.current.style.setProperty("--parallax-secondary", `${scroll * 0.3}px`);
        heroRef.current.style.setProperty("--parallax-tertiary", `${scroll * 0.15}px`);
      }

      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        setIsVisible(rect.top < windowHeight * 0.8 && rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      
      if (cardRef.current && window.innerWidth > 1024) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePos({ x, y });
        
        const isNear = 
          e.clientX > rect.left - 100 && 
          e.clientX < rect.right + 100 && 
          e.clientY > rect.top - 100 && 
          e.clientY < rect.bottom + 100;
        
        setIsHovering(isNear);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 3D card transform
  const cardTransform = {
    transform: `
      perspective(1500px) 
      rotateY(${(mousePos.x - 0.5) * 12}deg) 
      rotateX(${(mousePos.y - 0.5) * -12}deg)
      translateZ(${isHovering ? 30 : 0}px)
    `,
    transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
  };

  const goToSlide = (index) => {
    setActive(index);
    resetInterval();
  };

  return (
    <section className="hero" ref={heroRef}>
      {/* Custom Cursor */}
      <div 
        ref={cursorRef} 
        className={`custom-cursor ${isHovering ? 'cursor-hover' : ''}`}
      >
        <div className="cursor-dot" />
        <div className="cursor-ring" />
      </div>

      {/* Ambient Light Effects */}
      <div className="ambient-light ambient-1" />
      <div className="ambient-light ambient-2" />
      <div className="ambient-light ambient-3" />

      {/* Background Slides */}
      <div className="background-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`bg-slide ${active === index ? "active" : ""}`}
            style={{ 
              backgroundImage: `url(${slide.image})`,
              '--slide-accent': slide.accent 
            }}
          />
        ))}
        <div className="bg-gradient-overlay" />
      </div>

      {/* Atmospheric Layers */}
      <div className="atmosphere">
        <div className="fog-layer fog-1" />
        <div className="fog-layer fog-2" />
        <div className="light-rays" />
        <div className="dust-particles" />
      </div>

      {/* Geometric Grid */}
      <div className="geometric-grid">
        <div className="grid-lines" />
        <div className="grid-dots" />
      </div>

      {/* Floating Orbs */}
      <div className="orbs-container">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
      </div>

      {/* Glass Prism Effects */}
      <div className="prism-effects">
        <div className="prism prism-1" />
        <div className="prism prism-2" />
        <div className="prism prism-3" />
      </div>

      {/* Main Content */}
      <div 
        className={`hero-container ${isVisible ? "reveal-active" : ""}`}
        ref={contentRef}
      >
        <div className="hero-inner">
          {/* Left Content */}
          <div className="hero-content">
            <div className="content-meta">
              <span className="meta-line" />
              <span className="meta-text">Est. 2024</span>
            </div>

            <div className="content-slider">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`content-slide ${active === index ? "active" : ""}`}
                >
                  <h1 className="slide-title">
                    <span className="title-line">
                      {slide.title.split(" ").map((word, i) => (
                        <span key={i} className="word-mask">
                          <span 
                            className="word-reveal"
                            style={{ transitionDelay: `${i * 0.1}s` }}
                          >
                            {word}
                          </span>
                        </span>
                      ))}
                    </span>
                  </h1>
                  <p className="slide-description">{slide.subtitle}</p>
                  
                  <div className="slide-stats">
                    <div className="stat">
                      <span className="stat-number">99.9%</span>
                      <span className="stat-label">Optical Clarity</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat">
                      <span className="stat-number">50+</span>
                      <span className="stat-label">Years Legacy</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <button className="cta-primary">
                <span className="cta-text">Explore Collection</span>
                <span className="cta-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
             
            </div>

            <div className="slide-navigation">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`nav-indicator ${active === index ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`View slide ${index + 1}`}
                >
                  <span className="indicator-track">
                    <span className="indicator-fill" />
                  </span>
                  <span className="indicator-number">0{index + 1}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="hero-visual">
            <div 
              className="glass-sculpture"
              ref={cardRef}
              style={cardTransform}
            >
              <div className="sculpture-inner">
                <img
                  src={slides[active].image}
                  alt={slides[active].title}
                  className="sculpture-image"
                />
                
                {/* Glass Reflections */}
                <div className="reflection reflection-1" />
                <div className="reflection reflection-2" />
                <div className="reflection reflection-3" />
                
                {/* Edge Highlights */}
                <div className="edge-highlight top-edge" />
                <div className="edge-highlight right-edge" />
                <div className="edge-highlight bottom-edge" />
                <div className="edge-highlight left-edge" />
                
                {/* Light Caustics */}
                <div className="caustics" />
                
                {/* Prism Flare */}
                <div className="prism-flare" />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="floating-element float-1">
              <div className="element-inner">
                <span className="element-label">Thermal</span>
                <span className="element-value">+200°C</span>
              </div>
            </div>
            <div className="floating-element float-2">
              <div className="element-inner">
                <span className="element-label">Impact</span>
                <span className="element-value">IK10</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="bottom-gradient" />

      {/* Scroll Progress */}
      <div className="scroll-progress">
        <div className="progress-track">
          <div 
            className="progress-fill" 
            style={{ transform: `scaleX(${scrollProgress})` }}
          />
        </div>
      </div>

      {/* Scroll CTA */}
      {/* <div className="scroll-cta">
        <span className="scroll-text">Discover</span>
        <div className="scroll-line">
          <div className="scroll-arrow">↓</div>
        </div>
      </div> */}
    </section>
  );
}

export default Hero;