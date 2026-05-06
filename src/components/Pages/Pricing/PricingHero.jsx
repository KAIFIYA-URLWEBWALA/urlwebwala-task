import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiHome, FiChevronRight } from "react-icons/fi";

export default function PricingHero() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">

      {/* Background — Unsplash photo-1554224155-8d04cb21cd6c (finance/numbers, free use) */}
      <img
        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80&auto=format&fit=crop"
        alt="Pricing — transparent plans"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#04080f]/90" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Horizontal glowing line */}
      <div className="absolute left-0 right-0 h-[1px] top-1/2 bg-gradient-to-r from-transparent via-[#E5093B]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">

        <div data-aos="fade-right" className="flex items-center gap-3 mb-3">
          <span className="h-[2px] w-8 bg-[#E5093B]" />
          <span className="text-[#E5093B] text-[11px] font-bold uppercase tracking-[0.25em]">Transparent Plans</span>
        </div>

        <h1
          data-aos="fade-right"
          data-aos-delay="50"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4"
        >
          Pricing
        </h1>

        <nav
          data-aos="fade-right"
          data-aos-delay="100"
          className="flex items-center gap-2 text-sm"
        >
          <FiHome className="text-[#E5093B]" size={14} />
          <a href="/" className="text-white/70 hover:text-[#E5093B] transition-colors duration-200 font-medium">
            Home
          </a>
          <FiChevronRight className="text-[#E5093B]" size={12} />
          <a href="/pricing" className="text-white/70 hover:text-[#E5093B] transition-colors duration-200 font-medium">
            Pricing
          </a>
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E5093B] via-[#ff6b6b] to-[#E5093B]" />
    </section>
  );
}