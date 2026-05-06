import "./Testimonials.css";

import user1 from "../assets/slider3.jpg";

function Testimonials() {

  const testimonials = [
    {
      image: user1,
      name: "Suresh Kumar",
      review:
        "The quality and precision of their glass products exceeded our expectations. From design to delivery, the entire process was seamless.",
    },

    {
      image: user1,
      name: "Suresh Kumar",
      review:
        "Their commitment to safety and consistency truly sets them apart. Highly professional team with premium product quality.",
    },

    {
      image: user1,
      name: "Suresh Kumar",
      review:
        "Excellent customer support and outstanding glass finishing. We are extremely satisfied with the final installation.",
    },

    {
      image: user1,
      name: "Suresh Kumar",
      review:
        "Reliable delivery timelines and exceptional craftsmanship. Their products enhanced our architectural project beautifully.",
    },

    {
      image: user1,
      name: "Suresh Kumar",
      review:
        "From consultation to completion, everything was handled smoothly. Truly one of the best glass solution providers.",
    },

    {
      image: user1,
      name: "Suresh Kumar",
      review:
        "Their attention to detail and commitment to quality gave us complete confidence throughout the project.",
    },
  ];

  return (
    <section className="testimonial-section">

      {/* Badge */}
      <div className="testimonial-badge">
        <span className="dot"></span>
        <p>Testimonials</p>
      </div>

      {/* Cards */}
      <div className="testimonial-grid">

        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>

            {/* Top */}
            <div className="testimonial-top">

              <img
                src={item.image}
                alt={item.name}
              />

              <div>
                <h3>{item.name}</h3>

                <div className="stars">
                  ★★★★★
                </div>
              </div>

            </div>

            {/* Review */}
            <p className="review">
              "{item.review}"
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;