// import "./WhyChoose.css";

// import deliveryImg from "../assets/why1.jpeg";
// import indiaImg from "../assets/why2.jpeg";
// import precisionImg from "../assets/why3.jpeg";
// import glassImg from "../assets/why4.jpeg";

// function WhyChoose() {

//   const cards = [
//     {
//       image: deliveryImg,
//       title: "Fastest Delivery",
//       text: "Proprietary logistics network ensuring glass reaching your site 40% faster than industry standards.",
//     },

//     {
//       image: indiaImg,
//       title: "PAN India Delivery",
//       text: "Strategically located hubs delivering to every pin code across the subcontinent with specialized care.",
//     },

//     {
//       image: precisionImg,
//       title: "Precision Edge",
//       text: "Laser-guided cutting and CNC finishing for tolerances within ±0.1mm for perfect installation.",
//     },

//     {
//       image: glassImg,
//       title: "Vast Range",
//       text: "Over 500+ glass variants from smart privacy glass to ultra-clear low-iron architectural panels.",
//     },
//   ];

//   return (
//     <section className="whychoose-section">

//       {/* Badge */}
//       <div className="whychoose-badge">
//         <span className="dot"></span>
//         <p>Why Choose Us</p>
//       </div>

//       {/* Cards */}
//       <div className="whychoose-grid">

//         {cards.map((card, index) => (
//           <div className="why-card" key={index}>

//             {/* Image */}
//             <div className="why-image">
//               <img src={card.image} alt={card.title} />
//             </div>

//             {/* Title */}
//             <h3>{card.title}</h3>

//             {/* Text */}
//             <p>{card.text}</p>

//           </div>
//         ))}

//       </div>

//     </section>
//   );
// }

// export default WhyChoose;












// WhyChoose.jsx

import "./WhyChoose.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import deliveryImg from "../assets/why1.jpeg";
import indiaImg from "../assets/why2.jpeg";
import precisionImg from "../assets/why3.jpeg";
import glassImg from "../assets/why4.jpeg";

function WhyChoose() {

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

  const cards = [

    {
      image: "https://images.pexels.com/photos/14437601/pexels-photo-14437601.jpeg",
      title: "Fastest Delivery",
      text: "Precision logistics systems engineered for ultra-fast nationwide delivery performance.",
    },

    {
      image: indiaImg,
      title: "PAN India Network",
      text: "Connected premium distribution infrastructure serving projects across every region.",
    },

    {
      image: precisionImg,
      title: "AI Precision Systems",
      text: "Laser-guided fabrication delivering architectural perfection at microscopic tolerances.",
    },

    {
      image: glassImg,
      title: "500+ Smart Variants",
      text: "Future-ready glass ecosystems for luxury architecture and intelligent interiors.",
    },
  ];

  return (

    <section
      className={`wc-section ${visible ? "wc-show" : ""}`}
      ref={sectionRef}
    >

      {/* VIDEO BACKGROUND */}

      {/* <video
        className="wc-video"
        autoPlay
        muted
        loop
        playsInline
      >

        <source
          src="https://cdn.coverr.co/videos/coverr-modern-architecture-1563077615493?download=1080p"
          type="video/mp4"
        />

      </video>

   

      <div className="wc-overlay"></div>
      <div className="wc-gradient"></div>
      <div className="wc-grid"></div>
      <div className="wc-noise"></div> */}



      {/* CINEMATIC BACKGROUND */}

<div className="wc-bg">

  <img
    src="https://images.pexels.com/photos/32427304/pexels-photo-32427304.jpeg"
    alt=""
  />

</div>

{/* CINEMATIC LAYERS */}

<div className="wc-overlay"></div>

<div className="wc-light"></div>

<div className="wc-vignette"></div>

      {/* PARTICLES */}

      <div className="wc-particles">

        {Array.from({ length: 40 }).map((_, i) => (

          <span
            key={i}
            className="wc-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></span>

        ))}

      </div>

      {/* TOP */}

      <div className="wc-header">

        <div className="wc-badge">

          <span></span>

          WHY MM GLASS HOUSE

        </div>

        <h2>

          FUTURE-DRIVEN <br />

          GLASS <span>INTELLIGENCE</span>

        </h2>

        <p>
          Combining precision engineering, futuristic fabrication,
          AI-inspired systems, and premium architectural execution
          to redefine modern glass experiences.
        </p>

      </div>

      {/* DASHBOARD */}

      <div className="wc-dashboard">

        {cards.map((card, index) => (

          <div
            className="wc-card"
            key={index}
          >

            {/* GLOW */}

            <div className="wc-card-glow"></div>

            {/* IMAGE */}

            <div className="wc-image-wrap">

              <img
                src={card.image}
                alt={card.title}
              />

              <div className="wc-image-overlay"></div>

            </div>

            {/* CONTENT */}

            <div className="wc-card-content">

              {/* <div className="wc-card-top">

                <span>AI SYSTEM</span>

                <div className="wc-dot"></div>

              </div> */}

              <h3>{card.title}</h3>

              <p>{card.text}</p>

            </div>

            {/* FLOATING NUMBER */}

            <div className="wc-floating-number">

              0{index + 1}

            </div>

          </div>

        ))}

      </div>

      {/* HUGE TYPO */}

      <div className="wc-bg-text">

        MM GLASS

      </div>

    </section>
  );
}

export default WhyChoose;