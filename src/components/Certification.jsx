// import "./Certification.css";

// // Import certificate images
// import cert1 from "../assets/certifications/ANSI.jfif";
// import cert2 from "../assets/certifications/ASTM.jfif";
// import cert3 from "../assets/certifications/BIS.png";
// import cert4 from "../assets/certifications/GSI.png";
// import cert5 from "../assets/certifications/ISO.jpg";
// import cert6 from "../assets/certifications/SGS.png";

// function Certification() {
//   const certificates = [
//     cert1,
//     cert2,
//     cert3,
//     cert4,
//     cert5,
//     cert6,
//     cert1,
//     cert2,
//     cert3,
//     cert4,
//     cert5,
//     cert6,
//   ];

//   return (
//     <section className="certification-section">

//       {/* Heading Badge */}
//       <div className="certification-badge">
//         <span className="dot"></span>
//         <p>Our Certifications</p>
//       </div>

//       {/* Horizontal Scroll */}
//       <div className="certification-scroll">

//         {/* TOP ROW */}
//         <div className="certification-row">
//           {certificates.slice(0, 6).map((image, index) => (
//             <div className="certificate-card" key={index}>
//               <img src={image} alt="certificate" />
//             </div>
//           ))}
//         </div>

//         {/* BOTTOM ROW */}
//         <div className="certification-row reverse">
//           {certificates.slice(6, 12).map((image, index) => (
//             <div className="certificate-card" key={index}>
//               <img src={image} alt="certificate" />
//             </div>
//           ))}
//         </div>

//       </div>

//     </section>
//   );
// }

// export default Certification;  


















// Certification.jsx

import "./Certification.css";

import cert1 from "../assets/certifications/ANSI.jfif";
import cert2 from "../assets/certifications/ASTM.jfif";
import cert3 from "../assets/certifications/BIS.png";
import cert4 from "../assets/certifications/GSI.png";
import cert5 from "../assets/certifications/ISO.jpg";
import cert6 from "../assets/certifications/SGS.png";

function Certification() {

  const certifications = [

    {
      image: cert1,
      title: "ANSI Certified",
      subtitle: "Global Quality Systems",
    },

    {
      image: cert2,
      title: "ASTM Standards",
      subtitle: "Precision Tested",
    },

    {
      image: cert3,
      title: "BIS Approved",
      subtitle: "Trusted Manufacturing",
    },

    {
      image: cert4,
      title: "GSI Verification",
      subtitle: "Future Glass Systems",
    },

    {
      image: cert5,
      title: "ISO Certified",
      subtitle: "International Excellence",
    },

    {
      image: cert6,
      title: "SGS Verified",
      subtitle: "Premium Inspection",
    },

  ];

  return (

    <section className="crt-section">

      {/* BACKGROUND */}
{/* REAL BG IMAGE */}

<div className="crt-bg-image">

  <img
    src="https://images.pexels.com/photos/29644165/pexels-photo-29644165.jpeg"
    alt=""
  />

</div>
<div className="crt-gradient-overlay"></div>
    <div className="crt-grid"></div>

<div className="crt-light"></div>

<div className="crt-vignette"></div>
      <div className="crt-noise"></div>

      {/* LIGHTS */}

      <div className="crt-light crt-light1"></div>
      <div className="crt-light crt-light2"></div>

      {/* TOP */}

      <div className="crt-top">

        <div className="crt-badge">

          <span></span>

          GLOBAL CERTIFICATION SYSTEMS

        </div>

        <h2>

          ENGINEERED <br />

          WITH <span>TRUST</span>

        </h2>

        <p>
          Internationally verified systems ensuring
          premium quality, architectural precision,
          and future-ready manufacturing excellence.
        </p>

      </div>

      {/* CERTIFICATION GRID */}

      <div className="crt-grid-layout">

        {certifications.map((item, index) => (

          <div
            className="crt-card"
            key={index}
          >

            {/* GLOW */}

            <div className="crt-card-glow"></div>

            {/* TOP */}

            <div className="crt-top-bar">

             

            </div>

            {/* IMAGE */}

            <div className="crt-image-wrap">

              <img
                src={item.image}
                alt=""
              />

            </div>

            {/* CONTENT */}

            <div className="crt-content">

              <h3>{item.title}</h3>

              <p>{item.subtitle}</p>

            </div>

            {/* FLOATING NUMBER */}

         

          </div>

        ))}

      </div>

      {/* HUGE TYPO */}

      <div className="crt-bg-text">

        CERTIFIED

      </div>

    </section>
  );
}

export default Certification;