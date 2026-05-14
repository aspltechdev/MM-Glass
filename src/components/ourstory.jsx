// // // StoryBanner.jsx

// // import "./ourstory.css";
// // import Herostory from "../assets/storyhero .png"

// // function OurStory() {
// //   return (
// //     <section className="story-banner-section">
      
// //       <div className="story-banner">
// //         <img
// //           src={Herostory}
// //           alt="Our Story"
// //         />

// //         <div className="story-overlay">
// //           <button>OUR STORY</button>
// //         </div>
// //       </div>

// //     </section>
// //   );
// // }

// // export default OurStory;


// // StoryBanner.jsx

// import React from "react";
// import "./ourstory.css";

// import Herostory from "../assets/storyhero.png";
// import GlassHeroSection from "./GlassHeroSection";

// function OurStory() {
//   return (
//     <section className="story-banner-section">

//       <div className="story-banner">

//         <img
//           src={Herostory}
//           alt="Our Story"
//           className="story-banner-image"
//         />

//         <div className="story-overlay">

//           <button className="story-btn">
//             OUR STORY
//           </button>

//         </div>

//       </div>

//     </section>
//     <GlassHeroSection/>
//   );
// }

// export default OurStory;

// OurStory.jsx

import React from "react";
import "./ourstory.css";

import Herostory from "../assets/storyhero.png";
import GlassHeroSection from "./GlassHeroSection";
import GlassStorySection from "./GlassStorySection";
import StoryProjectsSection from "./StoryProjectsSection";

function OurStory() {
  return (
    <>
      {/* TOP BANNER */}
      <section className="story-banner-section">

        <div className="story-banner">

          <img
            src={Herostory}
            alt="Our Story"
            className="story-banner-image"
          />

          <div className="story-overlay">

            <button className="story-btn">
              OUR STORY
            </button>

          </div>

        </div>

      </section>

      {/* GLASS HERO SECTION */}
      <GlassHeroSection />
      <GlassStorySection/>
      <StoryProjectsSection/>
    </>
  );
}

export default OurStory;