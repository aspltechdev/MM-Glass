import "./WhyChoose.css";

import deliveryImg from "../assets/why1.jpeg";
import indiaImg from "../assets/why2.jpeg";
import precisionImg from "../assets/why3.jpeg";
import glassImg from "../assets/why4.jpeg";

function WhyChoose() {

  const cards = [
    {
      image: deliveryImg,
      title: "Fastest Delivery",
      text: "Proprietary logistics network ensuring glass reaching your site 40% faster than industry standards.",
    },

    {
      image: indiaImg,
      title: "PAN India Delivery",
      text: "Strategically located hubs delivering to every pin code across the subcontinent with specialized care.",
    },

    {
      image: precisionImg,
      title: "Precision Edge",
      text: "Laser-guided cutting and CNC finishing for tolerances within ±0.1mm for perfect installation.",
    },

    {
      image: glassImg,
      title: "Vast Range",
      text: "Over 500+ glass variants from smart privacy glass to ultra-clear low-iron architectural panels.",
    },
  ];

  return (
    <section className="whychoose-section">

      {/* Badge */}
      <div className="whychoose-badge">
        <span className="dot"></span>
        <p>Why Choose Us</p>
      </div>

      {/* Cards */}
      <div className="whychoose-grid">

        {cards.map((card, index) => (
          <div className="why-card" key={index}>

            {/* Image */}
            <div className="why-image">
              <img src={card.image} alt={card.title} />
            </div>

            {/* Title */}
            <h3>{card.title}</h3>

            {/* Text */}
            <p>{card.text}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyChoose;