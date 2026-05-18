// import "./Expertise.css";

// import expertImg from "../assets/emp1.jpeg";

// function Expertise() {

//   return (
//     <section className="expertise-section">

//       {/* Badge */}
//       <div className="expertise-badge">
//         <span className="dot"></span>
//         <p>Our Expertise</p>
//       </div>

//       {/* Main Content */}
//       <div className="expertise-container">

//         {/* Left Content */}
//         <div className="expertise-left">

//           <h2>
//             Excellence through advanced
//             glass processing expertise
//           </h2>

//           <p>
//             We achieve superior results by combining cutting-edge
//             glass processing technologies with deep industry knowledge.
//             Our expertise ensures precision, durability, and
//             high-performance outcomes across every project.
//           </p>

//           {/* Progress 1 */}
//           <div className="progress-box">

//             <div className="progress-head">
//               <span>Glass Processing Efficiency</span>
//               <span>92%</span>
//             </div>

//             <div className="progress-bar">
//               <div
//                 className="progress-fill"
//                 style={{ width: "92%" }}
//               ></div>
//             </div>

//           </div>

//           {/* Progress 2 */}
//           <div className="progress-box">

//             <div className="progress-head">
//               <span>Quality & Safety Standards</span>
//               <span>95%</span>
//             </div>

//             <div className="progress-bar">
//               <div
//                 className="progress-fill"
//                 style={{ width: "95%" }}
//               ></div>
//             </div>

//           </div>

//         </div>

//         {/* Right Image */}
//         <div className="expertise-right">
//           <img src={expertImg} alt="Expert Worker" />
//         </div>

//       </div>

//     </section>
//   );
// }

// export default Expertise;

















// Expertise.jsx

import "./Expertise.css";

function Expertise() {

  const expertiseData = [

    {
      number: "92%",
      title: "Glass Processing Precision",
      text:
        "Advanced CNC cutting and edge-finishing systems engineered for architectural-grade perfection.",
    },

    {
      number: "95%",
      title: "Quality & Safety Standards",
      text:
        "Every panel undergoes multi-stage durability and stress testing before delivery.",
    },

    {
      number: "98%",
      title: "Architectural Accuracy",
      text:
        "Precision-engineered fabrication tailored for luxury residential and commercial projects.",
    },

  ];

  return (

    <section className="ex-section">

      {/* CINEMATIC BACKGROUND */}

      <div className="ex-bg">

        <img
          src="https://images.pexels.com/photos/2347764/pexels-photo-2347764.jpeg"
          alt=""
        />

      </div>

      {/* LAYERS */}

      <div className="ex-overlay"></div>

      <div className="ex-light"></div>

      <div className="ex-vignette"></div>

      <div className="ex-grid"></div>

      {/* TOP */}

      <div className="ex-top">

        <span>

          PRECISION • PERFORMANCE • EXPERTISE

        </span>

        <h2>

          ENGINEERED <br />

          FOR MODERN <span>ARCHITECTURE</span>

        </h2>

      </div>

      {/* MAIN LAYOUT */}

      <div className="ex-layout">

        {/* LEFT */}

        <div className="ex-left">

          <div className="ex-main-card">

            <div className="ex-card-overlay"></div>

            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2400&auto=format&fit=crop"
              alt=""
            />

            <div className="ex-main-content">

              <span>

                ADVANCED MANUFACTURING

              </span>

              <h3>

                Architectural glass systems
                crafted through innovation,
                precision engineering,
                and premium fabrication.

              </h3>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="ex-right">

          {expertiseData.map((item, index) => (

            <div
              className="ex-card"
              key={index}
            >

              {/* IMAGE */}

              <div className="ex-card-image">

                <img
                  src={
                    index === 0
                      ? "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop"
                      : index === 1
                      ? "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=1600&auto=format&fit=crop"
                      : "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
                  }
                  alt=""
                />

              </div>

              {/* CONTENT */}

              <div className="ex-card-content">

                <h4>

                  {item.number}

                </h4>

                <h5>

                  {item.title}

                </h5>

                <p>

                  {item.text}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* HUGE TYPO */}

      <div className="ex-bg-text">

        EXPERTISE

      </div>

    </section>
  );
}

export default Expertise;