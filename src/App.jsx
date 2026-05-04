import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
// import Contact from "./components/Contact/Contact";

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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

    </BrowserRouter>

  );
}

export default App;