// import { useEffect, useRef } from "react";
// import "./glassprojects.css";
// import gal1 from '../assets/gal1.jpeg';
// import gal2 from '../assets/gal2.jpeg';
// import gal3 from '../assets/gal3.jpeg';
// import gal4 from '../assets/gal4.jpeg';
// import gal5 from '../assets/gal5.jpeg';
// import gal6 from '../assets/gal6.jpeg';

// const projects = [
//   {
//     id: 1,
//     // title: "Luxury Glass Facade",
//     // category: "Commercial Architecture",
//     image:gal1
//   },

//   {
//     id: 2,
//     // title: "Modern Interior Glass",
//     // category: "Premium Interiors",
//     image:gal2,
//   },

//   {
//     id: 3,
//     // title: "Futuristic Office Design",
//     // category: "Corporate Space",
//     image:gal3,
//   },

//   {
//     id: 4,
//     // title: "Luxury Stair Glass",
//     // category: "Modern Living",
//     image:gal4,
//   },

//   {
//     id: 5,
//     // title: "Smart Glass Exterior",
//     // category: "Luxury Exterior",
//     image:gal5
//   },

//   {
//     id: 6,
//     // title: "Immersive Glass Space",
//     // category: "Futuristic Design",
//     image:gal6,
//   },
// ];

// function ProjectGallery() {
//   const sectionRef = useRef(null);

//   /* =========================================================
//       SCROLL REVEAL
//   ========================================================= */

//   useEffect(() => {
//     const cards =
//       document.querySelectorAll(".gallery-card");

//     const observer = new IntersectionObserver(

//       (entries) => {

//         entries.forEach((entry) => {

//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//           }

//         });

//       },

//       {
//         threshold: 0.2,
//       }
//     );

//     cards.forEach((card) => observer.observe(card));

//     return () => observer.disconnect();

//   }, []);

//   return (
//  <section className="project-gallery">

//   {/* GRID */}
//   <div className="gallery-grid"></div>

//   {/* PARTICLES */}
//   <div className="gallery-particles">

//     {Array.from({ length: 35 }).map((_, i) => (

//       <span
//         key={i}
//         className="gallery-particle"
//         style={{
//           left: `${Math.random() * 100}%`,
//           animationDuration: `${8 + Math.random() * 10}s`,
//           animationDelay: `${Math.random() * 4}s`,
//         }}
//       ></span>

//     ))}

//   </div>

//   {/* HEADER */}
//   <div className="gallery-header">

   

//     <h2>
  
//       Architecture Gallery
//     </h2>

//     <p>
//       Immersive futuristic architectural environments
//       engineered with cinematic luxury aesthetics,
//       spatial storytelling and next-generation glass systems.
//     </p>

//   </div>

//   {/* =========================================================
//       HORIZONTAL SCROLL GALLERY
//   ========================================================= */}

//   <div className="gallery-scroll-wrapper">

//     <div className="gallery-track">

//       {[...projects, ...projects].map((project, index) => (

//         <div
//           key={index}
//           className="gallery-card"
//         >

//           {/* IMAGE */}
//           <img
//             src={project.image}
//             alt={project.title}
//           />

//           {/* OVERLAY */}
//           <div className="gallery-overlay"></div>

       

//           {/* CONTENT */}
//           <div className="gallery-content">

//             <span>
//               {project.category}
//             </span>

//             {/* <h3>
//               {project.title}
//             </h3> */}

//           </div>

//         </div>

//       ))}

//     </div>

//   </div>

// </section>

//   );
// }

// export default ProjectGallery;



import { useEffect, useRef } from "react";
import "./glassprojects.css";

import gal1 from "../assets/gal1.jpeg";
import gal2 from "../assets/gal2.jpeg";
import gal3 from "../assets/gal3.jpeg";
import gal4 from "../assets/gal4.jpeg";
import gal5 from "../assets/gal5.jpeg";
import gal6 from "../assets/gal6.jpeg";

const luxuryGlassProjects = [
  {
    id: 1,
    image: gal1,
  },

  {
    id: 2,
    image: gal2,
  },

  {
    id: 3,
    image: gal3,
  },

  {
    id: 4,
    image: gal4,
  },

  {
    id: 5,
    image: gal5,
  },

  {
    id: 6,
    image: gal6,
  },
];

function ProjectGallery() {

  const luxuryGalleryRef = useRef(null);

  /* =========================================================
      SCROLL REVEAL
  ========================================================= */

  useEffect(() => {

    const luxuryCards =
      document.querySelectorAll(
        ".luxury-glass-gallery-card"
      );

    const luxuryObserver =
      new IntersectionObserver(

        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "luxury-glass-gallery-card-show"
              );

            }

          });

        },

        {
          threshold: 0.2,
        }

      );

    luxuryCards.forEach((card) =>
      luxuryObserver.observe(card)
    );

    return () =>
      luxuryObserver.disconnect();

  }, []);

  return (

    <section
      className="luxury-glass-gallery-section"
      ref={luxuryGalleryRef}
    >

      {/* GRID */}

      <div className="luxury-glass-gallery-grid"></div>

      {/* PARTICLES */}

      <div className="luxury-glass-gallery-particles">

        {Array.from({ length: 35 }).map((_, i) => (

          <span
            key={i}
            className="luxury-glass-gallery-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          ></span>

        ))}

      </div>

      {/* HEADER */}

      <div className="luxury-glass-gallery-header">

        <div className="luxury-glass-gallery-badge">

          <span></span>

          <p>
            Luxury Glass Projects
          </p>

        </div>

        <h2>
          Architecture Gallery
        </h2>

        <p>
          Immersive futuristic architectural environments
          engineered with cinematic luxury aesthetics,
          spatial storytelling and next-generation
          glass systems.
        </p>

      </div>

      {/* =========================================================
          HORIZONTAL SCROLL GALLERY
      ========================================================= */}

      <div className="luxury-glass-gallery-scroll-wrapper">

        <div className="luxury-glass-gallery-track">

          {[
            ...luxuryGlassProjects,
            ...luxuryGlassProjects,
          ].map((project, index) => (

            <div
              key={index}
              className="luxury-glass-gallery-card"
            >

              {/* IMAGE */}

              <img
                src={project.image}
                alt="Luxury Glass Project"
                className="luxury-glass-gallery-image"
              />

              {/* OVERLAY */}

              <div className="luxury-glass-gallery-overlay"></div>

              {/* SHINE */}

              <div className="luxury-glass-gallery-shine"></div>

              {/* CONTENT */}

              <div className="luxury-glass-gallery-content">

                <span className="luxury-glass-gallery-category">
                  Premium Glass Design
                </span>

                <h3 className="luxury-glass-gallery-title">
                  Modern Luxury Architecture
                </h3>

                <a
                  href="/contact"
                  className="luxury-glass-gallery-button"
                >
                  Contact Enquiry
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default ProjectGallery;