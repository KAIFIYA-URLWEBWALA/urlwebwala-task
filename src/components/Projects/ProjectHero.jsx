import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectHero() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">

      {/* Background — Unsplash photo-1486325212027-8081e485255e (architecture, free use) */}
      <img
        src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&auto=format&fit=crop"
        alt="Projects — architecture and engineering"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Animated floating particles */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-[#E5093B]/20 animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full border border-white/10 animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 h-full flex flex-col justify-center">

        <div
          data-aos="fade-right"
          data-aos-duration="600"
          className="mb-4 flex items-center gap-3 w-fit"
        >
          <div className="w-10 h-[2px] bg-[#E5093B]" />
          <span className="text-[#E5093B] text-xs font-bold uppercase tracking-[0.2em]">Our Work</span>
          <div className="w-10 h-[2px] bg-[#E5093B]" />
        </div>

        <h1
          data-aos="fade-up"
          data-aos-duration="700"
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
        >
          Our <br />
          <span className="relative inline-block">
            Projects
            <span
              className="absolute -bottom-2 left-0 h-[3px] w-full bg-[#E5093B]"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="600"
            />
          </span>
        </h1>

        {/* Breadcrumb */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
          className="mt-8 flex items-center text-sm sm:text-base text-white/70"
        >
          <a href="/" className="relative group hover:text-[#E5093B] transition-colors duration-300">
            Home
            <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#E5093B] transition-all duration-300 group-hover:w-full" />
          </a>
          <span className="mx-3 text-white/40">›</span>
          <span className="text-white cursor-default">Projects</span>
        </div>

      </div>
    </section>
  );
}
