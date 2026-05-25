
// import { useEffect, useState } from "react";
// import "./product.css";

// function Product() {

//   // const sections = [
//   //   {
//   //     heading: "Architectural Glass",
//   //     products: [
//   //       {
//   //         title: "Tempered Glass",
//   //         image:
//   //           "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000&auto=format&fit=crop",
//   //         desc:
//   //           "Processed safety glass engineered for superior strength and durability.",
//   //       },

//   //       {
//   //         title: "Laminated Glass",
//   //         image:
//   //           "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop",
//   //         desc:
//   //           "Advanced laminated systems designed for security and UV protection.",
//   //       },

//   //       {
//   //         title: "Reflective Glass",
//   //         image:
//   //           "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
//   //         desc:
//   //           "Luxury reflective architectural glass with premium aesthetics.",
//   //       },

//   //       {
//   //         title: "Insulated Glass",
//   //         image:
//   //           "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop",
//   //         desc:
//   //           "Thermal and acoustic insulation for modern spaces.",
//   //       },
//   //     ],
//   //   },

//   //   {
//   //     heading: "Speciality Glass",
//   //     products: [
//   //       {
//   //         title: "Magic Glass",
//   //         image:
//   //           "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2000&auto=format&fit=crop",
//   //         desc:
//   //           "Switchable privacy glass powered by smart technology.",
//   //       },

//   //       {
//   //         title: "Curved Glass",
//   //         image:
//   //           "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000&auto=format&fit=crop",
//   //         desc:
//   //           "Architectural curved glass for futuristic structures.",
//   //       },

//   //       {
//   //         title: "Fire Resistant Glass",
//   //         image:
//   //           "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop",
//   //         desc:
//   //           "High-performance fire safety glass systems.",
//   //       },

//   //       {
//   //         title: "Acoustic Glass",
//   //         image:
//   //           "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop",
//   //         desc:
//   //           "Premium acoustic glazing engineered for silence.",
//   //       },
//   //     ],
//   //   },
//   // ];

//   const sections = [
//   {
//     heading: "Architectural Glass",

//     products: [
//       {
//         title: "Tempered Glass",
//         image:
//           "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Processed safety glass engineered for superior strength and durability.",
//       },

//       {
//         title: "Laminated Glass",
//         image:
//           "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Advanced laminated systems designed for security and UV protection.",
//       },

//       {
//         title: "Reflective Glass",
//         image:
//           "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Luxury reflective architectural glass with premium aesthetics.",
//       },

//       {
//         title: "Insulated Glass (DGU)",
//         image:
//           "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Double glazed insulated glass for thermal and acoustic efficiency.",
//       },

//       {
//         title: "PVB Lamination",
//         image:
//           "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "High-strength laminated safety glass using premium PVB interlayers.",
//       },

//       {
//         title: "Resin Lamination",
//         image:
//           "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Decorative and durable resin laminated glass solutions.",
//       },

//       {
//         title: "Frosted Glass",
//         image:
//           "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Elegant frosted finishes providing privacy and aesthetics.",
//       },

//       {
//         title: "Acid Work Glass",
//         image:
//           "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Premium acid etched glass crafted for modern interiors.",
//       },

//       {
//         title: "Colour Glass",
//         image:
//           "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Stylish colored glass panels for decorative architecture.",
//       },

//       {
//         title: "Multi Design Glass",
//         image:
//           "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Creative designer glass patterns for customized interiors.",
//       },

//       {
//         title: "V-Groove Glass",
//         image:
//           "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Decorative engraved glass with elegant V-groove patterns.",
//       },

//       {
//         title: "Normal Bend Glass",
//         image:
//           "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Curved architectural glass designed for modern structures.",
//       },
//     ],
//   },

//   {
//     heading: "Designer & Decorative Glass",

//     products: [
//       {
//         title: "Design Glass",
//         image:
//           "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Decorative designer glass crafted for luxury interiors.",
//       },

//       {
//         title: "Pinned Glass",
//         image:
//           "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Classic textured pinned glass with elegant patterns.",
//       },

//       {
//         title: "Katrachi Glass",
//         image:
//           "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Traditional decorative Katrachi patterned glass.",
//       },

//       {
//         title: "Master Light Glass",
//         image:
//           "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Premium textured glass allowing soft natural lighting.",
//       },

//       {
//         title: "Swasthick Glass",
//         image:
//           "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Decorative Swasthick pattern glass for traditional aesthetics.",
//       },

//       {
//         title: "Crystal Glass",
//         image:
//           "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "High clarity crystal finish glass with premium elegance.",
//       },

//       {
//         title: "Kasumi Glass",
//         image:
//           "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Japanese-inspired textured Kasumi decorative glass.",
//       },

//       {
//         title: "Karisham Glass",
//         image:
//           "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Stylish patterned Karisham glass for decorative spaces.",
//       },

//       {
//         title: "Grill Glass",
//         image:
//           "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Glass integrated with grill designs for safety and elegance.",
//       },

//       {
//         title: "5mm Pinned Glass",
//         image:
//           "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Durable 5mm pinned textured glass for versatile applications.",
//       },

//       {
//         title: "5mm Kasumi Glass",
//         image:
//           "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2000&auto=format&fit=crop",
//         desc:
//           "Elegant 5mm Kasumi patterned glass with premium finish.",
//       },
//     ],
//   },
// ];
//   const itemsPerSlide = 4;

//   const [slides, setSlides] = useState([0, 0]);

//   useEffect(() => {

//     const interval = setInterval(() => {

//       setSlides((prev) =>
//         prev.map((slide, sectionIndex) => {

//           const totalSlides = Math.ceil(
//             sections[sectionIndex].products.length /
//               itemsPerSlide
//           );

//           return slide === totalSlides - 1
//             ? 0
//             : slide + 1;
//         })
//       );

//     }, 4500);

//     return () => clearInterval(interval);

//   }, []);

//   return (

//     <div className="cp-page">

//       {/* HERO */}

//       <section className="cp-hero">

//         <div className="cp-bg">

//           <img
//             src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2400&auto=format&fit=crop"
//             alt=""
//           />

//         </div>

//         <div className="cp-overlay"></div>
//         <div className="cp-light"></div>
//         <div className="cp-grid"></div>

//         <div className="cp-hero-content">

//           <span>
//             FUTURE • GLASS • ARCHITECTURE
//           </span>

//           <h1>
//             ENGINEERED <br />
//             GLASS <span>SYSTEMS</span>
//           </h1>

//           <p>
//             Premium architectural and specialty glass
//             solutions crafted with cinematic precision,
//             futuristic aesthetics, and modern engineering.
//           </p>

//           <button>
//             Explore Collection
//           </button>

//         </div>

//       </section>

//       {/* SECTIONS */}

//       {sections.map((section, sectionIndex) => (

//         <section
//           className="cp-section"
//           key={sectionIndex}
//         >

//           <div className="cp-section-top">

//             <span>
//               PREMIUM COLLECTION
//             </span>


//             {/* CINEMATIC BACKGROUND */}

// <div className="pr-products-bg">

//   <img
//     src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2400&auto=format&fit=crop"
//     alt=""
//   />

// </div>

// {/* LAYERS */}

// <div className="pr-products-overlay"></div>

// <div className="pr-products-light"></div>

// <div className="pr-products-grid-bg"></div>

// <div className="pr-products-vignette"></div>

//             <h2>
//               {section.heading}
//             </h2>

//           </div>

//           <div className="cp-products-grid">

//             {section.products.map((item, index) => (

//               <div
//                 className="cp-card"
//                 key={index}
//               >

//                 {/* IMAGE */}

//                 <div className="cp-card-image">

//                   <img
//                     src={item.image}
//                     alt={item.title}
//                   />

//                   <div className="cp-card-overlay"></div>

//                 </div>

//                 {/* CONTENT */}

//                 <div className="cp-card-content">

//                   <span>
//                     PREMIUM GLASS
//                   </span>

//                   <h3>
//                     {item.title}
//                   </h3>

//                   <p>
//                     {item.desc}
//                   </p>

//                   <button>
//                     Explore Product →
//                   </button>

//                 </div>

//               </div>

//             ))}

//           </div>

//         </section>

//       ))}

//     </div>
//   );
// }

// export default Product;




// import { useEffect, useState } from "react";

// import "./product.css";

// function Product() {



//   const sections = [

//   {
//     heading: "Architectural Glass",

//     products: [

//       {
//         title: "Tempered Glass",
//         image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000&auto=format&fit=crop",
//         desc: "Processed safety glass engineered for superior strength and durability.",
//       },

//       {
//         title: "Laminated Glass",
//         image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop",
//         desc: "Advanced laminated systems designed for security and UV protection.",
//       },

//       {
//         title: "Reflective Glass",
//         image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
//         desc: "Luxury reflective architectural glass with premium aesthetics.",
//       },

//       {
//         title: "Insulated Glass (DGU)",
//         image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop",
//         desc: "Double glazed insulated glass for thermal and acoustic efficiency.",
//       },

//       {
//         title: "PVB Lamination",
//         image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop",
//         desc: "High-strength laminated safety glass using premium PVB interlayers.",
//       },

//       {
//         title: "Resin Lamination",
//         image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2000&auto=format&fit=crop",
//         desc: "Decorative and durable resin laminated glass solutions.",
//       },

//       {
//         title: "Frosted Glass",
//         image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop",
//         desc: "Elegant frosted finishes providing privacy and aesthetics.",
//       },

//       {
//         title: "Acid Work Glass",
//         image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000&auto=format&fit=crop",
//         desc: "Premium acid etched glass crafted for modern interiors.",
//       },

//       {
//         title: "Colour Glass",
//         image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
//         desc: "Stylish colored glass panels for decorative architecture.",
//       },

//       {
//         title: "Multi Design Glass",
//         image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop",
//         desc: "Creative designer glass patterns for customized interiors.",
//       },

//       {
//         title: "V-Groove Glass",
//         image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2000&auto=format&fit=crop",
//         desc: "Decorative engraved glass with elegant V-groove patterns.",
//       },

//       {
//         title: "Normal Bend Glass",
//         image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop",
//         desc: "Curved architectural glass designed for modern structures.",
//       },

//     ],
//   },

//   {
//     heading: "Designer & Decorative Glass",

//     products: [

//       {
//         title: "Design Glass",
//         image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop",
//         desc: "Decorative designer glass crafted for luxury interiors.",
//       },

//       {
//         title: "Pinned Glass",
//         image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000&auto=format&fit=crop",
//         desc: "Classic textured pinned glass with elegant patterns.",
//       },

//       {
//         title: "Katrachi Glass",
//         image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
//         desc: "Traditional decorative Katrachi patterned glass.",
//       },

//       {
//         title: "Master Light Glass",
//         image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop",
//         desc: "Premium textured glass allowing soft natural lighting.",
//       },

//       {
//         title: "Swasthick Glass",
//         image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2000&auto=format&fit=crop",
//         desc: "Decorative Swasthick pattern glass for traditional aesthetics.",
//       },

//       {
//         title: "Crystal Glass",
//         image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop",
//         desc: "High clarity crystal finish glass with premium elegance.",
//       },

//       {
//         title: "Kasumi Glass",
//         image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop",
//         desc: "Japanese-inspired textured Kasumi decorative glass.",
//       },

//       {
//         title: "Karisham Glass",
//         image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000&auto=format&fit=crop",
//         desc: "Stylish patterned Karisham glass for decorative spaces.",
//       },

//       {
//         title: "Grill Glass",
//         image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
//         desc: "Glass integrated with grill designs for safety and elegance.",
//       },

//       {
//         title: "5mm Pinned Glass",
//         image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop",
//         desc: "Durable 5mm pinned textured glass for versatile applications.",
//       },

//       {
//         title: "5mm Kasumi Glass",
//         image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2000&auto=format&fit=crop",
//         desc: "Elegant 5mm Kasumi patterned glass with premium finish.",
//       },

//     ],
//   },

// ];
//   return (

//     <div className="pr-page">

//       {/* =====================================================
//           HERO
//       ====================================================== */}

//       <section className="pr-hero">

//         {/* BACKGROUND */}

//         <div className="pr-hero-bg">

//           <img
//             src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2400&auto=format&fit=crop"
//             alt=""
//           />

//         </div>

//         <div className="pr-overlay"></div>

//         <div className="pr-gradient"></div>

//         <div className="pr-grid-bg"></div>

//         <div className="pr-noise"></div>

//         {/* LIGHTS */}

//         <div className="pr-light pr-light1"></div>

//         <div className="pr-light pr-light2"></div>

//         {/* CONTENT */}

//         <div className="pr-hero-content">

//           <span>

//             FUTURE • GLASS • SYSTEMS

//           </span>

//           <h1>

//             ENGINEERED <br />

//             GLASS <span>COLLECTIONS</span>

//           </h1>

      

//         </div>

//       </section>

   

//       {sections.map((section, sectionIndex) => (

//         <section
//           className="pr-section"
//           key={sectionIndex}
//         >

//           {/* TOP */}

//           <div className="pr-top">

//             <span>

//               PREMIUM GLASS COLLECTION

//             </span>

//             <h2>

//               {section.heading}

//             </h2>

//           </div>

//           {/* PRODUCTS */}

//           <div className="pr-products">

//             {section.products.map((item, index) => (

//               <div
//                 className={`pr-product ${
//                   index % 2 === 0
//                     ? "normal"
//                     : "reverse"
//                 }`}
//                 key={index}
//               >

//                 {/* IMAGE */}

//                 <div className="pr-image-wrap">

//                   <img
//                     src={item.image}
//                     alt={item.title}
//                   />

//                   <div className="pr-image-overlay"></div>

//                   <div className="pr-image-glow"></div>

//                 </div>

//                 {/* CONTENT */}

//                 <div className="pr-content">

//                   <div className="pr-tag">

//                     FUTURE GLASS

//                   </div>

//                   <h3>

//                     {item.title}

//                   </h3>

//                   <p>

//                     {item.desc}

//                   </p>

//                   <button>

//                     Explore Product

//                   </button>

//                 </div>

//               </div>

//             ))}

//           </div>

//         </section>

//       ))}

//     </div>
//   );
// }

// export default Product;











import { useEffect } from "react";

import "./product.css";
import { Link } from "react-router-dom";

function Product() {

  /* =====================================================
      CINEMATIC INTERACTION
  ====================================================== */

  useEffect(() => {

    const moveReflection = (e) => {

      const reflections =
        document.querySelectorAll(".reflection");

      const towers =
        document.querySelectorAll(".glass-tower");

      const x =
        (e.clientX / window.innerWidth - 0.5);

      const y =
        (e.clientY / window.innerHeight - 0.5);

      reflections.forEach((item, i) => {

        const speed = (i + 1) * 18;

        item.style.transform = `
          translate(
            ${x * speed}px,
            ${y * speed}px
          )
          rotate(25deg)
        `;
      });

      towers.forEach((tower, i) => {

        const speed = (i + 1) * 10;

        tower.style.transform = `
          translateY(${y * speed}px)
          translateX(${x * speed}px)
        `;
      });
    };

    if(window.innerWidth > 768){

      window.addEventListener(
        "mousemove",
        moveReflection
      );
    }

    return () => {

      window.removeEventListener(
        "mousemove",
        moveReflection
      );
    };

  }, []);

  /* =====================================================
      DATA
  ====================================================== */

  // const sections = [

  //   {
  //     heading: "Ar",

  //     products: [

  //       {
  //         title: "Tempered Glass",
  //         image:
  //           "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000&auto=format&fit=crop",
  //         desc:
  //           "Processed safety glass engineered for superior strength and durability.",
  //       },

  //       {
  //         title: "Laminated Glass",
  //         image:
  //           "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop",
  //         desc:
  //           "Advanced laminated systems designed for security and UV protection.",
  //       },

  //       {
  //         title: "Reflective Glass",
  //         image:
  //           "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
  //         desc:
  //           "Luxury reflective architectural glass with premium aesthetics.",
  //       },

  //       {
  //         title: "Insulated Glass",
  //         image:
  //           "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop",
  //         desc:
  //           "Double glazed insulated glass for thermal and acoustic efficiency.",
  //       },

  //     ],
  //   },

  //   {
  //     heading: "Designer & Decorative Glass",

  //     products: [

  //       {
  //         title: "Crystal Glass",
  //         image:
  //           "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2000&auto=format&fit=crop",
  //         desc:
  //           "High clarity crystal finish glass with premium elegance.",
  //       },

  //       {
  //         title: "Master Light Glass",
  //         image:
  //           "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop",
  //         desc:
  //           "Premium textured glass allowing soft natural lighting.",
  //       },

  //       {
  //         title: "Kasumi Glass",
  //         image:
  //           "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop",
  //         desc:
  //           "Japanese-inspired textured Kasumi decorative glass.",
  //       },

  //       {
  //         title: "Colour Glass",
  //         image:
  //           "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000&auto=format&fit=crop",
  //         desc:
  //           "Stylish colored architectural glass for premium spaces.",
  //       },

  //     ],
  //   },

  // ];


    const sections = [

  {
    heading: "ARCHITECTURAL GLASS",

    products: [

      {
        title: "Tempered Glass",
        image: "https://images.pexels.com/photos/287263/pexels-photo-287263.jpeg",
        desc: "Processed safety glass engineered for superior strength and durability.",
      },

      {
        title: "Laminated Glass",
        image: "https://images.pexels.com/photos/7534209/pexels-photo-7534209.jpeg",
        desc: "Advanced laminated systems designed for security and UV protection.",
      },

      {
        title: "Reflective Glass",
        image: "https://images.pexels.com/photos/37320179/pexels-photo-37320179.jpeg",
        desc: "Luxury reflective architectural glass with premium aesthetics.",
      },

      {
        title: "Insulated Glass (DGU)",
        image: "https://images.pexels.com/photos/986829/pexels-photo-986829.jpeg",
        desc: "Double glazed insulated glass for thermal and acoustic efficiency.",
      },

      {
        title: "PVB Lamination",
        image: "https://images.pexels.com/photos/7005300/pexels-photo-7005300.jpeg",
        desc: "High-strength laminated safety glass using premium PVB interlayers.",
      },

      {
        title: "Resin Lamination",
        image: "https://images.pexels.com/photos/13657146/pexels-photo-13657146.jpeg",
        desc: "Decorative and durable resin laminated glass solutions.",
      },

      {
        title: "Frosted Glass",
        image: "https://images.pexels.com/photos/31173352/pexels-photo-31173352.jpeg",
        desc: "Elegant frosted finishes providing privacy and aesthetics.",
      },

      {
        title: "Acid Work Glass",
        image: "https://images.pexels.com/photos/33308825/pexels-photo-33308825.jpeg",
        desc: "Premium acid etched glass crafted for modern interiors.",
      },

      {
        title: "Colour Glass",
        image: "https://images.pexels.com/photos/2472270/pexels-photo-2472270.jpeg",
        desc: "Stylish colored glass panels for decorative architecture.",
      },

      {
        title: "Multi Design Glass",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop",
        desc: "Creative designer glass patterns for customized interiors.",
      },

      {
        title: "V-Groove Glass",
        image: "https://images.pexels.com/photos/12956032/pexels-photo-12956032.jpeg",
        desc: "Decorative engraved glass with elegant V-groove patterns.",
      },

      {
        title: "Normal Bend Glass",
        image: "https://images.pexels.com/photos/188035/pexels-photo-188035.jpeg",
        desc: "Curved architectural glass designed for modern structures.",
      },

    ],
  },

  {
    heading: "Designer & Decorative Glass",

    products: [

      {
        title: "Design Glass",
        image: "https://images.pexels.com/photos/37319857/pexels-photo-37319857.jpeg",
        desc: "Decorative designer glass crafted for luxury interiors.",
      },

      // {
      //   title: "Pinned Glass",
      //   image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000&auto=format&fit=crop",
      //   desc: "Classic textured pinned glass with elegant patterns.",
      // },

      // {
      //   title: "Katrachi Glass",
      //   image: "https://images.pexels.com/photos/32547165/pexels-photo-32547165.jpeg",
      //   desc: "Traditional decorative Katrachi patterned glass.",
      // },

      {
        title: "Master Light Glass",
        image: "https://images.pexels.com/photos/37414901/pexels-photo-37414901.jpeg",
        desc: "Premium textured glass allowing soft natural lighting.",
      },

      {
        title: "Mirror Glass",
        image: "https://images.pexels.com/photos/30824915/pexels-photo-30824915.jpeg",
        desc: "Decorative Swasthick pattern glass for traditional aesthetics.",
      },

      {
        title: "Ceramic Printed ",
        image: "https://images.pexels.com/photos/5502411/pexels-photo-5502411.jpeg",
        desc: "High clarity crystal finish glass with premium elegance.",
      },

      // {
      //   title: "Kasumi Glass",
      //   image: "https://images.pexels.com/photos/164370/pexels-photo-164370.jpeg",
      //   desc: "Japanese-inspired textured Kasumi decorative glass.",
      // },

      // {
      //   title: "Karisham Glass",
      //   image: "https://images.pexels.com/photos/25643301/pexels-photo-25643301.jpeg",
      //   desc: "Stylish patterned Karisham glass for decorative spaces.",
      // },

      // {
      //   title: "Grill Glass",
      //   image: "https://images.pexels.com/photos/575895/pexels-photo-575895.jpeg",
      //   desc: "Glass integrated with grill designs for safety and elegance.",
      // },

      // {
      //   title: "5mm Pinned Glass",
      //   image: "https://images.pexels.com/photos/2040476/pexels-photo-2040476.jpeg",
      //   desc: "Durable 5mm pinned textured glass for versatile applications.",
      // },

      // {
      //   title: "5mm Kasumi Glass",
      //   image: "https://images.pexels.com/photos/2374987/pexels-photo-2374987.jpeg",
      //   desc: "Elegant 5mm Kasumi patterned glass with premium finish.",
      // },

    ],
  },

];
  return (

    <div className="pr-page">

      {/* =====================================================
          CINEMATIC BACKGROUND
      ====================================================== */}

      <div className="pr-cinematic-bg">

        <div className="glass-tower tower-1"></div>

        <div className="glass-tower tower-2"></div>

        <div className="glass-tower tower-3"></div>

        <div className="reflection reflection-1"></div>

        <div className="reflection reflection-2"></div>

        <div className="reflection reflection-3"></div>

        <div className="scan-light"></div>

        <div className="orb orb-1"></div>

        <div className="orb orb-2"></div>

        <div className="orb orb-3"></div>

        <div className="hud-grid"></div>

      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="pr-hero">

        <div className="pr-overlay"></div>

        <div className="pr-gradient"></div>

        <div className="pr-hero-content">

          <span>

            FUTURE • GLASS • SYSTEMS

          </span>

          <h1>

            ENGINEERED <br />

            <span> GLASS COLLECTIONS</span>

          </h1>

          {/* <p>

            Premium architectural and decorative
            glass systems crafted with futuristic
            aesthetics and precision engineering.

          </p> */}

        </div>

      </section>

      {/* =====================================================
          SECTIONS
      ====================================================== */}

      {sections.map((section, sectionIndex) => (

        <section
          className="pr-section"
          key={sectionIndex}
        >

          {/* TOP */}

          <div className="pr-top">

            <span>

              PREMIUM GLASS COLLECTION

            </span>

            <h2>

              {section.heading}

            </h2>

          </div>

          {/* PRODUCTS */}

          <div className="pr-products">

            {section.products.map((item, index) => (

              <div
                className={`pr-product ${
                  index % 2 === 0
                    ? "normal"
                    : "reverse"
                }`}
                key={index}
              >

                {/* IMAGE */}

                <div className="pr-image-wrap">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="pr-image-overlay"></div>

                  <div className="pr-image-glow"></div>

                </div>

                {/* CONTENT */}

                <div className="pr-content">

                  {/* <div className="pr-tag">

                    FUTURE GLASS

                  </div> */}

                  <h3>

                    {item.title}

                  </h3>

                  <p>

                    {item.desc}

                  </p>
<Link to="/contactus">
                  <button>

                    Explore Product

                  </button>
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </section>

      ))}

      {/* HUGE TYPO */}

      <div className="pr-bg-text">

        PRODUCTS

      </div>

    </div>
  );
}

export default Product;