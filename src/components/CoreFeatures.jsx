import "./CoreFeatures.css";

import bgImage from "../assets/why3.jpeg";

function CoreFeatures() {

  const features = [
    {
      percent: "90%",
      title: "QUALITY ASSURANCE",
      text: "Every glass unit undergoes strict quality checks to ensure strength, clarity and long-term reliability.",
    },

    {
      percent: "95%",
      title: "SKILLED CRAFTSMANSHIP",
      text: "Our experienced team ensures precision in every cut, finish, and installation-ready product.",
    },

    {
      percent: "92%",
      title: "PRECISION PROCESSING",
      text: "Advanced machinery enables accurate cutting, tempering, and finishing for flawless results.",
    },

    {
      percent: "98%",
      title: "INDUSTRY EXPERTISE",
      text: "Years of experience delivering trusted glass solutions across architectural and industrial sectors.",
    },
  ];

  return (
    <section className="core-section">

      {/* Top Badge */}
      <div className="core-badge">
        <span className="dot"></span>
        <p>Core Features</p>
      </div>

      {/* Main Banner */}
      <div
        className="core-banner"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >

        {/* Black Glossy Overlay */}
        <div className="core-overlay">

          {/* Left Content */}
          <div className="core-left">

            <h2>
              Innovative glass solutions
              built for modern spaces
            </h2>

            <p>
              We continuously invest in advanced glass processing
              technologies, research, and innovation to stay ahead
              of evolving architectural and industrial needs.
            </p>

            <button>
              LEARN MORE
              <span>➜</span>
            </button>

          </div>

          {/* Right Features */}
          <div className="core-right">

            {features.map((item, index) => (
              <div className="feature-box" key={index}>

                {/* Circle */}
                <div className="percent-circle">
                  {item.percent}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default CoreFeatures;