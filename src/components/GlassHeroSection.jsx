// GlassHeroSection.jsx

import React from "react";
import "./GlassHeroSection.css";

import heroGlass from "../assets/ourstory1.jpg";

function GlassHeroSection() {
  return (
    <section className="glass-hero-section">

      <div className="glass-hero-card">

        {/* BACKGROUND IMAGE */}
        <img
          src={heroGlass}
          alt="Glass Building"
          className="glass-hero-bg"
        />

        {/* OVERLAY */}
        <div className="glass-overlay"></div>

        {/* CONTENT */}
        <div className="glass-content">

          {/* LEFT CONTENT */}
          <div className="glass-left">

            <h1>
              CRAFTING STRENGTH,
          
              CLARITY & TRUST IN
            
              GLASS
            </h1>

            <p>
              Trusted toughened glass manufacturing and processing
              in Bengaluru. We bridge the gap between architectural
              vision and structural reality
            </p>

            <div className="glass-buttons">

              <button className="explore-btn">
                EXPLORE OUR PRODUCTS →
              </button>

              <button className="contact-btn">
                CONTACT US →
              </button>

            </div>
          </div>

          {/* RIGHT FLOATING GLASS CARDS */}
          <div className="glass-right">

            <div className="glass-floating-card top-card">
              <h3>Toughened</h3>

              <p>
                Built to withstand
                extreme pressure
                and impact
              </p>
            </div>

            <div className="glass-floating-card bottom-card">
              <h3>Precision</h3>

              <p>
                CNC-grade accuracy
                for flawless
                architectural fit
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default GlassHeroSection;