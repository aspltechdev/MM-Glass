import "./Branches.css";

import map1 from "../assets/map.jpeg";

function Branches() {
  const branch = {
    title: "Main Branch",
    location:
      "BDS Nagar, Kothanur, Bengaluru, Karnataka 560077",
    image: map1,
  };

  return (
    <section className="branches-section">
      <div className="branches-container">
        <div className="branches-copy">
          <span className="branches-eyebrow">Visit Us</span>
          <h2>{branch.title}</h2>
          <p className="branches-description">
            Find our main branch easily and connect with us
            at our Bengaluru location for product support,
            project discussions, and site visits.
          </p>

          <div className="branch-address-card">
            <span className="branch-address-label">
              Branch Address
            </span>
            <p>{branch.location}</p>
          </div>
        </div>

        <div className="branch-map-card">
          <div className="branch-image">
            <img
              src={branch.image}
              alt={`${branch.title} map`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Branches;
