// About.jsx
import "./About.css";
import Strength from '../components/Strength';
import Certification from "./Certification";
import WhyChoose from "./WhyChoose";
import Achievements from "./Achievements";
import Corevalues from "../assets/corevalue.png";
import Abouthero from "../assets/abouthero.png"; 


function About() {
  return (
    <>
      {/* Banner Section */}
      <section className="about-section">
        <div className="about-banner">
          <img
            src={Abouthero}
            alt="Factory"
          />

          <div className="about-overlay">
            <button>ABOUT US</button>
          </div>
        </div>

        {/* Content Section */}
        <div className="about-content">
          <h2>
            A Legacy of Craftsmanship. A Vision of Excellence.
          </h2>

          <p>
            From its refined beginnings, MM Glass has evolved into a
            distinguished name in the world of architectural glass
            solutions. With a deep-rooted commitment to precision,
            innovation, and design excellence, we craft glass that not
            only performs flawlessly but also enhances the aesthetic
            value of modern spaces.
          </p>

          <p>
            At MM Glass, we collaborate with leading architects,
            designers, and developers to create bespoke glass
            solutions tailored to the most demanding projects.
            Powered by advanced technology and guided by expert
            craftsmanship, we bring together functionality and
            sophistication in every detail. Our work stands as a
            testament to trust, innovation, and an unwavering
            dedication to excellence.
          </p>
        </div>
      </section>
      
      <Strength />
      <Certification />
      <WhyChoose />
      <Achievements />


{/* Core Values Section */}

<section className="core-values-section">
  <div className="core-values-header">
    <h2>Our Core Values</h2>

    <p>
      From the very foundation of MM Glass, our vision has been to
      go beyond manufacturing—to build lasting relationships,
      deliver exceptional quality, and create value that stands
      the test of time. Our core values shape every decision,
      every process, and every product we deliver.
    </p>
  </div>

  <div className="core-values-container">

    {/* Left Image */}

    <div className="core-values-image">
      <img
        src={Corevalues}
        alt="Workers"
      />
    </div>

    {/* Right Accordion */}

    <div className="core-values-list">

      <div className="value-card active">
        <div className="value-title">
          <h3>Enduring Relationships</h3>
          <span>−</span>
        </div>

        <p>
          We believe in building long-term partnerships based on
          trust, transparency, and mutual growth with our clients
          and collaborators.
        </p>
      </div>

      <div className="value-card">
        <div className="value-title">
          <h3>Reliability</h3>
          <span>+</span>
        </div>
      </div>

      <div className="value-card">
        <div className="value-title">
          <h3>Progressive Growth</h3>
          <span>+</span>
        </div>
      </div>

      <div className="value-card">
        <div className="value-title">
          <h3>Sustainability</h3>
          <span>+</span>
        </div>
      </div>

      <div className="value-card">
        <div className="value-title">
          <h3>Safety</h3>
          <span>+</span>
        </div>
      </div>

      <div className="value-card">
        <div className="value-title">
          <h3>Integrity</h3>
          <span>+</span>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="testimonials-section">

  {/* Heading */}

  <div className="testimonial-heading">
    <button>
      <span className="dot"></span>
      Testimonials
    </button>
  </div>

  {/* Testimonials Grid */}

  <div className="testimonials-grid">

    {/* Card 1 */}

    <div className="testimonial-card">
      <div className="testimonial-user">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="user"
        />

        <div>
          <h4>Suresh Kumar</h4>
          <div className="stars">★★★★★</div>
        </div>
      </div>

      <p>
        “The quality and precision of their glass products exceeded
        our expectations. From design to delivery, the entire
        process was seamless. Their commitment to safety and
        consistency truly sets them apart.”
      </p>
    </div>

    {/* Card 2 */}

    <div className="testimonial-card">
      <div className="testimonial-user">
        <img
          src="https://randomuser.me/api/portraits/men/45.jpg"
          alt="user"
        />

        <div>
          <h4>Suresh Kumar</h4>
          <div className="stars">★★★★★</div>
        </div>
      </div>

      <p>
        “The quality and precision of their glass products exceeded
        our expectations. From design to delivery, the entire
        process was seamless. Their commitment to safety and
        consistency truly sets them apart.”
      </p>
    </div>

    {/* Card 3 */}

    <div className="testimonial-card">
      <div className="testimonial-user">
        <img
          src="https://randomuser.me/api/portraits/men/52.jpg"
          alt="user"
        />

        <div>
          <h4>Suresh Kumar</h4>
          <div className="stars">★★★★★</div>
        </div>
      </div>

      <p>
        “The quality and precision of their glass products exceeded
        our expectations. From design to delivery, the entire
        process was seamless. Their commitment to safety and
        consistency truly sets them apart.”
      </p>
    </div>

    {/* Card 4 */}

    <div className="testimonial-card">
      <div className="testimonial-user">
        <img
          src="https://randomuser.me/api/portraits/men/67.jpg"
          alt="user"
        />

        <div>
          <h4>Suresh Kumar</h4>
          <div className="stars">★★★★★</div>
        </div>
      </div>

      <p>
        “The quality and precision of their glass products exceeded
        our expectations. From design to delivery, the entire
        process was seamless. Their commitment to safety and
        consistency truly sets them apart.”
      </p>
    </div>

    {/* Card 5 */}

    <div className="testimonial-card">
      <div className="testimonial-user">
        <img
          src="https://randomuser.me/api/portraits/men/71.jpg"
          alt="user"
        />

        <div>
          <h4>Suresh Kumar</h4>
          <div className="stars">★★★★★</div>
        </div>
      </div>

      <p>
        “The quality and precision of their glass products exceeded
        our expectations. From design to delivery, the entire
        process was seamless. Their commitment to safety and
        consistency truly sets them apart.”
      </p>
    </div>

    {/* Card 6 */}

    <div className="testimonial-card">
      <div className="testimonial-user">
        <img
          src="https://randomuser.me/api/portraits/men/80.jpg"
          alt="user"
        />

        <div>
          <h4>Suresh Kumar</h4>
          <div className="stars">★★★★★</div>
        </div>
      </div>

      <p>
        “The quality and precision of their glass products exceeded
        our expectations. From design to delivery, the entire
        process was seamless. Their commitment to safety and
        consistency truly sets them apart.”
      </p>
    </div>

  </div>
</section>


    </>
    
  );
}

export default About;
