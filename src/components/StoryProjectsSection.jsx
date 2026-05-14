// ProjectsSection.jsx

import React from "react";
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
    id: 1,
    title: "Sunshine Tower",
    location: "Maharashtra",
    image: project1,
  },
  {
    id: 2,
    title: "World Trade Center",
    location: "Pune",
    image: project2,
  },
  {
    id: 3,
    title: "Barclays Bank",
    location: "Mumbai",
    image: project3,
  },
  {
    id: 4,
    title: "Avinghna House",
    location: "Mumbai",
    image: project4,
  },
   {
    id: 5,
    title: "PS Emperador",
    location: "Kolkata",
    image: project5,
    
  },
  
     {
    id: 6,
    title: "Café Niloufer",
    location: "Hyderabad",
    image: project6,
  },
     {
    id: 7,
    title: "Globsyn Crystal",
    location: "Salt lake, Kolkata",
    image: project7,
  },
      {
    id: 8,
    title: "Shivalik Shilp",
    location: "Ahmedabad",
    image: project8,
  },
];

function StoryProjectsSection() {
  return (
    <section className="projects-section">

      {/* TOP BADGE */}
      <div className="projects-badge">
        <span className="badge-dot"></span>
        Our Projects
      </div>

      {/* GRID */}
      <div className="projects-grid">

        {projects.map((project) => (
          <div className="project-card" key={project.id}>

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            {/* OVERLAY */}
            <div className="project-overlay"></div>

            {/* CONTENT */}
            <div className="project-content">

              <div className="project-label">
                <h3>{project.title}</h3>
                <p>{project.location}</p>
              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default StoryProjectsSection;