// Product.jsx

import { useEffect, useState } from "react";
import "./product.css";
import Temperedgalss from "../assets/architecturalglass/Ag1.png"
import Heatsoakedglass from "../assets/architecturalglass/Ag2.png"
import Heatstrengthenedglass from "../assets/architecturalglass/Ag3.png"
import Laminatedglass from "../assets/architecturalglass/Ag4.png";
import Reflectiveglass from "../assets/architecturalglass/Ag5.jpg"
import Insulatedglass from "../assets/architecturalglass/Ag6.jpg";
import Decorativeglass from "../assets/architecturalglass/Ag7.jpg";
import Frostedglass from "../assets/architecturalglass/Ag8.jpg";
import Magicglass from "../assets/specialityglass/sg1.jpg";
import Curvedglass from  "../assets/specialityglass/sg2.jpg";
import Georgianbarglass from "../assets/specialityglass/sg3.jpg"
import Oleoglass from "../assets/specialityglass/sg4.jpg";
import Fireresistantglass from "../assets/specialityglass/sg5.jpg";
import Bulletresistantglass from "../assets/specialityglass/sg6.jpg";
import Acousticglass from "../assets/specialityglass/sg7.jpg";
import Solarglass from "../assets/specialityglass/sg8.jpg";
import Busglass from "../assets/automotiveglass/busglass.jpg";
import Carwindshield from "../assets/automotiveglass/CarWindshield.jpg";
import Truckglass from "../assets/automotiveglass/Truckglass.jpg";
import Transportglass from "../assets/automotiveglass/Transportglass.jpg";
import Sunroofglass from "../assets/automotiveglass/Sunroofglass.jpg";
import Rearsafetyglass from "../assets/automotiveglass/Rearsafetyglass.jpg";
import Sidewindowglass from "../assets/automotiveglass/Sidewindowglass.jpg";
import Mirrorglass from "../assets/automotiveglass/Mirrorglass.jpg";
import productshero from "../assets/heroimages/producthero.png";


function Product() {

  // =========================
  // DATA
  // =========================

  const sections = [
    {
      heading: "Architectural Glass",

      products: [
        {
          title: "Tempered Glass",
          image: Temperedgalss,
          desc:
            "Processed safety glass with high durability and strength.",
        },

        {
          title: "Heat Soaked Glass",
          image:Heatsoakedglass,
          desc:
            "Improves safety against spontaneous glass breakage.",
        },

        {
          title: "Heat Strengthened Glass",
          image: Heatstrengthenedglass,
          desc:
            "Twice as strong as annealed glass with clarity.",
        },

        {
          title: "Laminated Glass",
          image: Laminatedglass,
          desc:
            "Ideal for UV protection and solar control.",
        },

        {
          title: "Reflective Glass",
          image: Reflectiveglass,
          desc:
            "Modern architectural reflective safety glass.",
        },

        {
          title: "Insulated Glass",
          image: Insulatedglass,
          desc:
            "Provides thermal and acoustic insulation.",
        },

        {
          title: "Decorative Glass",
          image: Decorativeglass,
          desc:
            "Elegant decorative glass for interiors.",
        },

        {
          title: "Frosted Glass",
          image: Frostedglass,
          desc:
            "Adds privacy while maintaining natural light.",
        },
      ],
    },

    {
      heading: "Speciality Glass",

      products: [
        {
          title: "Magic Glass",
          image: Magicglass,
          desc:
            "Switchable privacy glass technology.",
        },
        {
          title: "Curved Glass",
          image: Curvedglass,
          desc:
            "Curved laminated and tempered glass solutions.",
        },

        {
          title: "Georgian Bar Glass",
          image: Georgianbarglass,
          desc:
            "Classic decorative glazing design.",
        },

        {
          title: "Oleo Glass",
          image: Oleoglass,
          desc:
            "Remote controlled modern glass solution.",
        },

        {
          title: "Fire Resistant Glass",
          image: Fireresistantglass,
          desc:
            "Designed for fire safety applications.",
        },

        {
          title: "Bullet Resistant Glass",
          image: Bulletresistantglass,
          desc:
            "Advanced security and protection glass.",
        },

        {
          title: "Acoustic Glass",
          image: Acousticglass,
          desc:
            "Reduces outside noise significantly.",
        },

        {
          title: "Solar Glass",
          image: Solarglass,
          desc:
            "Energy efficient solar control glass.",
        },
      ],
    },

    {
      heading: "Automotive Glass",

      products: [
        {
          title: "Bus Glass",
          image: Busglass,
          desc:
            "Strong safety glass for buses and transport.",
        },

        {
          title: "Car Windshield",
          image: Carwindshield,
          desc:
            "High visibility laminated windshield glass.",
        },

        {
          title: "Truck Glass",
          image: Truckglass,
          desc:
            "Heavy duty truck glass for durability.",
        },

        {
          title: "Transport Glass",
          image: Transportglass,
          desc:
            "Reliable glass for city transportation.",
        },

        {
          title: "Sunroof Glass",
          image: Sunroofglass,
          desc:
            "Premium glass for modern vehicles.",
        },

        {
          title: "Rear Safety Glass",
          image: Rearsafetyglass,
          desc:
            "Enhanced rear passenger protection.",
        },

        {
          title: "Side Window Glass",
          image: Sidewindowglass,
          desc:
            "Durable side protection glass.",
        },

        {
          title: "Mirror Glass",
          image: Mirrorglass,
          desc:
            "Clear visibility mirror glass solutions.",
        },
      ],
    },
  ];

  // =========================
  // SLIDER
  // =========================

  const itemsPerSlide = 4;

  const [slides, setSlides] = useState([0, 0, 0]);

  useEffect(() => {

    const interval = setInterval(() => {

      setSlides((prev) =>
        prev.map((slide, sectionIndex) => {

          const totalSlides = Math.ceil(
            sections[sectionIndex].products.length /
              itemsPerSlide
          );

          return slide === totalSlides - 1
            ? 0
            : slide + 1;

        })
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  const nextSlide = (sectionIndex) => {

    const totalSlides = Math.ceil(
      sections[sectionIndex].products.length /
        itemsPerSlide
    );

    setSlides((prev) =>
      prev.map((slide, index) =>
        index === sectionIndex
          ? slide === totalSlides - 1
            ? 0
            : slide + 1
          : slide
      )
    );
  };

  const prevSlide = (sectionIndex) => {

    const totalSlides = Math.ceil(
      sections[sectionIndex].products.length /
        itemsPerSlide
    );

    setSlides((prev) =>
      prev.map((slide, index) =>
        index === sectionIndex
          ? slide === 0
            ? totalSlides - 1
            : slide - 1
          : slide
      )
    );
  };

  return (
    <>

      {/* =========================
          BANNER
      ========================= */}

      <section className="story-banner-section">

        <div className="story-banner">

          <img
            src= {productshero}
            alt="Products"
          />

          <div className="story-overlay">
            <button>PRODUCTS</button>
          </div>

        </div>

      </section>

      {/* =========================
          ALL SECTIONS
      ========================= */}

      {sections.map((section, sectionIndex) => {

        const totalSlides = Math.ceil(
          section.products.length / itemsPerSlide
        );

        return (

          <section
            className="products-section"
            key={sectionIndex}
          >

            {/* Heading */}

            <div className="products-heading">

              <button>
                <span className="dot"></span>
                {section.heading}
              </button>

            </div>

            {/* Slider */}

            <div className="slider-wrapper">

              <div
                className="products-grid-slider"
                style={{
                  transform: `translateX(-${
                    slides[sectionIndex] * 100
                  }%)`,
                }}
              >

                {Array.from({
                  length: totalSlides,
                }).map((_, slideIndex) => (

                  <div
                    className="products-grid"
                    key={slideIndex}
                  >

                    {section.products
                      .slice(
                        slideIndex * itemsPerSlide,
                        slideIndex * itemsPerSlide +
                          itemsPerSlide
                      )
                      .map((item, index) => (

                        <div
                          className="product-card"
                          key={index}
                        >

                          <img
                            src={item.image}
                            alt={item.title}
                          />

                          <div className="product-overlay">

                            <h3>{item.title}</h3>

                            <p>{item.desc}</p>

                          </div>

                        </div>

                      ))}

                  </div>

                ))}

              </div>

            </div>

            {/* Controls */}

            <div className="slider-controls">

              <button
                className="arrow"
                onClick={() =>
                  prevSlide(sectionIndex)
                }
              >
                ‹
              </button>

              <div className="dots">

                {Array.from({
                  length: totalSlides,
                }).map((_, index) => (

                  <span
                    key={index}
                    className={
                      slides[sectionIndex] === index
                        ? "active"
                        : ""
                    }
                    onClick={() => {

                      setSlides((prev) =>
                        prev.map((slide, i) =>
                          i === sectionIndex
                            ? index
                            : slide
                        )
                      );

                    }}
                  ></span>

                ))}

              </div>

              <button
                className="arrow"
                onClick={() =>
                  nextSlide(sectionIndex)
                }
              >
                ›
              </button>

            </div>

            {/* Button */}

            <div className="show-more">

              <button>
                Show More Products
              </button>

            </div>

          </section>

        );
      })}
    </>
  );
}

export default Product;