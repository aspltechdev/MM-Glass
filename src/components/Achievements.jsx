import "./Achievements.css";
import { useEffect, useState } from "react";

/* Counter Component */
function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000; // animation duration
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <h2>
      {count.toLocaleString()}
      {suffix}
    </h2>
  );
}

function Achievements() {

  return (
    <section className="achievement-section">

      {/* Main Container */}
      <div className="achievement-wrapper">

        {/* Badge */}
        <div className="achievement-badge">
          <span className="dot"></span>
          <p>Our Achievements</p>
        </div>

        {/* Top Row */}
        <div className="achievement-top">

          <div className="achievement-card">
            <Counter end={12000} suffix="+" />
            <p>Projects Done</p>
          </div>

          <div className="line"></div>

          <div className="achievement-card">
            <Counter end={10} suffix="+" />
            <p>Years Experience</p>
          </div>

          <div className="line"></div>

          <div className="achievement-card">
            <Counter end={2} suffix="M+" />
            <p>Units Sold</p>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="achievement-bottom">

          <div className="achievement-card">
            <Counter end={50} suffix="+" />
            <p>Variants</p>
          </div>

          <div className="line"></div>

          <div className="achievement-card">
            <Counter end={1500} suffix="+" />
            <p>Tonnes/Year</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Achievements;