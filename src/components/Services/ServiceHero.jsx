import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServiceHero() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">

      {/* Background — Unsplash photo-1497366216548-37526070297c (office, free use) */}
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format&fit=crop"
        alt="Services — professional workspace"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/85 via-black/60 to-black/40" />

      {/* Red vignette on left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E5093B]/20 via-transparent to-transparent" />

      {/* Animated scan line */}
      <div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E5093B]/50 to-transparent"
        style={{ animation: "scanline 4s linear infinite", top: "30%" }}
      />
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-60px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(300px); opacity: 0; }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 h-full flex flex-col justify-center">

        {/* Vertical text label (design detail) */}
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="mb-5 flex items-center gap-3"
        >
          <span className="h-[2px] w-12 bg-[#E5093B]" />
          <span className="text-[#E5093B] text-[11px] font-bold uppercase tracking-[0.3em]">
            What We Offer
          </span>
        </div>

        <h1
          data-aos="fade-up"
          data-aos-duration="700"
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
        >
          Our
          <br />
          <span className="text-white">Services</span>
        </h1>

        {/* Stats row */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="700"
          className="mt-6 flex items-center gap-8"
        >
          {[["50+", "Projects"], ["12+", "Years"], ["200+", "Clients"]].map(([num, label]) => (
            <div key={label} className="flex flex-col">
              <span className="text-[#E5093B] text-2xl font-black leading-none">{num}</span>
              <span className="text-white/50 text-xs uppercase tracking-widest mt-1">{label}</span>
            </div>
          ))}
        </div>

        {/* Breadcrumb */}
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="700"
          className="mt-6 flex items-center text-sm text-white/70"
        >
          <a href="/" className="relative group hover:text-[#E5093B] transition-colors duration-300">
            Home
            <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#E5093B] transition-all duration-300 group-hover:w-full" />
          </a>
          <span className="mx-3 text-white/40">›</span>
          <span className="text-white cursor-default">Services</span>
        </div>

      </div>
    </section>
  );
}