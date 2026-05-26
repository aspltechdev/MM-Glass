import React from "react";
import "./FounderStory.css";

const FounderStory = () => {
  return (
    <section className="founder-story">
      <div className="founder-story__container">
        {/* LEFT IMAGE SIDE */}
        <div className="founder-story__visual">
          <div className="founder-story__image-card">
            <img
              src="https://images.pexels.com/photos/26692091/pexels-photo-26692091.jpeg"
              alt="Founder"
              className="founder-story__image"
            />

            <div className="founder-story__floating-card">
              <span>10+ Years Experience</span>
              <h4>Building meaningful experiences</h4>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT SIDE */}
        <div className="founder-story__content">
          <span className="founder-story__badge">Our Journey</span>

          <h2 className="founder-story__title">
            Turning Passion Into <span>Purpose</span>
          </h2>

          <p className="founder-story__description">
            What began as a simple vision soon evolved into a mission to create
            something meaningful. Our founder believed that true innovation
            happens when creativity, passion, and purpose come together.
          </p>

          <p className="founder-story__description">
            Through challenges, late nights, and continuous growth, we built a
            community driven by trust, quality, and dedication. Every milestone
            reflects our commitment to delivering experiences people genuinely
            connect with.
          </p>

          <div className="founder-story__stats">
            <div className="founder-story__stat-card">
              <h3>50K+</h3>
              <span>Happy Customers</span>
            </div>

            <div className="founder-story__stat-card">
              <h3>120+</h3>
              <span>Projects Completed</span>
            </div>

            <div className="founder-story__stat-card">
              <h3>15+</h3>
              <span>Global Awards</span>
            </div>
          </div>

          <div className="founder-story__footer">
            <div>
              <h4>John Carter</h4>
              <span>Founder & CEO</span>
            </div>

         
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;






