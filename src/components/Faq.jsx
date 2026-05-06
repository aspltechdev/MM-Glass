import "./Faq.css";
import { useState } from "react";

function Faq() {

  const [active, setActive] = useState(0);

  const faqs = [
    {
      question: "01. What glass solutions do you offer?",
      answer:
        "We offer a wide range of glass products including toughened, laminated, insulated (DGU), reflective, and decorative glass for architectural, residential, and industrial applications.",
    },

    {
      question: "02. Do you provide customized glass solutions?",
      answer:
        "Yes, we provide customized glass solutions based on project requirements, dimensions, performance standards, and design preferences.",
    },

    {
      question: "03. What industries do you serve?",
      answer:
        "We serve architectural, residential, commercial, automotive, and industrial sectors with premium glass processing solutions.",
    },

    {
      question: "04. How do you ensure product quality?",
      answer:
        "Every product undergoes strict quality testing and precision inspections to ensure durability, safety, and performance standards.",
    },
  ];

  return (
    <section className="faq-section">

      {/* Badge */}
      <div className="faq-badge">
        <span className="dot"></span>
        <p>Frequently Asked Questions</p>
      </div>

      {/* Heading */}
      <h2 className="faq-title">
        Your questions answered here
      </h2>

      <p className="faq-description">
        Find answers to common questions about our glass products,
        manufacturing processes, customization options, and quality
        standards. Our FAQ section helps you understand how we
        deliver reliable and high-performance glass solutions.
      </p>

      {/* Main Layout */}
      <div className="faq-container">

        {/* Left Card */}
        <div className="faq-left">

          <div className="answer-box">
            <h3>Get Answers</h3>

            <p>
              Our FAQ section provides clear insights into our glass
              processing methods, product range, customization
              capabilities, and quality assurance practices.
            </p>
          </div>

          <div className="contact-box">

            <h3>Contact Information</h3>

            <p>
              Have questions about our glass solutions or need a
              custom requirement? Our team is here to help you with
              the right guidance and support.
            </p>

            <div className="divider"></div>

            {/* Contact Items */}
            <div className="contact-items">

              <div className="contact-item">

                <div className="icon">
                  📞
                </div>

                <div>
                  <h4>Phone Number</h4>
                  <span>+91 96068 59044</span>
                </div>

              </div>

              <div className="contact-item">

                <div className="icon">
                  📍
                </div>

                <div>
                  <h4>Location</h4>
                  <span>
                    BDS Nagar, Kothanur,
                    Bengaluru, Karnataka 560077
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Right FAQ */}
        <div className="faq-right">

          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${
                active === index ? "active" : ""
              }`}
              key={index}
            >

              {/* Question */}
              <div
                className="faq-question"
                onClick={() => setActive(
                  active === index ? null : index
                )}
              >

                <h3>{faq.question}</h3>

                <button>
                  {active === index ? "−" : "+"}
                </button>

              </div>

              {/* Answer */}
              {active === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Faq;