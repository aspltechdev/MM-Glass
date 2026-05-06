import "./Expertise.css";

import expertImg from "../assets/emp1.jpeg";

function Expertise() {

  return (
    <section className="expertise-section">

      {/* Badge */}
      <div className="expertise-badge">
        <span className="dot"></span>
        <p>Our Expertise</p>
      </div>

      {/* Main Content */}
      <div className="expertise-container">

        {/* Left Content */}
        <div className="expertise-left">

          <h2>
            Excellence through advanced
            glass processing expertise
          </h2>

          <p>
            We achieve superior results by combining cutting-edge
            glass processing technologies with deep industry knowledge.
            Our expertise ensures precision, durability, and
            high-performance outcomes across every project.
          </p>

          {/* Progress 1 */}
          <div className="progress-box">

            <div className="progress-head">
              <span>Glass Processing Efficiency</span>
              <span>92%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "92%" }}
              ></div>
            </div>

          </div>

          {/* Progress 2 */}
          <div className="progress-box">

            <div className="progress-head">
              <span>Quality & Safety Standards</span>
              <span>95%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "95%" }}
              ></div>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="expertise-right">
          <img src={expertImg} alt="Expert Worker" />
        </div>

      </div>

    </section>
  );
}

export default Expertise;