import "./Strength.css";
import reflection from '../assets/reflection.jpeg';
import roller from '../assets/roller.png';
import fragmen from "../assets/fragmen.png";
import fracture from '../assets/frag.png';
import visual from '../assets/vlt.jpeg';
import snaptest from "../assets/snap.png";
import delta from "../assets/deltatest.png";
import bake from "../assets/bake.jpeg";
import eee from "../assets/eee1.mp4";
import resistance from '../assets/imp1.png';
import impact from "../assets/impact.png";
import stress from "../assets/stress.png";
import butterfly from "../assets/butterfly.png";
import boil from "../assets/boil.png";

const qualityChecks = [

  {
    title: "Resistance To Shock Test",

    desc:
      "Engineered to withstand sudden impact and thermal stress ensuring superior long-term durability.",

    image: resistance
  },

  {
    title: "Fracture & Adhesion Test",

    desc:
      "Advanced bonding validation process ensuring maximum structural integrity and safety.",

    image:fracture,
  },

  {
    title: "Fragmentation Test",

    desc:
      "Ensures controlled breakage patterns improving safety and premium architectural reliability.",

    image: fragmen
  },

  {
    title: "Visual Light Transmission Test",

    desc:
      "Optimized clarity and transparency delivering luxury aesthetics and balanced illumination.",

    image:
      visual,
  },

  {
    title: "Roller Waviness Test",

    desc:
      "Precision flatness testing ensuring distortion-free premium glass finish quality.",

    image:
    roller
  },

  {
    title: "Impact Resistance Test",

    desc:
      "Designed for high-performance environments requiring superior strength and durability.",

    image: impact
  },

  {
    title: "Stress Measurement Test",

    desc:
      "Scientifically balanced stress engineering for long-lasting structural performance.",

    image:
      stress
  },

  {
    title: "Butterfly Test",

    desc:
      "Advanced toughness validation process ensuring premium-grade reliability standards.",

    image:butterfly
  },

 

  {
    title: "Snap Time Test",

    desc:
      "Precision-tested timing consistency improving performance reliability under pressure.",

    image:
      snaptest,
  },

  

  {
    title: "Delta T Test",

    desc:
      "Extreme thermal variation testing ensuring durability in demanding exterior environments.",

    image:
     delta,
  },
  {
  title: "Boil Test",

  desc:
    "High-temperature boiling validation ensures exceptional thermal endurance and bonding stability under extreme conditions.",

  image:
   boil
  },

{
  title: "Bake Test",

  desc:
    "Advanced break resistance analysis engineered to validate superior toughness, safety and structural reliability.",

 image:bake

  },

];

function Strength() {

  return (

    // <section className="qa-section">

    //   {/* BACKGROUND */}

    //   <div className="qa-grid"></div>

    //   <div className="qa-glow qa-glow-one"></div>

    //   <div className="qa-glow qa-glow-two"></div>

    //   {/* HEADER */}

    //   <div className="qa-header">

    //     <span>

    //       QUALITY ASSURANCE SYSTEM

    //     </span>

    //     <h2>

    //       Precision Tested.

    //     </h2>

    //     <p>

    //       Every glass product undergoes advanced
    //       engineering validation ensuring superior
    //       durability, optical clarity and premium
    //       architectural performance.

    //     </p>

    //   </div>

  

    //   <div className="qa-marquee-wrapper">



    //     <div className="qa-marquee-column">

    //       <div className="qa-marquee-track qa-track-up">

    //         {[...qualityChecks, ...qualityChecks].map((item, index) => (

    //           <div
    //             className="qa-test-card"
    //             key={index}
    //           >

    //             {/* IMAGE */}

    //             <div className="qa-test-image">

    //               <img
    //                 src={item.image}
    //                 alt={item.title}
    //               />

    //               <div className="qa-test-overlay"></div>

    //               <div className="qa-test-shine"></div>

    //             </div>

    //             {/* CONTENT */}

    //             <div className="qa-test-content">

    //               <h3>

    //                 {item.title}

    //               </h3>

    //               <p>

    //                 {item.desc}

    //               </p>

    //               <div className="qa-highlight-box">

    //                 <span>

    //                   ✓

    //                 </span>

    //                 <p>

    //                   Premium validated testing
    //                   ensuring superior market-leading
    //                   durability and architectural
    //                   reliability.

    //                 </p>

    //               </div>

    //             </div>

    //           </div>

    //         ))}

    //       </div>

    //     </div>

    //     {/* RIGHT COLUMN */}

    //     <div className="qa-marquee-column">

    //       <div className="qa-marquee-track qa-track-down">

    //         {[...qualityChecks, ...qualityChecks].map((item, index) => (

    //           <div
    //             className="qa-test-card"
    //             key={index}
    //           >

    //             {/* IMAGE */}

    //             <div className="qa-test-image">

    //               <img
    //                 src={item.image}
    //                 alt={item.title}
    //               />

    //               <div className="qa-test-overlay"></div>

    //               <div className="qa-test-shine"></div>

    //             </div>

    //             {/* CONTENT */}

    //             <div className="qa-test-content">

    //               <h3>

    //                 {item.title}

    //               </h3>

    //               <p>

    //                 {item.desc}

    //               </p>

    //               <div className="qa-highlight-box">

    //                 <span>

    //                   ✓

    //                 </span>

    //                 <p>

    //                   Advanced engineered quality
    //                   control delivering premium
    //                   glass performance and durability.

    //                 </p>

    //               </div>

    //             </div>

    //           </div>

    //         ))}

    //       </div>

    //     </div>

    //   </div>

    //   {/* HUGE BACKGROUND TEXT */}

    //   <div className="qa-bg-text">

    //     TESTING

    //   </div>

    // </section>

    <section className="qa-section">

  {/* =====================================================
      VIDEO BACKGROUND
  ====================================================== */}

  <div className="qa-video-wrapper">

    <video
      autoPlay
      muted
      loop
      playsInline
      className="qa-bg-video"
    >

      <source
        src={eee}
        type="video/mp4"
      />

    </video>

    {/* DARK OVERLAY */}

    <div className="qa-video-overlay"></div>

  </div>

  {/* GRID */}

  <div className="qa-grid"></div>

  {/* GLOWS */}

  <div className="qa-glow qa-glow-one"></div>

  <div className="qa-glow qa-glow-two"></div>

  {/* =====================================================
      HEADER
  ====================================================== */}

  <div className="qa-header">

    <span>

      QUALITY ASSURANCE SYSTEM

    </span>

    <h2>

   
      PRECISION TESTED

    </h2>

    <p>

      Every glass product undergoes advanced
      engineering validation ensuring superior
      durability, optical clarity and premium
      architectural performance.

    </p>

  </div>

  {/* =====================================================
      MARQUEE SECTION
  ====================================================== */}

  <div className="qa-marquee-wrapper">

    {/* LEFT COLUMN */}

    <div className="qa-marquee-column">

      <div className="qa-marquee-track qa-track-up">

        {[...qualityChecks, ...qualityChecks].map((item, index) => (

          <div
            className="qa-test-card"
            key={index}
          >

            {/* IMAGE */}

            <div className="qa-test-image">

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="qa-test-overlay"></div>

              <div className="qa-test-shine"></div>

            </div>

            {/* CONTENT */}

            <div className="qa-test-content">

              <h3>

                {item.title}

              </h3>

              <p>

                {item.desc}

              </p>

              {/* <div className="qa-highlight-box">

                <span>

                  ✓

                </span>

                <p>

                  Premium validated testing
                  ensuring superior market-leading
                  durability and architectural
                  reliability.

                </p>

              </div> */}

            </div>

          </div>

        ))}

      </div>

    </div>

    {/* RIGHT COLUMN */}

    <div className="qa-marquee-column">

      <div className="qa-marquee-track qa-track-down">

        {[...qualityChecks, ...qualityChecks].map((item, index) => (

          <div
            className="qa-test-card"
            key={index}
          >

            {/* IMAGE */}

            <div className="qa-test-image">

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="qa-test-overlay"></div>

              <div className="qa-test-shine"></div>

            </div>

            {/* CONTENT */}

            <div className="qa-test-content">

              <h3>

                {item.title}

              </h3>

              <p>

                {item.desc}

              </p>

              {/* <div className="qa-highlight-box">

                <span>

                  ✓

                </span>

                <p>

                  Advanced engineered quality
                  control delivering premium
                  glass performance and durability.

                </p>

              </div> */}

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>

  {/* HUGE BG TEXT */}

  <div className="qa-bg-text">

    TESTING

  </div>

</section>

  );
}

export default Strength;  