import { useEffect, useRef } from "react";
import "./Hero.css";

import bgVideo1 from "../assets/bg1.MOV";
// import bgVideo2 from "../assets/bg2.MOV";
// import bgVideo3 from "../assets/bg3.MOV";

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    const playPromise = video.play();

    return () => {
      if (playPromise?.catch) {
        playPromise.catch(() => {});
      }
    };
  }, []);

  return (
    <section className="hero">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={bgVideo1} />
      </video>

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
