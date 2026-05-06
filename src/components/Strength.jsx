import "./Strength.css";
import strengthImg from "../assets/strength.jpeg";

function Strength() {
  return (
    <section className="strength-section">

      {/* Top Badge */}
      <div className="section-badge">
        <span className="badge-dot"></span>
        <h2>Our Strength</h2>
      </div>

      {/* Main Content */}
      <div className="strength-wrapper">

        {/* Left Image */}
        <div className="strength-image">
          <img src={strengthImg} alt="MM Glass Factory" />
        </div>

        {/* Right Content */}
        <div className="strength-content">
          <p>
            Our strength comes from a consistent focus on innovation,
            precision engineering, and dependable delivery at every stage
            of glass manufacturing. With extensive expertise in Toughened,
            Laminated, Insulated (DGU), and Automotive glass, we create
            solutions that balance safety, performance, and refined aesthetics.
          </p>

          <p>
            Backed by modern production facilities and high-precision
            automated systems, we maintain exceptional consistency,
            dimensional accuracy, and surface quality across all products.
            Every unit is carefully tested through rigorous quality assurance
            processes to meet global benchmarks for strength, durability,
            and clarity.
          </p>

          <p>
            From sourcing premium raw materials to final inspection,
            our streamlined manufacturing process ensures complete
            control over quality and turnaround time. We collaborate
            closely with clients to develop tailored glass solutions suited
            for architectural, automotive, and industrial applications.
          </p>

          <p>
            Driven by continuous improvement and powered by advanced
            technology, we aim to deliver glass solutions that stand for
            reliability, innovation, and long-term performance helping
            our partners build with confidence.
          </p>
        </div>
      </div>

    </section>
  );
}

export default Strength;