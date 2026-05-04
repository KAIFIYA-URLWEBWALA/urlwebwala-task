import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Clients from "./Clients";
import WhyChoose from "./WhyChoose";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Pricing from "./Pricing";
import Team from "./Team";
import Blog from "./Blog";
import FAQ from "./FAQ";
export default function Home() {
  
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Clients />
      <WhyChoose />
      {/* <Features /> */}
      <Projects />
      <Pricing />
      <Testimonials />
      <Team/>
      <Blog/>
      <FAQ/>
      <Footer />
    </>
  );
}

