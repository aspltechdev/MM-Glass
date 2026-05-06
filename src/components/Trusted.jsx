import "./Trusted.css";

function Trusted() {
  return (
    <section className="trusted">
      
      {/* Heading */}
      <div className="trusted-title">
        <span className="dot"></span>
        <p>Trusted By Leading Brands</p>
      </div>

      {/* Logo Grid */}
      <div className="trusted-grid">
        {[...Array(8)].map((_, index) => (
          <div className="logo-box" key={index}></div>
        ))}
      </div>

    </section>
  );
}

export default Trusted;