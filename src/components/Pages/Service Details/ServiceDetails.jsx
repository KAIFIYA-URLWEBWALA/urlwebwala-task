import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ServiceDetailHero    from "./ServiceDetailHero";
import ServiceDetailContent from "./ServiceDetailContent";
import ServiceDetailSidebar from "./ServiceDetailSidebar";
import ServiceNewsletter from "./ServiceNewsLetter";

export default function ServiceDetails() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background-light">

      {/* Hero Banner */}
      <ServiceDetailHero />

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">

          {/* Left — Main Content */}
          <ServiceDetailContent />

          {/* Right — Sidebar */}
          <ServiceDetailSidebar />
        </div>
      </div>
<ServiceNewsletter/>

    </div>
  );
}