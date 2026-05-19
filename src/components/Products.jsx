// // Products.jsx

// import "./Products.css";

// function Products() {

//   const products = [

//     {
//       title: "Tempered Glass",
//       text:
//         "Precision-engineered safety glass designed for modern architectural ecosystems.",
//       image:
//         "https://images.pexels.com/photos/31573572/pexels-photo-31573572/free-photo-of-modern-glass-facade-reflecting-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     },

//     {
//       title: "Heat Soaked Glass",
//       text:
//         "Advanced thermal testing systems ensuring maximum reliability and performance.",
//       image:
//         "https://images.pexels.com/photos/9716292/pexels-photo-9716292.jpeg",
//     },

//     {
//       title: "Heat Strengthened",
//       text:
//         "Future-ready glass solutions engineered for structural resilience and optical clarity.",
//       image:"https://images.pexels.com/photos/10742993/pexels-photo-10742993.jpeg",
//     },

//     {
//       title: "Laminated Glass",
//       text:
//         "Premium acoustic, UV-protective, and security-focused architectural glass systems.",
//       image:
//         "https://images.pexels.com/photos/6538946/pexels-photo-6538946.jpeg",
//     },

//   ];

//   return (

//     <section className="px-section">

//       {/* BACKGROUND */}
// {/* REAL BG IMAGE */}

// <div className="px-bg-image">

//   <img
//     src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2400&auto=format&fit=crop"
//     alt=""
//   />

// </div>


//       {/* <div className="px-gradient"></div> */}

//    <div className="px-gradient-overlay"></div>
//    <div className="px-light"></div>

// <div className="px-vignette"></div>
//       <div className="px-grid"></div>
//       <div className="px-noise"></div>

//       {/* LIGHTS */}

//       <div className="px-light px-light1"></div>
//       <div className="px-light px-light2"></div>

//       {/* TOP */}

//       <div className="px-top">

//         <div className="px-badge">

//           <span></span>

//           FUTURE GLASS ECOSYSTEMS

//         </div>

//         <h2>

//           ARCHITECTURAL <br />

//           GLASS <span>COLLECTIONS</span>

//         </h2>

//         <p>
//           Intelligent glass systems engineered
//           for luxury architecture, premium interiors,
//           and futuristic spatial experiences.
//         </p>

//       </div>

//       {/* PRODUCTS */}

//       <div className="px-layout">

//         {products.map((item, index) => (

//           <div
//             className="px-card"
//             key={index}
//           >

//             {/* IMAGE */}

//             <div className="px-image">

//               <img
//                 src={item.image}
//                 alt=""
//               />

//               <div className="px-image-overlay"></div>

//             </div>

//             {/* CONTENT */}

//             <div className="px-content">

             

//               <h3>{item.title}</h3>

//               <p>{item.text}</p>

//               <button>

//                 Explore System

//               </button>

//             </div>

//           </div>

//         ))}

//       </div>

   

// <div className="px-bottom">

//   <button className="px-explore-btn">

//     <span></span>

//     Explore More Products

//   </button>

// </div>

//       {/* HUGE TYPO */}

//       <div className="px-bg-text">

//         PRODUCTS

//       </div>

//     </section>
//   );
// }

// export default Products;




import "./Products.css";
import img1 from "../assets/products1.png";
import img2 from "../assets/products2.png";

function Products() {

  const products = [

    {
      title: "Tempered Glass",
      text:
        "Precision-engineered safety glass designed for modern architectural ecosystems.",
      image:img1,
    },

    {
      title: "Crystal Glass",
      text:
        "Advanced thermal testing systems ensuring maximum reliability and performance.",
      image:img2,
    },

    {
      title: "Heat Strengthened",
      text:
        "Future-ready glass solutions engineered for structural resilience and optical clarity.",
      image:
        "https://images.pexels.com/photos/36894514/pexels-photo-36894514.jpeg",
    },

    {
      title: "Laminated Glass",
      text:
        "Premium acoustic, UV-protective, and security-focused architectural glass systems.",
      image:
        "https://images.pexels.com/photos/18454065/pexels-photo-18454065.jpeg",
    },

  ];

  return (

    <section className="px-section">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="px-bg-image">

        <img
          src="https://images.pexels.com/photos/16473128/pexels-photo-16473128.jpeg"
          alt=""
        />

      </div>

      {/* OVERLAY */}

      <div className="px-overlay"></div>

      {/* GRADIENT */}

      <div className="px-gradient"></div>

      {/* NOISE */}

      <div className="px-noise"></div>

      {/* LIGHTS */}

      <div className="px-light px-light1"></div>

      <div className="px-light px-light2"></div>

      {/* PARTICLES */}

      <div className="px-particles">

        {Array.from({ length: 35 }).map((_, i) => (

          <span
            key={i}
            className="px-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></span>

        ))}

      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="px-top">

        <div className="px-badge">

          <span></span>

          FUTURE GLASS ECOSYSTEMS

        </div>

        <h2>

          ARCHITECTURAL <br />

          GLASS <span>COLLECTIONS</span>

        </h2>

        <p>

          Intelligent glass systems engineered
          for luxury architecture, premium interiors,
          and futuristic spatial experiences.

        </p>

      </div>

      {/* =====================================================
          PRODUCT GRID
      ====================================================== */}

      <div className="px-layout">

        {products.map((item, index) => (

          <div
            className="px-card"
            key={index}
          >

            {/* IMAGE */}

            <div className="px-image">

              <img
                src={item.image}
                alt={item.title}
              />

            </div>

            {/* GLASS PANEL */}

            <div className="px-glass-panel">

              {/* NUMBER */}

            

              {/* TEXT */}

              <div className="px-text">

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

              {/* BUTTON */}

              <button>

                Explore System

              </button>

            </div>

          </div>

        ))}

      </div>

      {/* =====================================================
          BUTTON
      ====================================================== */}

      <div className="px-bottom">

        <button className="px-explore-btn">

          <span></span>

          Explore More Products

        </button>

      </div>

      {/* HUGE TEXT */}

      <div className="px-bg-text">

        PRODUCTS

      </div>

    </section>
  );
}

export default Products;