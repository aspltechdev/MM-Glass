import React from "react";
import Aboutus from "./Aboutus";
import Expertise from "./Expertise";
import Strength from "./Strength";
import AboutGallery from "./AboutGallery";
import FounderStory from "./FounderStory";

const About = () => {
  return (
    <div >
      <Aboutus/>
      <FounderStory/>
      <AboutGallery/>
      <Expertise/> 
      <Strength/>
     
    </div>
  );
};

export default About;