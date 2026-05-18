// ContactUs.jsx

import "./contactus.css";
import { useState } from "react";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

function ContactUs() {

  const [activeFaq, setActiveFaq] =
    useState(0);

  const faqs = [

    {
      q: "What glass systems do you manufacture?",
      a: "We manufacture premium toughened, laminated, insulated, decorative, reflective, and architectural glass systems for luxury residential and commercial spaces.",
    },

    {
      q: "Do you provide customized fabrication?",
      a: "Yes. We engineer custom glass solutions tailored for architectural, facade, and interior requirements with precision processing.",
    },

    {
      q: "Do you support PAN India delivery?",
      a: "Our logistics ecosystem delivers precision-crafted glass systems across India with safe transportation and installation-ready processing.",
    },

    {
      q: "How do you ensure quality standards?",
      a: "Every glass unit undergoes advanced inspection, edge finishing validation, stress testing, and performance checks before dispatch.",
    },

  ];

  return (

    <section className="cx-contact-page">

      {/* BACKGROUND */}

      <div className="cx-gradient"></div>
      <div className="cx-grid"></div>
      <div className="cx-noise"></div>

      {/* HERO */}

      <section className="cx-hero">

   

<div className="cx-hero-bg">

  <img
    src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2200&auto=format&fit=crop"
    alt=""
  />

</div>

{/* CINEMATIC OVERLAYS */}

<div className="cx-overlay"></div>

<div className="cx-light"></div>

<div className="cx-vignette"></div>

        <div className="cx-hero-content">

          <span>

            CONTACT • GLASS • ARCHITECTURE

          </span>

          <h1>

            LET’S BUILD <br />

            SOMETHING <span>ICONIC</span>

          </h1>

          <p>

            Connect with our specialists
            for premium architectural
            glass systems engineered
            with precision and luxury.

          </p>

        </div>

      </section>

      {/* CONTACT GRID */}

      <section className="cx-contact-grid">

        {/* LEFT */}

        <div className="cx-panel">

          <span className="cx-mini">

            CONTACT DETAILS

          </span>

          <h2>

            Start your <br />

            next project.

          </h2>

          <p>

            We help architects,
            developers, and interior
            designers build immersive
            modern spaces with
            precision-crafted glass systems.

          </p>

          {/* CONTACT */}

          <div className="cx-contact-items">

            <div className="cx-contact-box">

              <FaPhoneAlt />

              <div>

                <span>Phone</span>

                <h4>+91 9876543210</h4>

              </div>

            </div>

            <div className="cx-contact-box">

              <FaMapMarkerAlt />

              <div>

                <span>Branch Address</span>

                <h4>

                  BDS Nagar, Kothanur,
                  Bengaluru,
                  Karnataka 560077

                </h4>

              </div>

            </div>

          </div>

          {/* MAP */}

          <div className="cx-map">

            <iframe
              title="map"
              src="https://www.google.com/maps?q=BDS+Nagar,+Kothanur,+Bengaluru,+Karnataka+560077&output=embed"
              loading="lazy"
            ></iframe>

          </div>

        </div>

        {/* RIGHT */}

        <div className="cx-form-card">

          <span className="cx-mini">

            SEND ENQUIRY

          </span>

          <h3>

            Tell us about your project

          </h3>

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Project Type"
            />

            <textarea
              rows="5"
              placeholder="Tell us about your project..."
            ></textarea>

            <button>

              Send Message

              <FaArrowRight />

            </button>

          </form>

        </div>

      </section>

      {/* FAQ */}

      <section className="cx-faq-section">

        <div className="cx-faq-top">

          <span>

            FREQUENTLY ASKED QUESTIONS

          </span>

          <h2>

            Everything you <br />

            need to know

          </h2>

        </div>

        <div className="cx-faq-list">

          {faqs.map((item, index) => (

            <div
              className={`cx-faq-item ${
                activeFaq === index
                  ? "active"
                  : ""
              }`}
              key={index}
            >

              {/* QUESTION */}

              <div
                className="cx-faq-question"
                onClick={() =>
                  setActiveFaq(index)
                }
              >

                <h3>

                  {item.q}

                </h3>

                <button>

                  {activeFaq === index
                    ? <FaMinus />
                    : <FaPlus />
                  }

                </button>

              </div>

              {/* ANSWER */}

              <div className="cx-faq-answer">

                <p>

                  {item.a}

                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* HUGE TYPO */}

      <div className="cx-bg-text">

        CONTACT

      </div>

    </section>
  );
}

export default ContactUs;