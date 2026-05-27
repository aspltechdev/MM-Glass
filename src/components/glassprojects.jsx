import { useEffect, useRef } from "react";
import "./glassprojects.css";

import gal1 from "../assets/gal1.jpeg";
import gal2 from "../assets/gal2.jpeg";
import gal3 from "../assets/gal3.jpeg";
import gal4 from "../assets/gal4.jpeg";
import gal5 from "../assets/gal5.jpeg";
import gal6 from "../assets/gal6.jpeg";
import gal7 from "../assets/pro.jpeg";
import gal8 from "../assets/pro11.jpeg";
import gal9 from "../assets/pro12.jpeg";
import gal10 from "../assets/pro13.jpeg";
import gal11 from "../assets/pro14.jpeg";
import gal12 from "../assets/pro15.jpeg";


// const luxuryGlassProjects = [

//   {
//     id: 1,
//     image: gal1,
//     title: "Luxury Glass Facade",
//     category: "Premium Architecture",
//   },

//   {
//     id: 2,
//     image: gal2,
//     title: "Modern Glass Interiors",
//     category: "Luxury Interior Design",
//   },

//   {
//     id: 3,
//     image: gal3,
//     title: "Futuristic Office Spaces",
//     category: "Corporate Architecture",
//   },

//   {
//     id: 4,
//     image: gal4,
//     title: "Premium Stair Glass",
//     category: "Modern Living",
//   },

//   {
//     id: 5,
//     image: gal5,
//     title: "Immersive Exterior Systems",
//     category: "Luxury Exterior",
//   },

//   {
//     id: 6,
//     image: gal6,
//     title: "Architectural Glass Vision",
//     category: "Cinematic Design",
//   },

//   {
//   id: 7,
//   image: gal7,
//   title: "Elegant Glass Partitions",
//   category: "Contemporary Interiors",
// },

// {
//   id: 8,
//   image: gal8,
//   title: "Panoramic Glass Walls",
//   category: "Luxury Architecture",
// },

// {
//   id: 9,
//   image: gal9,
//   title: "Frameless Balcony Glass",
//   category: "Modern Exterior",
// },

// {
//   id: 10,
//   image: gal10,
//   title: "Designer Glass Ceilings",
//   category: "Premium Spaces",
// },

// {
//   id: 11,
//   image: gal11,
//   title: "Smart Reflective Facades",
//   category: "Innovative Architecture",
// },
// {
//   id: 12,
//   image: gal12,
//   title: "Smart Reflective Facades",
//   category: "Innovative Architecture",
// },


// ];

const luxuryGlassProjects = [

  {
    id: 1,
    image: gal1,
    title: "Luxury Glass Staircase",
    category: "Premium Architecture",
  },

  {
    id: 2,
    image: gal2,
    title: "Modern Glass Interiors",
    category: "Luxury Interior Design",
  },

  {
    id: 3,
    image: gal3,
    title: "Curved Toughened Glass Staircase",
    category: "Corporate Architecture",
  },

  {
    id: 4,
    image: gal4,
    title: "Premium Curved Glass",
    category: "Modern Living",
  },

  {
    id: 5,
    image: gal5,
    title: "Immersive Interior Systems",
    category: "Luxury Exterior",
  },

  {
    id: 6,
    image: gal6,
    title: "Architectural Glass Vision",
    category: "Cinematic Design",
  },

  {
    id: 7,
    image: gal7,
    title: "Elegant Glass Designs",
    category: "Contemporary Interiors",
  },

  {
    id: 8,
    image: gal8,
    title: "Modern Glass Designs",
    category: "Urban Architecture",
  },

  {
    id: 9,
    image: gal9,
    title: "Frameless Glass Exterior ",
    category: "Modern Exterior Design",
  },

  {
    id: 10,
    image: gal10,
    title: "Mordern Glass Pattern",
    category: "Luxury Space Planning",
  },

  {
    id: 11,
    image: gal11,
    title: "Pattern Glass Design",
    category: "Innovative Building Solutions",
  },

  {
    id: 12,
    image: gal12,
    title: "Elegent Pattern Design",
    category: "Workspace Elegance",
  },

];
function ProjectGallery() {

  const luxuryGalleryRef = useRef(null);

  /* =========================================================
      INTERSECTION ANIMATION
  ========================================================= */

  useEffect(() => {

    const cards =
      document.querySelectorAll(
        ".luxury-glass-gallery-card"
      );

    const observer =
      new IntersectionObserver(

        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "luxury-glass-gallery-show"
              );

            }

          });

        },

        {
          threshold: 0.2,
        }

      );

    cards.forEach((card) =>
      observer.observe(card)
    );

    return () =>
      observer.disconnect();

  }, []);

  return (

    <section
      className="luxury-glass-gallery-section"
      ref={luxuryGalleryRef}
    >

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="luxury-glass-gallery-grid"></div>

      <div className="luxury-glass-gallery-glow glow-left"></div>

      <div className="luxury-glass-gallery-glow glow-right"></div>

      {/* =========================================================
          PARTICLES
      ========================================================= */}

     

      {/* =========================================================
          HEADER
      ========================================================= */}

      <div className="luxury-glass-gallery-header">

      

        <h2>

          ARCHITECTURE  <span >GALLERY </span>

        </h2>

        <p>

          Immersive futuristic architectural environments
          engineered with cinematic luxury aesthetics,
          spatial storytelling and next-generation
          glass systems.

        </p>

      </div>

      {/* =========================================================
          CINEMATIC SCROLL GALLERY
      ========================================================= */}

      <div className="luxury-glass-gallery-scroll-wrapper">

        <div className="luxury-glass-gallery-track">

          {[...luxuryGlassProjects, ...luxuryGlassProjects].map(

            (project, index) => (

              <div
                key={index}
                className="luxury-glass-gallery-card"
              >

                {/* IMAGE */}

                <div className="luxury-glass-gallery-image-wrap">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="luxury-glass-gallery-image"
                  />

                  <div className="luxury-glass-gallery-overlay"></div>

                  <div className="luxury-glass-gallery-shine"></div>

                </div>

                {/* CONTENT */}

                <div className="luxury-glass-gallery-content">

                  <span className="luxury-glass-gallery-category">

                    {project.category}

                  </span>

                  <h3 className="luxury-glass-gallery-title">

                    {project.title}

                  </h3>

                  {/* <p className="luxury-glass-gallery-description">

                    Precision-engineered architectural
                    glass solutions delivering premium
                    aesthetics and futuristic luxury
                    spatial experiences.

                  </p> */}

                  <a
                    href="/contact"
                    className="luxury-glass-gallery-button"
                  >

                    Contact Enquiry

                  </a>

                </div>

              </div>

            )

          )}

        </div>

      </div>

      {/* =========================================================
          HUGE BACKGROUND TEXT
      ========================================================= */}

      <div className="luxury-glass-gallery-bg-text">

        PROJECTS

      </div>

    </section>

  );
}

export default ProjectGallery;