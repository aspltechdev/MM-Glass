// gallery.jsx

import { useEffect, useState } from "react";
import "./gallery.css";
import galleryhero from "../assets/heroimages/galleryhero.png";
import img1 from "../assets/architecturalglass/Ag1.png";
import img2 from "../assets/architecturalglass/Ag2.png";
import img3 from "../assets/architecturalglass/Ag3.png";
import StoryProjectsSection from "./StoryProjectsSection";





function Gallery() {

  const row1 = [
    img1,
    img2,
    img3,
  ];

  const row2 = [
    img1,
    img2,
    img3,
  ];

  const row3 = [
       img1,
    img2,
    img3,
  ];

  // =========================
  // FACTORY SLIDER IMAGES
  // =========================

  const factoryImages = [
    img1,
    img2,
    img3,
  ];

  // =========================
  // SLIDER STATE
  // =========================

  const [currentIndex, setCurrentIndex] = useState(0);

  // =========================
  // AUTO SLIDE
  // =========================

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentIndex((prev) =>
        prev === factoryImages.length - 1 ? 0 : prev + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  // =========================
  // PREVIOUS
  // =========================

  const prevSlide = () => {

    setCurrentIndex((prev) =>
      prev === 0 ? factoryImages.length - 1 : prev - 1
    );

  };

  // =========================
  // NEXT
  // =========================

  const nextSlide = () => {

    setCurrentIndex((prev) =>
      prev === factoryImages.length - 1 ? 0 : prev + 1
    );

  };

  return (
    <>
      {/* =========================
          BANNER SECTION
      ========================= */}

     <StoryProjectsSection/>

      {/* =========================
          GALLERY SLIDER SECTION
      ========================= */}

    
    </>
  );
}

export default Gallery;