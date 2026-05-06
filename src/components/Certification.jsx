import "./Certification.css";

function Certification() {
  const certificates = [1, 2, 3, 4, 5, 6];

  return (
    <section className="certification-section">

      {/* Heading Badge */}
      <div className="certification-badge">
        <span className="dot"></span>
        <p>Our Certifications</p>
      </div>

      {/* Grid */}
      <div className="certification-grid">
        {certificates.map((item) => (
          <div className="certificate-card" key={item}></div>
        ))}
      </div>

    </section>
  );
}

export default Certification;