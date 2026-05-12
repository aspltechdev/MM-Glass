// gallery.jsx

import { useEffect, useState } from "react";
import "./gallery.css";
import galleryhero from "../assets/heroimages/galleryhero.png";
import img1 from "../assets/architecturalglass/Ag1.png";
import img2 from "../assets/architecturalglass/Ag2.png";
import img3 from "../assets/architecturalglass/Ag3.png";





function Gallery() {

  const row1 = [
    img1,
    img2,
    img3,
  ];

  const row2 = [
    img1,
    img2,
    img3,
  ];

  const row3 = [
       img1,
    img2,
    img3,
  ];

  // =========================
  // FACTORY SLIDER IMAGES
  // =========================

  const factoryImages = [
    img1,
    img2,
    img3,
  ];

  // =========================
  // SLIDER STATE
  // =========================

  const [currentIndex, setCurrentIndex] = useState(0);

  // =========================
  // AUTO SLIDE
  // =========================

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentIndex((prev) =>
        prev === factoryImages.length - 1 ? 0 : prev + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  // =========================
  // PREVIOUS
  // =========================

  const prevSlide = () => {

    setCurrentIndex((prev) =>
      prev === 0 ? factoryImages.length - 1 : prev - 1
    );

  };

  // =========================
  // NEXT
  // =========================

  const nextSlide = () => {

    setCurrentIndex((prev) =>
      prev === factoryImages.length - 1 ? 0 : prev + 1
    );

  };

  return (
    <>
      {/* =========================
          BANNER SECTION
      ========================= */}

      <section className="gallery-banner-section">

        <div className="gallery-banner">
          <img
            src= {galleryhero}
            alt="Gallery"
          />

          <div className="gallery-overlay">
            <button>Gallery</button>
          </div>
        </div>

      </section>

      {/* =========================
          GALLERY SLIDER SECTION
      ========================= */}

      <section className="gallery-slider-section">

        {/* Heading */}

        <div className="gallery-heading">
          <button>
            Sneak Peek Into Our Factory
          </button>
        </div>

        {/* Image Slider */}

        <div className="gallery-slider-container">

          {/* Left Arrow */}

          <button
            className="gallery-arrow left"
            onClick={prevSlide}
          >
            ‹
          </button>

          {/* Image */}

          <div className="gallery-image-box">
            <img
              src={factoryImages[currentIndex]}
              alt="Factory"
            />
          </div>

          {/* Right Arrow */}

          <button
            className="gallery-arrow right"
            onClick={nextSlide}
          >
            ›
          </button>

        </div>

        {/* Dots */}

        <div className="gallery-dots">

          {factoryImages.map((_, index) => (

            <span
              key={index}
              className={currentIndex === index ? "active" : ""}
              onClick={() => setCurrentIndex(index)}
            ></span>

          ))}

        </div>

      </section>


      <section className="auto-gallery-section">

        {/* ROW 1 */}

        <div className="scroll-row scroll-right">
          <div className="scroll-track">

            {[...row1, ...row1].map((img, index) => (
              <div className="gallery-card" key={index}>
                <img src={img} alt="gallery" />
              </div>
            ))}

          </div>
        </div>

        {/* ROW 2 */}

        <div className="scroll-row scroll-left">
          <div className="scroll-track">

            {[...row2, ...row2].map((img, index) => (
              <div className="gallery-card" key={index}>
                <img src={img} alt="gallery" />
              </div>
            ))}

          </div>
        </div>

        {/* ROW 3 */}

        <div className="scroll-row scroll-right">
          <div className="scroll-track">

            {[...row3, ...row3].map((img, index) => (
              <div className="gallery-card" key={index}>
                <img src={img} alt="gallery" />
              </div>
            ))}

          </div>
        </div>

      </section>
    </>
  );
}

export default Gallery;