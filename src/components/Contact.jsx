import "./Contact.css";

function Contact() {

  return (
    <section className="contact-section">

      {/* Badge */}
      <div className="contact-badge">
        <span className="dot"></span>
        <p>Get In Touch</p>
      </div>

      {/* Main Container */}
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <h2>Contact Us</h2>

          <p className="contact-text">
            Have a project in mind or need expert guidance
            on the right glass solution? Our team is here
            to assist you with product selection,
            customization, and technical support.
          </p>

          {/* Contact Items */}
          <div className="contact-info">

            <div className="info-item">
              <div className="info-icon">📞</div>
              <span>+91 96068 59044</span>
            </div>

            <div className="info-item">
              <div className="info-icon">✉</div>
              <span>mmglass@gmail.com</span>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <span>Bangalore</span>
            </div>

          </div>

          {/* Social */}
          <div className="social-icons">

            <div className="social">f</div>
            <div className="social">◎</div>
            <div className="social">𝕏</div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">

          {/* Top Row */}
          <div className="form-row">

            <div className="form-group">
              <label>FULL NAME</label>
              <input
                type="text"
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label>EMAIL ADDRESS</label>
              <input
                type="email"
                placeholder="john@company.com"
              />
            </div>

          </div>

          {/* Subject */}
          <div className="form-group">
            <label>SUBJECT</label>

            <select>
              <option>Product Inquiry</option>
              <option>Support</option>
              <option>Business</option>
            </select>
          </div>

          {/* Message */}
          <div className="form-group">
            <label>MESSAGE</label>

            <textarea
              placeholder="How can we help?"
            ></textarea>
          </div>

          {/* Button */}
          <button className="send-btn">
            Send Message
          </button>

        </div>

      </div>

    </section>
  );
}

export default Contact;