// ContactUs.jsx

import Branches from "./Branches";
import Contact from "./Contact";
import "./contactus.css";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

function ContactUs() {
  return (
    <>
      {/* =========================
          CONTACT BANNER
      ========================= */}

      <section className="contact-banner-section">

        <div className="contact-banner">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="Contact"
          />

          <div className="contact-overlay">
            <button>CONTACT</button>
          </div>
        </div>

      </section>

      {/* =========================
          FAQ SECTION
      ========================= */}

      <section className="faq-section">

        {/* Heading */}

        <div className="faq-top-heading">
          <button>
            <span className="dot"></span>
            Frequently Asked Questions
          </button>
        </div>

        {/* Title */}

        <div className="faq-title">
          <h2>Your questions answered here</h2>

          <p>
            Find answers to common questions about our glass
            products, manufacturing processes, customization
            options, and quality standards. Our FAQ section helps
            you understand how we deliver reliable and
            high-performance glass solutions.
          </p>
        </div>

        {/* Content */}

        <div className="faq-container">

          {/* Left Side */}

          <div className="faq-left">

            {/* Card */}

            <div className="faq-info-card">

              <h3>Get Answers</h3>

              <p>
                Our FAQ section provides clear insights into our
                glass processing methods, product range,
                customization capabilities, and quality assurance
                practices.
              </p>

            </div>

            {/* Contact Info */}

            <div className="faq-contact">

              <h3>Contact Information</h3>

              <p>
                Have questions about our glass solutions or need a
                custom requirement? Our team is here to help you
                with the right guidance and support.
              </p>

              <hr />

              <div className="faq-contact-details">

                {/* Phone */}

                <div className="contact-box">

                  <div className="contact-icon">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <h4>Phone Number</h4>
                    <span>+91 9876543210</span>
                  </div>

                </div>

                {/* Location */}

                <div className="contact-box">

                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h4>Location</h4>
                    <span>Bangalore</span>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* Right Side */}

          <div className="faq-right">

            {/* FAQ 1 */}

            <div className="faq-item active">

              <div className="faq-question">
                <h3>
                  01. What glass solutions do you offer?
                </h3>

                <button>
                  <FaMinus />
                </button>
              </div>

              <div className="faq-answer">
                <p>
                  We offer a wide range of glass products including
                  toughened, laminated, insulated (DGU),
                  reflective, and decorative glass for
                  architectural, residential, and industrial
                  applications.
                </p>
              </div>

            </div>

            {/* FAQ 2 */}

            <div className="faq-item">

              <div className="faq-question">
                <h3>
                  02. Do you provide customized glass solutions?
                </h3>

                <button>
                  <FaPlus />
                </button>
              </div>

            </div>

            {/* FAQ 3 */}

            <div className="faq-item">

              <div className="faq-question">
                <h3>
                  03. What industries do you serve?
                </h3>

                <button>
                  <FaPlus />
                </button>
              </div>

            </div>

            {/* FAQ 4 */}

            <div className="faq-item">

              <div className="faq-question">
                <h3>
                  04. How do you ensure product quality?
                </h3>

                <button>
                  <FaPlus />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>
      <Contact />
      <Branches />
    </>
  );
}

export default ContactUs;