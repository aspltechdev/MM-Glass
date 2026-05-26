// Achievements.jsx

import "./Achievements.css";
import { useEffect, useState } from "react";

/* COUNTER */

function Counter({ end, suffix = "" }) {

  const [count, setCount] = useState(0);

  useEffect(() => {

    let start = 0;

    const duration = 2200;

    const increment =
      end / (duration / 20);

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
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

function Achievements() {

  return (

    <section className="gl-achievements">

      {/* BACKGROUND */}

{/* REAL BG IMAGE */}

<div className="gl-bg-image">

  <img
    src="https://images.pexels.com/photos/36552948/pexels-photo-36552948.jpeg"
    alt=""
  />


</div>
<div className="gl-gradient-overlay"></div>
      {/* <div className="gl-gradient"></div> */}
      <div className="gl-light"></div>

<div className="gl-vignette"></div>
      <div className="gl-grid"></div>
      <div className="gl-noise"></div>

      {/* FLOATING LIGHTS */}

  

      {/* TOP */}

      <div className="gl-top">

        <span className="gl-label">

          PERFORMANCE • PRECISION • SCALE

        </span>

        <h2>

          BUILT FOR <br />

          MODERN <span>ARCHITECTURE</span>

        </h2>

      </div>

      {/* LAYOUT */}

      <div className="gl-layout">

        {/* MAIN CARD */}

        <div className="gl-main-card">

          <img
            src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg"
            alt=""
          />

          <div className="gl-overlay"></div>

          <div className="gl-shine"></div>

          <div className="gl-main-content">

            <span>GLOBAL EXECUTION</span>

            <h3>

              <Counter
                end={12000}
                suffix="+"
              />

            </h3>

            <p>

              Projects delivered across
              premium commercial,
              residential, and architectural spaces.

            </p>

          </div>

        </div>

        {/* SIDE GRID */}

        <div className="gl-side-grid">

          {/* CARD */}

          <div className="gl-small-card">

            <img
              src="https://images.pexels.com/photos/25525976/pexels-photo-25525976.jpeg"
              alt=""
            />

            <div className="gl-card-overlay"></div>

            <div className="gl-card-content">

              <h4>

                <Counter
                  end={10}
                  suffix="+"
                />

              </h4>

              <p>Years Experience</p>

            </div>

          </div>

          {/* CARD */}

          <div className="gl-small-card">

            <img
              src="https://images.pexels.com/photos/34667128/pexels-photo-34667128.jpeg"
              alt=""
            />

            <div className="gl-card-overlay"></div>

            <div className="gl-card-content">

              <h4>

                <Counter
                  end={2}
                  suffix="M+"
                />

              </h4>

              <p>Units Delivered</p>

            </div>

          </div>

          {/* CARD */}

          <div className="gl-small-card">

            <img
              src="https://images.pexels.com/photos/12940594/pexels-photo-12940594.jpeg"
              alt=""
            />

            <div className="gl-card-overlay"></div>

            <div className="gl-card-content">

              <h4>

                <Counter
                  end={50}
                  suffix="+"
                />

              </h4>

              <p>Glass Variants</p>

            </div>

          </div>

          {/* CARD */}

          <div className="gl-small-card">

            <img
              src="https://images.pexels.com/photos/8825132/pexels-photo-8825132.jpeg"
              alt=""
            />

            <div className="gl-card-overlay"></div>

            <div className="gl-card-content">

              <h4>

                <Counter
                  end={1500}
                  suffix="+"
                />

              </h4>

              <p>Tonnes / Year</p>

            </div>

          </div>

        </div>

      </div>

      {/* HUGE TYPO */}

      <div className="gl-bg-text">

        ACHIEVEMENTS

      </div>

    </section>
  );
}

export default Achievements;