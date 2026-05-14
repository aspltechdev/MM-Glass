// GlassStorySection.jsx

import React from "react";
import "./GlassStorySection.css";

import factoryImg from "../assets/ourstory2.jpg";

function GlassStorySection() {
  return (
    <section className="glass-story-section">
      <div className="glass-story-container">

        {/* LEFT SIDE */}
        <div className="glass-story-left">

          <div className="glass-image-wrapper">

            <img
              src={factoryImg}
              alt="MM Glass Factory"
              className="glass-story-image"
            />

            {/* FLOATING EXPERIENCE CARD */}
            <div className="experience-card">
              <h2>10+</h2>

              <p>
                Years Industry
                <br />
                Experience
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="glass-story-right">

          <span className="glass-story-tag">
            THE MM GLASS STORY
          </span>

          <h1>
            Visionary Glass For
            <br />
            Modern Landscapes
          </h1>

          <p>
            Founded on the principles of clarity and structural resilience,
            MM Glass has evolved from a local workshop to Bengaluru’s premier
            glass processing powerhouse. Our journey is defined by a relentless
            pursuit of manufacturing excellence.
          </p>

          <p>
            For architects, we are the reliable partner that translates
            sketches into transparent realities. For homeowners, we are the
            guardians of safety, providing toughened solutions that never
            compromise on aesthetic brilliance.
          </p>

          <p>
            Every sheet of glass that leaves our units carries the MM seal of
            quality—a testament to our commitment to durability, precision,
            and the transformative power of light.
          </p>

        </div>

      </div>
    </section>
  );
}

export default GlassStorySection;