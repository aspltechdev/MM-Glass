import "./Branches.css";

import map1 from "../assets/map.jpeg";
import map2 from "../assets/map.jpeg";

function Branches() {

  const branches = [
    {
      title: "Main Branch",
      location:
        "BDS Nagar, Kothanur, Bengaluru, Karnataka 560077",
      image: map1,
    },

    {
      title: "Second Branch",
      location:
        "BDS Nagar, Kothanur, Bengaluru, Karnataka 560077",
      image: map2,
    },
  ];

  return (
    <section className="branches-section">

      <div className="branches-container">

        {branches.map((branch, index) => (
          <div className="branch-card" key={index}>

            {/* Title */}
            <h2>{branch.title}</h2>

            {/* Address */}
            <p>{branch.location}</p>

            {/* Map */}
            <div className="branch-image">
              <img
                src={branch.image}
                alt={branch.title}
              />
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Branches;