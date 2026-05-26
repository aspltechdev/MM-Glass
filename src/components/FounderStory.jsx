// import React from "react";
// import "./FounderStory.css";

// const FounderStory = () => {
//   return (
//     <section className="founder-story">
//       <div className="founder-story__container">
//         {/* LEFT IMAGE SIDE */}
//         <div className="founder-story__visual">
//           <div className="founder-story__image-card">
//             <img
//               src="https://images.pexels.com/photos/26692091/pexels-photo-26692091.jpeg"
//               alt="Founder"
//               className="founder-story__image"
//             />

//             <div className="founder-story__floating-card">
//               <span>10+ Years Experience</span>
//               <h4>Building meaningful experiences</h4>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT CONTENT SIDE */}
//         <div className="founder-story__content">
//           <span className="founder-story__badge">Our Journey</span>

//           <h2 className="founder-story__title">
//             Turning Passion Into <span>Purpose</span>
//           </h2>

//           <p className="founder-story__description">
//             What began as a simple vision soon evolved into a mission to create
//             something meaningful. Our founder believed that true innovation
//             happens when creativity, passion, and purpose come together.
//           </p>

//           <p className="founder-story__description">
//             Through challenges, late nights, and continuous growth, we built a
//             community driven by trust, quality, and dedication. Every milestone
//             reflects our commitment to delivering experiences people genuinely
//             connect with.
//           </p>

//           <div className="founder-story__stats">
//             <div className="founder-story__stat-card">
//               <h3>50K+</h3>
//               <span>Happy Customers</span>
//             </div>

//             <div className="founder-story__stat-card">
//               <h3>120+</h3>
//               <span>Projects Completed</span>
//             </div>

//             <div className="founder-story__stat-card">
//               <h3>15+</h3>
//               <span>Global Awards</span>
//             </div>
//           </div>

//           <div className="founder-story__footer">
//             <div>
//               <h4>John Carter</h4>
//               <span>Founder & CEO</span>
//             </div>

         
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FounderStory;






import React from "react";
import "./FounderStory.css";

const FounderStory = () => {

  return (

    <section className="luxury-founder-section">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="luxury-founder-grid"></div>

      {/* <div className="luxury-founder-glow luxury-founder-glow-left"></div>

      <div className="luxury-founder-glow luxury-founder-glow-right"></div> */}

      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      {/* <div className="luxury-founder-particles">

        {Array.from({ length: 30 }).map((_, i) => (

          <span
            key={i}
            className="luxury-founder-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          ></span>

        ))}

      </div> */}

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="luxury-founder-container">

        {/* =====================================================
            LEFT VISUAL
        ====================================================== */}

        <div className="luxury-founder-visual">

          {/* IMAGE CARD */}

          <div className="luxury-founder-image-card">

            <img
              src="https://images.pexels.com/photos/26692091/pexels-photo-26692091.jpeg"
              alt="Founder Murali"
              className="luxury-founder-image"
            />

            <div className="luxury-founder-overlay"></div>

            <div className="luxury-founder-shine"></div>

          </div>

          {/* FLOATING EXPERIENCE */}

          <div className="luxury-founder-floating-card">

            <span>

              Since 2016

            </span>

            <h4>

              Built Through Vision,
              Persistence & Hard Work

            </h4>

          </div>

          {/* FLOATING QUALITY CARD */}

          <div className="luxury-founder-floating-card secondary-card">

            <h3>

              2+

            </h3>

            <p>

              Manufacturing Units
              Successfully Established

            </p>

          </div>

        </div>

        {/* =====================================================
            RIGHT CONTENT
        ====================================================== */}

        <div className="luxury-founder-content">

        

          <h2 className="luxury-founder-title">

 BUILT FROM  <span> DREAMS </span>
          </h2>

          <p className="luxury-founder-description">

            Murali started MM Glass in 2016 with
            little more than determination, hard
            work and a vision to create something
            meaningful. Every challenge became a
            lesson and every milestone became a
            reason to keep moving forward.

          </p>

          <p className="luxury-founder-description">

            What began as a single manufacturing
            unit gradually evolved through years
            of persistence and sacrifice, leading
            to the successful expansion of a second
            unit in 2018. His journey reflects the
            belief that consistency, honesty and
            patience can transform vision into reality.

          </p>

          {/* =====================================================
              STATS
          ====================================================== */}

          <div className="luxury-founder-stats">

            <div className="luxury-founder-stat-card">

              <h3>

                2016

              </h3>

              <span>

                Company Started

              </span>

            </div>

            <div className="luxury-founder-stat-card">

              <h3>

                2018

              </h3>

              <span>

                Second Unit Launched

              </span>

            </div>

            <div className="luxury-founder-stat-card">

              <h3>

                10+

              </h3>

              <span>

                Years Of Excellence

              </span>

            </div>

          </div>

          {/* =====================================================
              FOOTER
          ====================================================== */}

          <div className="luxury-founder-footer">

            <div>

              <h4>

                Murali

              </h4>

              <span>

                Founder Of MM Glass

              </span>

            </div>

            <button className="luxury-founder-btn">

              Explore Journey

            </button>

          </div>

        </div>

      </div>

      {/* HUGE BG TEXT */}

      <div className="luxury-founder-bg-text">

        FOUNDER

      </div>

    </section>

  );

};

export default FounderStory;

