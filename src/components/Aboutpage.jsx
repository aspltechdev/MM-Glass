import React from "react";
import Aboutus from "./Aboutus";
import Expertise from "./Expertise";
import Strength from "./Strength";
import AboutGallery from "./AboutGallery";

const About = () => {
  return (
    <div >
      <Aboutus/>
      <AboutGallery/>
      <Expertise/> 
      <Strength/>
     
    </div>
  );
};

export default About;