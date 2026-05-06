import "./Hero.css";
import bgImage from "../assets/glass-bg.jpeg";

function Hero() {
  return (
    <section className="hero"
    style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="glass-card">
        <h1>
          Crystal Clear Vision.
          <br />
          Uncompromised Safety.
        </h1>

        <p>
          Our advanced glass solutions combine cutting-edge technology with refined
          aesthetics to create safer, smarter environments. Designed for versatility,
          our products serve residential, commercial, and industrial needs with
          unmatched reliability.
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