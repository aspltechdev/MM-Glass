
import { useEffect, useState } from "react";
import "./product.css";

function Product() {

  const sections = [
    {
      heading: "Architectural Glass",
      products: [
        {
          title: "Tempered Glass",
          image:
            "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000&auto=format&fit=crop",
          desc:
            "Processed safety glass engineered for superior strength and durability.",
        },

        {
          title: "Laminated Glass",
          image:
            "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop",
          desc:
            "Advanced laminated systems designed for security and UV protection.",
        },

        {
          title: "Reflective Glass",
          image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
          desc:
            "Luxury reflective architectural glass with premium aesthetics.",
        },

        {
          title: "Insulated Glass",
          image:
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop",
          desc:
            "Thermal and acoustic insulation for modern spaces.",
        },
      ],
    },

    {
      heading: "Speciality Glass",
      products: [
        {
          title: "Magic Glass",
          image:
            "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2000&auto=format&fit=crop",
          desc:
            "Switchable privacy glass powered by smart technology.",
        },

        {
          title: "Curved Glass",
          image:
            "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000&auto=format&fit=crop",
          desc:
            "Architectural curved glass for futuristic structures.",
        },

        {
          title: "Fire Resistant Glass",
          image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop",
          desc:
            "High-performance fire safety glass systems.",
        },

        {
          title: "Acoustic Glass",
          image:
            "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop",
          desc:
            "Premium acoustic glazing engineered for silence.",
        },
      ],
    },
  ];

  const itemsPerSlide = 4;

  const [slides, setSlides] = useState([0, 0]);

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

    }, 4500);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="cp-page">

      {/* HERO */}

      <section className="cp-hero">

        <div className="cp-bg">

          <img
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2400&auto=format&fit=crop"
            alt=""
          />

        </div>

        <div className="cp-overlay"></div>
        <div className="cp-light"></div>
        <div className="cp-grid"></div>

        <div className="cp-hero-content">

          <span>
            FUTURE • GLASS • ARCHITECTURE
          </span>

          <h1>
            ENGINEERED <br />
            GLASS <span>SYSTEMS</span>
          </h1>

          <p>
            Premium architectural and specialty glass
            solutions crafted with cinematic precision,
            futuristic aesthetics, and modern engineering.
          </p>

          <button>
            Explore Collection
          </button>

        </div>

      </section>

      {/* SECTIONS */}

      {sections.map((section, sectionIndex) => (

        <section
          className="cp-section"
          key={sectionIndex}
        >

          <div className="cp-section-top">

            <span>
              PREMIUM COLLECTION
            </span>


            {/* CINEMATIC BACKGROUND */}

<div className="pr-products-bg">

  <img
    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2400&auto=format&fit=crop"
    alt=""
  />

</div>

{/* LAYERS */}

<div className="pr-products-overlay"></div>

<div className="pr-products-light"></div>

<div className="pr-products-grid-bg"></div>

<div className="pr-products-vignette"></div>

            <h2>
              {section.heading}
            </h2>

          </div>

          <div className="cp-products-grid">

            {section.products.map((item, index) => (

              <div
                className="cp-card"
                key={index}
              >

                {/* IMAGE */}

                <div className="cp-card-image">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="cp-card-overlay"></div>

                </div>

                {/* CONTENT */}

                <div className="cp-card-content">

                  <span>
                    PREMIUM GLASS
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.desc}
                  </p>

                  <button>
                    Explore Product →
                  </button>

                </div>

              </div>

            ))}

          </div>

        </section>

      ))}

    </div>
  );
}

export default Product;




