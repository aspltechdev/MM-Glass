import "./Products.css";

import temperedImg from "../assets/pro1.jpeg";
import heatSoakedImg from "../assets/pro2.webp";
import heatStrengthImg from "../assets/pro3.jpeg";
import laminatedImg from "../assets/pro4.jpeg";

function Products() {

  const products = [
    {
      image: temperedImg,
      title: "Tempered/Toughened Glass",
      text: "Tempered or toughened glass is a type of safety glass processed by controlled thermal or chemical treatments to enhance its strength compared with standard glass.",
    },

    {
      image: heatSoakedImg,
      title: "Heat Soaked Glass",
      text: "The presence of nickel sulfide inclusions in float glass makes it susceptible to spontaneous breakage. We perform highly effective heat soak tests.",
    },

    {
      image: heatStrengthImg,
      title: "Heat Strengthened Glass",
      text: "Twice as strong as annealed glass, heat-strengthened glass has excellent optical clarity while maintaining strong mechanical and thermal stress capabilities.",
    },

    {
      image: laminatedImg,
      title: "Laminated Glass",
      text: "Laminated glass is a natural choice for safety, security, solar control, UV protection and noise control applications.",
    },
  ];

  return (
    <section className="products-section">

      {/* Badge */}
      <div className="products-badge">
        <span className="dot"></span>
        <p>Our Product Categories</p>
      </div>

      {/* Product Grid */}
      <div className="products-grid">

        {products.map((item, index) => (
          <div
            className="product-card"
            key={index}
          >

            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
            />

            {/* Overlay Content */}
            <div className="product-content">

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>

          </div>
        ))}

      </div>

      

      {/* Button */}
      <button className="show-btn">
        Show More Products
      </button>

    </section>
  );
}

export default Products;