import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiHome, FiChevronRight } from "react-icons/fi";

export default function BlogDetailHero() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">

      {/* Background — Unsplash photo-1499750310107-5fef28a66643 (writing/laptop, free use) */}
      <img
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80&auto=format&fit=crop"
        alt="Blog — content and writing"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Rich layered overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Subtle line pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "100% 24px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <h1
          data-aos="fade-right"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-tight"
        >
          Blog Details
        </h1>

        <nav
          data-aos="fade-right"
          data-aos-delay="100"
          className="flex items-center gap-2 text-sm text-white/70"
        >
          <FiHome className="text-[#E5093B]" size={14} />
          <a href="/" className="hover:text-[#E5093B] transition-colors duration-200 font-medium">
            Home
          </a>
          <FiChevronRight size={12} className="text-white/40" />
          <a href="/blogs" className="hover:text-[#E5093B] transition-colors duration-200 font-medium">
            Blogs
          </a>
          <FiChevronRight size={12} className="text-white/40" />
          <span className="text-[#E5093B] font-semibold">Blog Details</span>
        </nav>
      </div>

      {/* Bottom accent bar — gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E5093B] via-[#ff6b6b] to-[#E5093B]" />
    </section>
  );
}