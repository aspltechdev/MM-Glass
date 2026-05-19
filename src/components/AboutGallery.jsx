// import "./AboutGallery.css";

// function AboutGallery() {

//   const images = [

//     "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1800&auto=format&fit=crop",

//     "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1800&auto=format&fit=crop",

//     "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1800&auto=format&fit=crop",

//     "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1800&auto=format&fit=crop",

//     "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1800&auto=format&fit=crop",

//     "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=1800&auto=format&fit=crop",

//   ];

//   return (

//     <section className="ag-section">

//       {/* BG */}

//       <div className="ag-bg-image">

//   <img
//     src="https://images.pexels.com/photos/36423820/pexels-photo-36423820.jpeg"
//     alt=""
//   />

// </div>


// <div className="ag-gradient-overlay"></div>
//     <div className="ag-grid"></div>
//       {/* <div className="ag-bg"></div> */}

//       <div className="ag-overlay"></div>

//       <div className="ag-light"></div>

//       {/* TOP */}

//       <div className="ag-top">

//         <span>

//           INSIDE OUR ECOSYSTEM

//         </span>

//         <h2>

//           Sneak peek into
//           our glass world.

//         </h2>

//       </div>

//       {/* ROW 1 */}

//       <div className="ag-row row-right">

//         <div className="ag-track">

//           {[...images, ...images].map((img, index) => (

//             <div
//               className="ag-card"
//               key={index}
//             >

//               <img
//                 src={img}
//                 alt=""
//               />

//               <div className="ag-card-overlay"></div>

//             </div>

//           ))}

//         </div>

//       </div>

//       {/* ROW 2 */}

//       <div className="ag-row row-left">

//         <div className="ag-track">

//           {[...images, ...images].map((img, index) => (

//             <div
//               className="ag-card large"
//               key={index}
//             >

//               <img
//                 src={img}
//                 alt=""
//               />

//               <div className="ag-card-overlay"></div>

//             </div>

//           ))}

//         </div>

//       </div>

//       {/* FLOATING GLASS PANEL */}

//       <div className="ag-floating-panel">

//         <span>

//           CINEMATIC MANUFACTURING

//         </span>

//         <h3>

//           Precision-crafted
//           architectural glass systems.

//         </h3>

//       </div>

//     </section>
//   );
// }

// export default AboutGallery;
















import "./AboutGallery.css";

// IMPORT LOCAL IMAGES
import gallery1 from "../assets/gallery/gallery1.jpg";
import gallery2 from "../assets/gallery/gallery2.png";
import gallery3 from "../assets/gallery/gallery3.jpg";
import gallery4 from "../assets/gallery/gallery4.png";
import gallery5 from "../assets/gallery/gallery5.jpg";
import gallery6 from "../assets/gallery/gallery6.jpg";
import gallery7 from "../assets/gallery/gallery7.jpg";
import gallery8 from "../assets/gallery/gallery8.jpg";
import gallery9 from "../assets/gallery/gallery9.jpg";
import gallery10 from "../assets/gallery/gallery10.jpg";
import gallery11 from "../assets/gallery/gallery11.jpg";
import gallery12 from "../assets/gallery/gallery12.jpg";
import gallery13 from "../assets/gallery/gallery13.jpg";
import gallery14 from "../assets/gallery/gallery14.png";
import gallery15 from "../assets/gallery/gallery15.png";
import gallery16 from "../assets/gallery/gallery16.jpg";
import gallery17 from "../assets/gallery/gallery17.jpg";
import gallery18 from "../assets/gallery/gallery18.jpg";

function AboutGallery() {

  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
    gallery16,
    gallery17,
    gallery18,
  ];

  return (

    <section className="ag-section">

      {/* BG */}
      <div className="ag-bg-image">

        <img
          src={gallery1}
          alt=""
        />

      </div>

      <div className="ag-gradient-overlay"></div>

      <div className="ag-grid"></div>

      <div className="ag-overlay"></div>

      <div className="ag-light"></div>

      {/* TOP */}
      <div className="ag-top">

        <span>
          INSIDE OUR ECOSYSTEM
        </span>

        <h2>
          {/* Sneak peek into
          our glass world. */}

          STEP INTO OUR GLASS WORLD
        </h2>

      </div>

      {/* ROW 1 */}
      <div className="ag-row row-right">

        <div className="ag-track">

          {[...images, ...images].map((img, index) => (

            <div
              className="ag-card"
              key={index}
            >

              <img
                src={img}
                alt={`gallery-${index}`}
              />

              <div className="ag-card-overlay"></div>

            </div>

          ))}

        </div>

      </div>

      {/* ROW 2 */}
      <div className="ag-row row-left">

        <div className="ag-track">

          {[...images, ...images].map((img, index) => (

            <div
              className="ag-card large"
              key={index}
            >

              <img
                src={img}
                alt={`gallery-${index}`}
              />

              <div className="ag-card-overlay"></div>

            </div>

          ))}

        </div>

      </div>

      {/* FLOATING GLASS PANEL */}
      <div className="ag-floating-panel">

        <span>
          CINEMATIC MANUFACTURING
        </span>

        <h3>
          Precision-crafted
          architectural glass systems.
        </h3>

      </div>

    </section>
  );
}

export default AboutGallery;