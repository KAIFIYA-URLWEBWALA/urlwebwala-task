import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiHome, FiChevronRight } from "react-icons/fi";

export default function BlogDetailHero() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
        alt="Blog Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-text-primary/90 via-text-primary/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <h1
          data-aos="fade-right"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3"
        >
          Blog Details
        </h1>
        <nav
          data-aos="fade-right"
          data-aos-delay="100"
          className="flex items-center gap-2 text-sm text-white/80"
        >
          <FiHome className="text-primary" />
          <a href="#" className="hover:text-primary transition-colors font-medium">
            Home
          </a>
          <FiChevronRight className="text-xs" />
          <a href="#" className="hover:text-primary transition-colors font-medium">
            Blogs
          </a>
          <FiChevronRight className="text-xs" />
          <span className="text-primary font-semibold">Blog Details</span>
        </nav>
      </div>

      {/* Bottom red accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-light to-secondary" />
    </section>
  );
}