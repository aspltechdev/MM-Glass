// Hero.jsx

import "./Hero.css";
import bgVideo1 from "../assets/herovideo.mp4";

function Hero() {
  return (
    <section className="hero">
      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={bgVideo1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Glass Content */}
      <div className="glass-card">
        <h1>
          Crystal Clear Vision.
          <br />
          Uncompromised Safety.
        </h1>

        <p>
          Our advanced glass solutions combine cutting-edge technology with
          refined aesthetics to create safer, smarter environments. Designed
          for versatility, our products serve residential, commercial, and
          industrial needs with unmatched reliability.
        </p>

        <div className="buttons">
          <button className="btn primary">ABOUT US →</button>
          <button className="btn secondary">CONTACT US →</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;