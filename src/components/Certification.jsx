import "./Certification.css";

// Import certificate images
import cert1 from "../assets/certifications/ANSI.jfif";
import cert2 from "../assets/certifications/ASTM.jfif";
import cert3 from "../assets/certifications/BIS.png";
import cert4 from "../assets/certifications/GSI.png";
import cert5 from "../assets/certifications/ISO.jpg";
import cert6 from "../assets/certifications/SGS.png";

function Certification() {
  const certificates = [
    cert1,
    cert2,
    cert3,
    cert4,
    cert5,
    cert6,
    cert1,
    cert2,
    cert3,
    cert4,
    cert5,
    cert6,
  ];

  return (
    <section className="certification-section">

      {/* Heading Badge */}
      <div className="certification-badge">
        <span className="dot"></span>
        <p>Our Certifications</p>
      </div>

      {/* Horizontal Scroll */}
      <div className="certification-scroll">

        {/* TOP ROW */}
        <div className="certification-row">
          {certificates.slice(0, 6).map((image, index) => (
            <div className="certificate-card" key={index}>
              <img src={image} alt="certificate" />
            </div>
          ))}
        </div>

        {/* BOTTOM ROW */}
        <div className="certification-row reverse">
          {certificates.slice(6, 12).map((image, index) => (
            <div className="certificate-card" key={index}>
              <img src={image} alt="certificate" />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default Certification;