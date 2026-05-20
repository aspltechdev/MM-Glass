import { useEffect, useRef, useState, useCallback } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

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
    title: "FUTURE IN GLASS",
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
const canvasRef = useRef(null);

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

// useEffect(() => {

//   const canvas = canvasRef.current;

//   if (!canvas) return;

//   const ctx = canvas.getContext("2d");

//   let animationFrame;

//   const particles = [];

//   const mouse = {
//     x: null,
//     y: null,
//     radius: 180,
//   };

//   const setCanvasSize = () => {

//     canvas.width = window.innerWidth;

//     canvas.height = window.innerHeight;
//   };

//   setCanvasSize();

//   window.addEventListener(
//     "resize",
//     setCanvasSize
//   );

//   class Particle {

//     constructor() {

//       this.x =
//         Math.random() * canvas.width;

//       this.y =
//         Math.random() * canvas.height;

//       this.size =
//         Math.random() * 2 + 1;

//       this.speedX =
//         (Math.random() - 0.5) * 0.4;

//       this.speedY =
//         (Math.random() - 0.5) * 0.4;

//       this.opacity =
//         Math.random() * 0.6 + 0.2;
//     }

//     update() {

//       this.x += this.speedX;

//       this.y += this.speedY;

//       if (this.x < 0 || this.x > canvas.width)
//         this.speedX *= -1;

//       if (this.y < 0 || this.y > canvas.height)
//         this.speedY *= -1;

//       if (mouse.x && mouse.y) {

//         const dx = mouse.x - this.x;

//         const dy = mouse.y - this.y;

//         const distance =
//           Math.sqrt(dx * dx + dy * dy);

//         if (distance < mouse.radius) {

//           this.x -= dx * 0.003;

//           this.y -= dy * 0.003;
//         }
//       }
//     }

//     draw() {

//       ctx.beginPath();

//       ctx.arc(
//         this.x,
//         this.y,
//         this.size,
//         0,
//         Math.PI * 2
//       );

//       ctx.fillStyle =
//         `rgba(180,220,255,${this.opacity})`;

//       ctx.shadowBlur = 20;

//       ctx.shadowColor =
//         "rgba(120,180,255,0.6)";

//       ctx.fill();
//     }
//   }

//   for (let i = 0; i < 90; i++) {

//     particles.push(new Particle());
//   }

//   const connectParticles = () => {

//     for (let a = 0; a < particles.length; a++) {

//       for (
//         let b = a;
//         b < particles.length;
//         b++
//       ) {

//         const dx =
//           particles[a].x - particles[b].x;

//         const dy =
//           particles[a].y - particles[b].y;

//         const distance =
//           dx * dx + dy * dy;

//         if (distance < 14000) {

//           const opacity =
//             1 - distance / 14000;

//           ctx.strokeStyle =
//             `rgba(180,220,255,${
//               opacity * 0.12
//             })`;

//           ctx.lineWidth = 1;

//           ctx.beginPath();

//           ctx.moveTo(
//             particles[a].x,
//             particles[a].y
//           );

//           ctx.lineTo(
//             particles[b].x,
//             particles[b].y
//           );

//           ctx.stroke();
//         }
//       }
//     }
//   };

//   const animate = () => {

//     ctx.clearRect(
//       0,
//       0,
//       canvas.width,
//       canvas.height
//     );

//     particles.forEach((particle) => {

//       particle.update();

//       particle.draw();
//     });

//     connectParticles();

//     animationFrame =
//       requestAnimationFrame(animate);
//   };

//   animate();

//   const handleMouseMove = (e) => {

//     mouse.x = e.clientX;

//     mouse.y = e.clientY;
//   };

//   window.addEventListener(
//     "mousemove",
//     handleMouseMove
//   );

//   return () => {

//     cancelAnimationFrame(animationFrame);

//     window.removeEventListener(
//       "mousemove",
//       handleMouseMove
//     );

//     window.removeEventListener(
//       "resize",
//       setCanvasSize
//     );
//   };

// }, []);




useEffect(() => {

  const canvas = canvasRef.current;

  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  let animationFrame;

  const particles = [];

  const mouse = {
    x: null,
    y: null,
    radius: 220,
  };

  const setCanvasSize = () => {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;
  };

  setCanvasSize();

  window.addEventListener(
    "resize",
    setCanvasSize
  );

  /* =====================================================
      PARTICLE
  ====================================================== */

  class Particle {

    constructor() {

      this.x =
        Math.random() * canvas.width;

      this.y =
        Math.random() * canvas.height;

      this.baseX = this.x;

      this.baseY = this.y;

      this.size =
        Math.random() * 2 + 1;

      this.density =
        Math.random() * 40 + 10;

      this.speedX =
        (Math.random() - 0.5) * 0.25;

      this.speedY =
        (Math.random() - 0.5) * 0.25;

      this.opacity =
        Math.random() * 0.6 + 0.2;
    }

    update() {

      this.x += this.speedX;

      this.y += this.speedY;

      /* SCREEN BOUNDS */

      if (
        this.x < 0 ||
        this.x > canvas.width
      ) {
        this.speedX *= -1;
      }

      if (
        this.y < 0 ||
        this.y > canvas.height
      ) {
        this.speedY *= -1;
      }

      /* MOUSE INTERACTION */

      if (mouse.x && mouse.y) {

        const dx = mouse.x - this.x;

        const dy = mouse.y - this.y;

        const distance =
          Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {

          const force =
            (mouse.radius - distance) /
            mouse.radius;

          const directionX =
            dx / distance;

          const directionY =
            dy / distance;

          this.x -=
            directionX *
            force *
            1.5;

          this.y -=
            directionY *
            force *
            1.5;
        }
      }
    }

    draw() {

      ctx.beginPath();

      ctx.arc(
        this.x,
        this.y,
        this.size,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        `rgba(180,220,255,${this.opacity})`;

      ctx.shadowBlur = 25;

      ctx.shadowColor =
        "rgba(120,180,255,0.7)";

      ctx.fill();
    }
  }

  /* =====================================================
      CREATE PARTICLES
  ====================================================== */

  const particleCount =
    window.innerWidth < 768
      ? 45
      : 110;

  for (let i = 0; i < particleCount; i++) {

    particles.push(new Particle());
  }

  /* =====================================================
      CONNECT PARTICLES
  ====================================================== */

  const connectParticles = () => {

    for (let a = 0; a < particles.length; a++) {

      for (
        let b = a;
        b < particles.length;
        b++
      ) {

        const dx =
          particles[a].x - particles[b].x;

        const dy =
          particles[a].y - particles[b].y;

        const distance =
          dx * dx + dy * dy;

        if (distance < 12000) {

          const opacity =
            1 - distance / 12000;

          ctx.strokeStyle =
            `rgba(180,220,255,${
              opacity * 0.12
            })`;

          ctx.lineWidth = 1;

          ctx.beginPath();

          ctx.moveTo(
            particles[a].x,
            particles[a].y
          );

          ctx.lineTo(
            particles[b].x,
            particles[b].y
          );

          ctx.stroke();
        }
      }
    }
  };

  /* =====================================================
      CURSOR CONNECTIONS
  ====================================================== */

  const connectToCursor = () => {

    if (!mouse.x || !mouse.y) return;

    particles.forEach((particle) => {

      const dx =
        mouse.x - particle.x;

      const dy =
        mouse.y - particle.y;

      const distance =
        Math.sqrt(dx * dx + dy * dy);

      if (distance < mouse.radius) {

        const opacity =
          1 - distance / mouse.radius;

        /* LINE */

        ctx.strokeStyle =
          `rgba(180,220,255,${
            opacity * 0.45
          })`;

        ctx.lineWidth = 1.2;

        ctx.beginPath();

        ctx.moveTo(
          particle.x,
          particle.y
        );

        ctx.lineTo(
          mouse.x,
          mouse.y
        );

        ctx.stroke();

        /* TRIANGLES */

        particles.forEach((other) => {

          const dx2 =
            particle.x - other.x;

          const dy2 =
            particle.y - other.y;

          const dist2 =
            Math.sqrt(
              dx2 * dx2 + dy2 * dy2
            );

          if (dist2 < 90) {

            ctx.beginPath();

            ctx.moveTo(
              mouse.x,
              mouse.y
            );

            ctx.lineTo(
              particle.x,
              particle.y
            );

            ctx.lineTo(
              other.x,
              other.y
            );

            ctx.closePath();

            ctx.fillStyle =
              `rgba(120,180,255,${
                opacity * 0.03
              })`;

            ctx.fill();
          }
        });
      }
    });

    /* CURSOR CORE */

    ctx.beginPath();

    ctx.arc(
      mouse.x,
      mouse.y,
      5,
      0,
      Math.PI * 2
    );

    ctx.fillStyle =
      "rgba(255,255,255,0.9)";

    ctx.shadowBlur = 35;

    ctx.shadowColor =
      "rgba(120,180,255,0.9)";

    ctx.fill();

    /* OUTER RING */

    ctx.beginPath();

    ctx.arc(
      mouse.x,
      mouse.y,
      24,
      0,
      Math.PI * 2
    );

    ctx.strokeStyle =
      "rgba(180,220,255,0.22)";

    ctx.lineWidth = 1;

    ctx.stroke();
  };

  /* =====================================================
      ANIMATION LOOP
  ====================================================== */

  const animate = () => {

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    particles.forEach((particle) => {

      particle.update();

      particle.draw();
    });

    connectParticles();

    connectToCursor();

    animationFrame =
      requestAnimationFrame(animate);
  };

  animate();

  /* =====================================================
      MOUSE
  ====================================================== */

  const handleMouseMove = (e) => {

    mouse.x = e.clientX;

    mouse.y = e.clientY;
  };

  const handleMouseLeave = () => {

    mouse.x = null;

    mouse.y = null;
  };

  window.addEventListener(
    "mousemove",
    handleMouseMove
  );

  window.addEventListener(
    "mouseout",
    handleMouseLeave
  );

  /* =====================================================
      CLEANUP
  ====================================================== */

  return () => {

    cancelAnimationFrame(animationFrame);

    window.removeEventListener(
      "mousemove",
      handleMouseMove
    );

    window.removeEventListener(
      "mouseout",
      handleMouseLeave
    );

    window.removeEventListener(
      "resize",
      setCanvasSize
    );
  };

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


{/* =====================================================
    CINEMATIC HUD MESH
====================================================== */}

<canvas
  ref={canvasRef}
  className="hero-mesh"
/>

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
              <Link to="/product">
              <button className="cta-primary">
                <span className="cta-text">Explore Collection</span>
                <span className="cta-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              </Link>
             
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