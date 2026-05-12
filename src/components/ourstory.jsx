// StoryBanner.jsx

import "./ourstory.css";
import Herostory from "../assets/storyhero .png"

function OurStory() {
  return (
    <section className="story-banner-section">
      
      <div className="story-banner">
        <img
          src={Herostory}
          alt="Our Story"
        />

        <div className="story-overlay">
          <button>OUR STORY</button>
        </div>
      </div>

    </section>
  );
}

export default OurStory;