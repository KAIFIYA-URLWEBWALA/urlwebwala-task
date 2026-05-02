import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Clients from "./components/Clients";
import WhyChoose from "./components/WhyChoose";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,    // re-animate every time section enters viewport
      mirror: true,   // animate out when scrolling back up too
      offset: 60,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Clients />
      <WhyChoose />
    </>
  );
}

export default App;
