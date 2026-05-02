import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import Services    from "./components/Services";
import About       from "./components/About";
import Clients     from "./components/Clients";
import WhyChoose   from "./components/WhyChoose";
// import Features    from "./components/Features";
// import Projects    from "./components/Projects";
// import Testimonials from "./components/Testimonials";
import Footer      from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Clients />
      <WhyChoose />
      {/* <Features />
      <Projects /> */}
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}

export default App;