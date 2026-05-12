import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import Strength from "./components/Strength";
import Certification from "./components/Certification";
import WhyChoose from "./components/WhyChoose";
import Achievements from "./components/Achievements";
import Products from "./components/Products";
import CoreFeatures from "./components/CoreFeatures";
import Expertise from "./components/Expertise";
import Faq from "./components/Faq";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ContactUs from "./components/contactus";
import Branches from "./components/Branches";
import Footer from "./components/Footer";

// Example About component
import About from "./components/About";
import OurStory from "./components/ourstory";
import Product from "./components/product"
import Gallery from "./components/gallery";




function HomePage() {
  return (
    <>
      <Hero />
      <Trusted />
      <Strength />
      <Certification />
      <WhyChoose />
      <Achievements />
      <CoreFeatures />
      <Expertise />
      <Faq />
      <Testimonials />
      <Contact />
      <Branches />
      {/* <OurStory /> */}
      <Products />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/product" element={<Product />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
