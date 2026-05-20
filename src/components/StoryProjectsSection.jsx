import "./StoryProjectsSection.css";

import project1 from "../assets/story1.png";
import project2 from "../assets/story2.png";
import project3 from "../assets/story3.png";
import project4 from "../assets/story4.png";
import project5 from "../assets/story5.png";
import project6 from "../assets/story6.png";
import project7 from "../assets/story7.png";
import project8 from "../assets/story8.png";

const projects = [

  {
    id:1,
    title:"Sunshine Tower",
    location:"Maharashtra",
    image:project1,
    size:"large",
  },

  {
    id:2,
    title:"World Trade Center",
    location:"Pune",
    image:project2,
  },

  {
    id:3,
    title:"Barclays Bank",
    location:"Mumbai",
    image:project3,
  },

  {
    id:4,
    title:"Avinghna House",
    location:"Mumbai",
    image:project4,
    size:"wide",
  },

  {
    id:5,
    title:"PS Emperador",
    location:"Kolkata",
    image:project5,
  },

  {
    id:6,
    title:"Café Niloufer",
    location:"Hyderabad",
    image:project6,
  },

  {
    id:7,
    title:"Globsyn Crystal",
    location:"Salt Lake, Kolkata",
    image:project7,
    size:"large",
  },

  {
    id:8,
    title:"Shivalik Shilp",
    location:"Ahmedabad",
    image:project8,
  },
   {
    id:9,
    title:"World Trade Center",
    location:"Pune",
    image:project2,
  },

];

function StoryProjectsSection() {

  return (

    <section className="sp-section">

      {/* =====================================================
          CINEMATIC GLASS BACKGROUND
      ====================================================== */}

      <div className="sp-cinematic-bg">

        {/* BUILDINGS */}

        <div className="sp-building building-1"></div>

        <div className="sp-building building-2"></div>

        <div className="sp-building building-3"></div>

        {/* REFLECTIONS */}

        <div className="sp-reflection reflection-1"></div>

        <div className="sp-reflection reflection-2"></div>

        <div className="sp-reflection reflection-3"></div>

        {/* ORBS */}

        <div className="sp-orb orb-1"></div>

        <div className="sp-orb orb-2"></div>

      </div>

      {/* =====================================================
          OVERLAYS
      ====================================================== */}

      <div className="sp-overlay"></div>

      <div className="sp-grid-bg"></div>

      <div className="sp-light"></div>

      <div className="sp-vignette"></div>

      {/* HUGE BG TEXT */}

      <div className="sp-bg-text">

        PROJECTS

      </div>

      {/* =====================================================
          TOP
      ====================================================== */}

      <div className="sp-top">

        <span>

          ARCHITECTURAL SHOWCASE

        </span>

        <h2>

        SPACES BUILT
WITH PRECISION
AND TRANSPARENCY

        </h2>

        <p>

          A cinematic showcase of architectural
          projects engineered through modern
          glass systems and spatial innovation.

        </p>

      </div>

      {/* =====================================================
          GRID
      ====================================================== */}

      <div className="sp-grid">

        {projects.map((project,index)=>(

          <div
            className={`sp-card ${project.size || ""}`}
            key={project.id}
            style={{
              animationDelay:`${index * 0.1}s`
            }}
          >

            {/* IMAGE */}

            <div className="sp-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            {/* OVERLAY */}

            <div className="sp-card-overlay"></div>

            {/* GLOW */}

            <div className="sp-glow"></div>

            {/* SHINE */}

            <div className="sp-card-shine"></div>

            {/* CONTENT */}

            <div className="sp-content">

              <span>

                PREMIUM PROJECT

              </span>

              <h3>

                {project.title}

              </h3>

              <p>

                {project.location}

              </p>

            </div>

          </div>

        ))}

      </div>

      {/* =====================================================
          FLOATING PANEL
      ====================================================== */}

      <div className="sp-floating-panel">

        <div className="sp-panel-glow"></div>

        <span>

          NEXT-GEN INFRASTRUCTURE

        </span>

        <h3>

   ICONIC ARCHITECTURE
POWERED BY PREMIUM GLASS

        </h3>

        <p>

          Luxury architectural ecosystems
          powered by futuristic fabrication
          and precision-engineered glass technologies.

        </p>

      </div>

    </section>
  );
}

export default StoryProjectsSection;