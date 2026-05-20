// // Testimonials.jsx

// import "./Testimonials.css";

// function Testimonials() {

//   const testimonials = [

//     {
//       name: "Arjun Mehta",
//       role: "Luxury Villa Architect",
//       image:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
//       text:
//         "Exceptional detailing and premium glass execution transformed our project beautifully.",
//     },

//     {
//       name: "Sarah Williams",
//       role: "Interior Design Director",
//       image:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
//       text:
//         "The finish quality and architectural precision are truly world-class.",
//     },

//     {
//       name: "Rahul Kapoor",
//       role: "Commercial Builder",
//       image:
//         "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
//       text:
//         "Reliable delivery systems and flawless craftsmanship across every installation.",
//     },

//     {
//       name: "Daniel Foster",
//       role: "Luxury Developer",
//       image:
//         "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",
//       text:
//         "M M Glass House brings cinematic architectural elegance into reality.",
//     },

//     {
//       name: "Ava Richardson",
//       role: "Spatial Designer",
//       image:
//         "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
//       text:
//         "Their glass systems create emotionally immersive modern environments.",
//     },

//     {
//       name: "Michael Reed",
//       role: "Project Consultant",
//       image:
//         "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1200&auto=format&fit=crop",
//       text:
//         "Architectural precision, speed, and premium aesthetics in every detail.",
//     },

//   ];

//   return (

//     <section className="ts-section">

//       {/* BACKGROUND */}

//       <div className="ts-bg-image">

//   <img
//     src="https://images.pexels.com/photos/29644165/pexels-photo-29644165.jpeg"
//     alt=""
//   />

// </div>
// <div className="ts-gradient-overlay"></div>
//     <div className="ts-grid"></div>

//       {/* <div className="ts-gradient"></div> */}
//       <div className="ts-grid"></div>
//       <div className="ts-noise"></div>

//       {/* TOP */}

//       <div className="ts-top">

//         <span className="ts-label">

//           CLIENT EXPERIENCES

//         </span>

//         <h2>

//           TRUST BUILT <br />

//           THROUGH <span>PRECISION</span>

//         </h2>

//       </div>

//       {/* CINEMATIC MARQUEE */}

//       <div className="ts-marquee">

//         <div className="ts-track">

//           {[...testimonials, ...testimonials].map((item, index) => (

//             <div
//               className="ts-card"
//               key={index}
//             >

//               {/* IMAGE */}

//               <img
//                 src={item.image}
//                 alt=""
//               />

//               {/* OVERLAY */}

//               <div className="ts-overlay"></div>

//               {/* SHINE */}

//               <div className="ts-shine"></div>

//               {/* CONTENT */}

//               <div className="ts-content">

//                 <div className="ts-quote">

//                   “

//                 </div>

//                 <p>

//                   {item.text}

//                 </p>

//                 <div className="ts-user">

//                   <h4>{item.name}</h4>

//                   <span>{item.role}</span>

//                 </div>

//               </div>

//             </div>

//           ))}

//         </div>

//       </div>

//       {/* HUGE TEXT */}

//       <div className="ts-bg-text">

//         TESTIMONIALS

//       </div>

//     </section>
//   );
// }

// export default Testimonials;







import "./Testimonials.css";

function Testimonials() {

  const testimonials = [

    {
      name: "Arjun Mehta",
      role: "Luxury Villa Architect",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2200&auto=format&fit=crop",
      text:
        "Exceptional detailing and premium glass execution transformed our project beautifully.",
    },

    {
      name: "Sarah Williams",
      role: "Interior Design Director",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2200&auto=format&fit=crop",
      text:
        "The finish quality and architectural precision are truly world-class.",
    },

    {
      name: "Rahul Kapoor",
      role: "Commercial Builder",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2200&auto=format&fit=crop",
      text:
        "Reliable delivery systems and flawless craftsmanship across every installation.",
    },

    {
      name: "Daniel Foster",
      role: "Luxury Developer",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2200&auto=format&fit=crop",
      text:
        "M M Glass House brings cinematic architectural elegance into reality.",
    },

    {
      name: "Ava Richardson",
      role: "Spatial Designer",
      image:
        "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2200&auto=format&fit=crop",
      text:
        "Their glass systems create emotionally immersive modern environments.",
    },

    {
      name: "Michael Reed",
      role: "Project Consultant",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2200&auto=format&fit=crop",
      text:
        "Architectural precision, speed, and premium aesthetics in every detail.",
    },

  ];

  return (

    <section className="ts-section">

      {/* =====================================================
          CINEMATIC GLASS BACKGROUND
      ====================================================== */}

      <div className="ts-cinematic-bg">

        {/* BUILDINGS */}

        <div className="ts-building building-1"></div>

        <div className="ts-building building-2"></div>

        <div className="ts-building building-3"></div>

        {/* REFLECTIONS */}

        <div className="ts-reflection reflection-1"></div>

        <div className="ts-reflection reflection-2"></div>

        <div className="ts-reflection reflection-3"></div>

        {/* ORBS */}

        <div className="ts-orb orb-1"></div>

        <div className="ts-orb orb-2"></div>

        {/* GRID */}

        <div className="ts-grid"></div>

      </div>

      {/* =====================================================
          OVERLAYS
      ====================================================== */}

      <div className="ts-overlay"></div>

      <div className="ts-light"></div>

      <div className="ts-vignette"></div>

      <div className="ts-noise"></div>

      {/* HUGE TEXT */}

      <div className="ts-bg-text">

        TESTIMONIALS

      </div>

      {/* =====================================================
          TOP
      ====================================================== */}

      <div className="ts-top">

        <span className="ts-label">

          CLIENT EXPERIENCES

        </span>

        <h2>

          TRUST BUILT <br />

          THROUGH <span>PRECISION</span>

        </h2>

      </div>

      {/* =====================================================
          TESTIMONIAL GRID
      ====================================================== */}

      {/* <div className="ts-grid-layout">

        {testimonials.map((item, index) => (

          <div
            className="ts-card"
            key={index}
          >

         

            <div className="ts-image-wrap">

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="ts-card-overlay"></div>

              <div className="ts-shine"></div>

            </div>

          

            <div className="ts-content">

              <div className="ts-quote">

                “

              </div>

              <p>

                {item.text}

              </p>

              <div className="ts-user">

                <h4>

                  {item.name}

                </h4>

                <span>

                  {item.role}

                </span>

              </div>

            </div>

          </div>

        ))}

      </div> */}

      {/* =====================================================
    TESTIMONIAL MARQUEE
====================================================== */}

<div className="ts-marquee">

  <div className="ts-track">

    {[...testimonials, ...testimonials].map((item, index) => (

      <div
        className="ts-card"
        key={index}
      >

        {/* IMAGE */}

        <div className="ts-image-wrap">

          <img
            src={item.image}
            alt={item.name}
          />

          <div className="ts-card-overlay"></div>

          <div className="ts-shine"></div>

        </div>

        {/* CONTENT */}

        <div className="ts-content">

          <div className="ts-quote">

            “

          </div>

          <p>

            {item.text}

          </p>

          <div className="ts-user">

            <h4>

              {item.name}

            </h4>

            <span>

              {item.role}

            </span>

          </div>

        </div>

      </div>

    ))}

  </div>

</div>

    </section>
  );
}

export default Testimonials;