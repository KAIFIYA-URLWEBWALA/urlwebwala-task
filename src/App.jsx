import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Services/Services.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";

// Pages sub-routes
import ServiceDetails from "./components/Pages/Service Details/ServiceDetails.jsx";
import BlogDetails from "./components/Pages/Blog Details/Blogs.jsx";
import Pricing from "./components/Pages/Pricing/Pricing.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 60,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"                element={<Home />} />
        <Route path="/about"           element={<About />} />
        <Route path="/services"        element={<Services />} />
        <Route path="/projects"        element={<Projects />} />
        <Route path="/blogs"           element={<Blogs />} />

        {/* Pages dropdown routes */}
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/blog-details"    element={<BlogDetails />} />
        <Route path="/pricing"         element={<Pricing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;