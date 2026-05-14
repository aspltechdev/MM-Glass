import React from "react";
import "./ServicesSection.css";

import truckImg from "../assets/aboutsec1.jpg";
import mapImg from "../assets/aboutsec2.png";
import workerImg from "../assets/aboutsec3.jpg";
import glassImg from "../assets/aboutsec4.png";
import bgImg from "../assets/servicebg.png";

const ServicesSection = () => {
  return (
    <>
     <div className="topBadge">
        <span className="dot"></span>
        Why Choose Us
      </div>
    <section
      className="whyChooseSection"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
     

      <div className="whyChooseContainer">
        {/* LEFT TEXT */}
        <div className="contentCard">
          <h3>Fastest Delivery</h3>

          <p>
            Our advanced glass logistics and rapid dispatch system ensures faster delivery timelines for residential, commercial, and industrial projects across India. With optimized transportation management, secure packaging solutions, and dedicated supply chain coordination, we minimize delays and maintain efficient project execution. From architectural glass panels to customized safety glass solutions, every order is handled with precision to ensure timely and damage-free delivery. Our commitment to speed, reliability, and customer satisfaction helps businesses and construction projects stay on schedule without compromising product quality or safety standards.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="imageCard">
          <img src={truckImg} alt="Truck" />
        </div>

        {/* LEFT IMAGE */}
        <div className="imageCard mapCard">
          <img src={mapImg} alt="India Map" />
        </div>

        {/* RIGHT TEXT */}
        <div className="contentCard">
          <h3>PAN India Delivery</h3>

          <p>
           Our strong PAN India distribution network enables seamless delivery of premium glass products to major cities, industrial hubs, commercial zones, and remote project locations across the country. Supported by strategically located warehouses and professional logistics partnerships, we provide reliable transportation and efficient handling for all types of glass solutions. Whether for high-rise buildings, luxury interiors, office spaces, retail environments, or industrial applications, we ensure consistent supply, professional coordination, and dependable nationwide service tailored to modern construction and infrastructure demands.
          </p>
        </div>

        {/* LEFT TEXT */}
        <div className="contentCard ">
          <h3>Precision Edge Technology</h3>

          <p>
            We utilize state-of-the-art CNC machines, automated cutting systems, and precision edge polishing technology to deliver flawless glass finishing with exceptional dimensional accuracy. Our advanced manufacturing process ensures smooth edges, perfect alignment, superior structural performance, and high-quality aesthetics for every glass panel. From tempered glass and laminated safety glass to decorative and architectural glass systems, our precision engineering capabilities support modern facades, frameless installations, partitions, railings, and premium interior applications requiring durability, safety, and refined finishing standards.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="imageCard ">
          <img src={workerImg} alt="Worker" />
        </div>

        {/* LEFT IMAGE */}
        <div className="imageCard">
          <img src={glassImg} alt="Glass" />
        </div>

        {/* RIGHT TEXT */}
        <div className="contentCard">
          <h3>Vast Range</h3>

          <p>
           We offer a comprehensive range of high-performance architectural and industrial glass solutions designed to meet the evolving requirements of modern construction, interior design, and commercial infrastructure projects. Our portfolio includes toughened glass, laminated glass, insulated glass units, low-E glass, frosted glass, reflective glass, smart privacy glass, acoustic glass, decorative glass, and ultra-clear low-iron glass products. Designed for residential spaces, corporate offices, luxury interiors, retail showrooms, hospitality projects, and industrial environments, our extensive product range combines durability, safety, energy efficiency, and contemporary aesthetics for versatile architectural applications.
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default ServicesSection;