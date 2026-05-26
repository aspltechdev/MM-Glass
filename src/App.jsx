// // import { BrowserRouter, Routes, Route } from "react-router-dom";

// // import Navbar from "./components/Navbar";
// // import Hero from "./components/Hero";
// // import Trusted from "./components/Trusted";
// // import Strength from "./components/Strength";
// // import Certification from "./components/Certification";
// // import WhyChoose from "./components/WhyChoose";
// // import Achievements from "./components/Achievements";
// // import Products from "./components/Products";
// // import CoreFeatures from "./components/CoreFeatures";
// // import Expertise from "./components/Expertise";
// // import Faq from "./components/Faq";
// // import Testimonials from "./components/Testimonials";
// // import Contact from "./components/Contact";
// // import ContactUs from "./components/contactus";
// // import Branches from "./components/Branches";
// // import Footer from "./components/Footer";

// // // Example About component

// // import OurStory from "./components/ourstory";
// // import Product from "./components/product"
// // import Gallery from "./components/gallery";
// // import Aboutus from "./components/Aboutus";
// // import CTA from "./components/CTA";
// // import About from "./components/Aboutpage";




// // function HomePage() {
// //   return (
// //     <>
// //       <Hero />
      
// //    <Aboutus/>
// //      <WhyChoose />
// //    <Trusted />
// //       {/* <Strength /> */}
// //            <Products />
// //       <Certification />
     
// //        {/* <Products /> */}
// //       <Achievements />
// //       <CoreFeatures />
// //       {/* <Expertise /> */}
    
// //       <Testimonials />
   
    
// //       {/* <OurStory /> */}
    
// //       <CTA/>
// //     </>
// //   );
// // }

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Navbar />

// //       <Routes>
// //         <Route path="/" element={<HomePage />} />
// //         <Route path="/about" element={<About/>} />
// //         <Route path="/ourstory" element={<OurStory />} />
// //         <Route path="/product" element={<Product />} />
// //         <Route path="/gallery" element={<Gallery />} />
// //         <Route path="/contactus" element={<ContactUs />} />
// //       </Routes>

// //       <Footer />
// //     </BrowserRouter>
// //   );
// // }

// // export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { FaWhatsapp } from "react-icons/fa";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Trusted from "./components/Trusted";
// import Strength from "./components/Strength";
// import Certification from "./components/Certification";
// import WhyChoose from "./components/WhyChoose";
// import Achievements from "./components/Achievements";
// import Products from "./components/Products";
// import CoreFeatures from "./components/CoreFeatures";
// import Expertise from "./components/Expertise";
// import Faq from "./components/Faq";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
// import ContactUs from "./components/contactus";
// import Branches from "./components/Branches";
// import Footer from "./components/Footer";

// import OurStory from "./components/ourstory";
// import Product from "./components/product";
// import Gallery from "./components/gallery";
// import Aboutus from "./components/Aboutus";
// import CTA from "./components/CTA";
// import About from "./components/Aboutpage";

// import "./App.css";

// function HomePage() {

//   return (

//     <>

//       <Hero />

//       <Aboutus />

//       <WhyChoose />

//       <Trusted />

//       <Products />

//       <Certification />

//       <Achievements />

//       <CoreFeatures />

//       <Testimonials />

//       <CTA />

//     </>

//   );
// }

// function App() {

//   return (

//     <BrowserRouter>

//       <Navbar />

//       <Routes>

//         <Route
//           path="/"
//           element={<HomePage />}
//         />

//         <Route
//           path="/about"
//           element={<About />}
//         />

//         <Route
//           path="/ourstory"
//           element={<OurStory />}
//         />

//         <Route
//           path="/product"
//           element={<Product />}
//         />

//         <Route
//           path="/gallery"
//           element={<Gallery />}
//         />

//         <Route
//           path="/contactus"
//           element={<ContactUs />}
//         />

//       </Routes>

//       {/* FLOATING WHATSAPP */}

//       <a
//         href="https://wa.me/9606859044"
//         className="whatsapp-float"
//         target="_blank"
//         rel="noreferrer"
//       >

//         <FaWhatsapp />

//       </a>

//       <Footer />

//     </BrowserRouter>

//   );
// }

// export default App;















import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

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

import OurStory from "./components/ourstory";
import Product from "./components/product";
import Gallery from "./components/gallery";
import Aboutus from "./components/Aboutus";
import CTA from "./components/CTA";
import About from "./components/Aboutpage";

import "./App.css";
import VisitorCounter from "./VisitorCounter";
import { FaYoutube } from "react-icons/fa6";

function HomePage() {

  return (

    <>

      <Hero />

      <Aboutus />

      <WhyChoose />

      <Trusted />

      <Products />

      <Certification />

      <Achievements />

      <CoreFeatures />

      <Testimonials />

      <CTA />

    </>

  );
}

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/ourstory"
          element={<OurStory />}
        />

        <Route
          path="/product"
          element={<Product />}
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        <Route
          path="/contactus"
          element={<ContactUs />}
        />

      </Routes>

      {/* =====================================================
          FLOATING SOCIAL MEDIA
      ====================================================== */}

    {/* =====================================================
    FLOATING SOCIAL MENU
===================================================== */}

{/* =====================================================
    FLOATING SOCIAL MENU
===================================================== */}

<div className="luxury-social-wrapper">

  {/* MAIN WHATSAPP BUTTON */}

  <a
    href="https://wa.me/9606859044"
    target="_blank"
    rel="noreferrer"
    className="luxury-social-main"
  >

    <FaWhatsapp />

  </a>

  {/* OTHER SOCIAL ICONS */}

  <div className="luxury-social-icons">

    {/* INSTAGRAM */}

    <a
      href="https://www.instagram.com/mm_safety_glass?utm_source=qr"
      target="_blank"
      rel="noreferrer"
      className="luxury-social-icon instagram-icon"
    >

      <FaInstagram />

    </a>

    {/* FACEBOOK */}

    <a
      href="https://facebook.com/"
      target="_blank"
      rel="noreferrer"
      className="luxury-social-icon facebook-icon"
    >

      <FaFacebookF />

    </a>

    {/* LINKEDIN */}

    <a
      href="https://www.linkedin.com/company/mm-safety-glass/"
      target="_blank"
      rel="noreferrer"
      className="luxury-social-icon linkedin-icon"
    >

      <FaLinkedinIn />

    </a>

    {/* YOUTUBE */}

    <a
      href="https://youtube.com/"
      target="_blank"
      rel="noreferrer"
      className="luxury-social-icon youtube-icon"
    >

      <FaYoutube />

    </a>

  </div>

</div>

      <Footer />

    </BrowserRouter>

  );
}

export default App;