import Hero from "./Hero";
import Service from "./Service";
import About from "./About";
import Clients from "./Clients";
import WhyChoose from "./WhyChoose";
import Project from "./Project";
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
      <Service />
      <About />
      <Clients />
      <WhyChoose />
      {/* <Features /> */}
      <Project />
      <Pricing />
      <Testimonials />
      <Team/>
      <Blog/>
      <FAQ/>
      <Footer />
    </>
  );
}

