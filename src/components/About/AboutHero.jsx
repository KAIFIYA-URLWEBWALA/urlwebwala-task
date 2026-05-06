import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutHero() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">

      {/* Background Image — Unsplash free commercial license */}
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80&auto=format&fit=crop"
        alt="About Us — team collaboration"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-[8000ms] hover:scale-100"
      />

      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Decorative diagonal stripe accent */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)",
        }}
      />

      {/* Red left border accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#E5093B] to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 h-full flex flex-col justify-center">

        {/* Label chip */}
        <div
          data-aos="fade-right"
          data-aos-duration="600"
          className="mb-4 inline-flex items-center gap-2 w-fit"
        >
          <span className="h-px w-8 bg-[#E5093B]" />
          <span className="text-[#E5093B] text-xs font-semibold uppercase tracking-widest">
            Who We Are
          </span>
        </div>

        {/* Heading */}
        <h1
          data-aos="fade-up"
          data-aos-duration="700"
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight"
        >
          About
          <span className="block text-[#E5093B]">Us</span>
        </h1>

        {/* Breadcrumb */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
          className="mt-6 flex items-center text-sm sm:text-base text-white/70"
        >
          <a href="/" className="relative group hover:text-[#E5093B] transition-colors duration-300">
            Home
            <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#E5093B] transition-all duration-300 group-hover:w-full" />
          </a>
          <span className="mx-3 text-white/40">›</span>
          <span className="text-white/90 hover:text-[#E5093B] transition-colors duration-300 cursor-default">
            About Us
          </span>
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
}