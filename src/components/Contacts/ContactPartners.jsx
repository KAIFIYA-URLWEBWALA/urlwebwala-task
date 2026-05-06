import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ── Copyright-free inline SVG logos (geometric / abstract marks) ── */
const logos = [
  {
    name: "Company 1",
    svg: (
      <svg viewBox="0 0 80 80" fill="none" className="w-10 h-10 mx-auto mb-2">
        <path d="M10 70 L40 10 L70 70" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M22 48 L58 48" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Company 2",
    svg: (
      <svg viewBox="0 0 80 80" fill="none" className="w-10 h-10 mx-auto mb-2">
        <polygon points="40,8 72,24 72,56 40,72 8,56 8,24" stroke="currentColor" strokeWidth="4" fill="none"/>
        <polygon points="40,22 58,31 58,49 40,58 22,49 22,31" stroke="currentColor" strokeWidth="3" fill="none"/>
      </svg>
    ),
  },
  {
    name: "Company 3",
    svg: (
      <svg viewBox="0 0 80 80" fill="none" className="w-10 h-10 mx-auto mb-2">
        <circle cx="40" cy="40" r="28" stroke="currentColor" strokeWidth="4" fill="none"/>
        <circle cx="40" cy="40" r="14" stroke="currentColor" strokeWidth="3" fill="none"/>
        <line x1="40" y1="12" x2="40" y2="26" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="40" y1="54" x2="40" y2="68" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="12" y1="40" x2="26" y2="40" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="54" y1="40" x2="68" y2="40" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Company 4",
    svg: (
      <svg viewBox="0 0 80 80" fill="none" className="w-10 h-10 mx-auto mb-2">
        <rect x="10" y="10" width="26" height="26" stroke="currentColor" strokeWidth="4" fill="none"/>
        <rect x="44" y="10" width="26" height="26" stroke="currentColor" strokeWidth="4" fill="none"/>
        <rect x="10" y="44" width="26" height="26" stroke="currentColor" strokeWidth="4" fill="none"/>
        <rect x="44" y="44" width="26" height="26" stroke="currentColor" strokeWidth="4" fill="none"/>
      </svg>
    ),
  },
  {
    name: "Company 5",
    svg: (
      <svg viewBox="0 0 80 80" fill="none" className="w-10 h-10 mx-auto mb-2">
        <path d="M10 20 L40 8 L70 20 L70 44 L40 72 L10 44 Z" stroke="currentColor" strokeWidth="4" fill="none"/>
        <path d="M10 20 L40 32 L70 20" stroke="currentColor" strokeWidth="3" fill="none"/>
        <line x1="40" y1="32" x2="40" y2="72" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Company 6",
    svg: (
      <svg viewBox="0 0 80 80" fill="none" className="w-10 h-10 mx-auto mb-2">
        <rect x="8" y="8" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="4" fill="none"/>
        <rect x="44" y="8" width="28" height="28" rx="14" stroke="currentColor" strokeWidth="4" fill="none"/>
        <rect x="8" y="44" width="28" height="28" rx="14" stroke="currentColor" strokeWidth="4" fill="none"/>
        <rect x="44" y="44" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="4" fill="none"/>
      </svg>
    ),
  },
  {
    name: "Company 7",
    svg: (
      <svg viewBox="0 0 80 80" fill="none" className="w-10 h-10 mx-auto mb-2">
        <path d="M40 10 L65 25 L65 55 L40 70 L15 55 L15 25 Z" stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round"/>
        <path d="M40 10 L40 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M15 25 L65 55" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M65 25 L15 55" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function ContactPartners() {
  useEffect(() => { AOS.init({ duration: 750, once: true }); }, []);

  return (
    <section className="py-14 bg-white border-t border-gray-100">
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 items-center">
          {logos.map((logo, i) => (
            <div
              key={logo.name}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Icon */}
              <div className="text-gray-300 group-hover:text-text-secondary transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                {logo.svg}
              </div>
              {/* Label */}
              <p className="text-[10px] font-bold text-gray-300 group-hover:text-gray-400 uppercase tracking-widest text-center transition-colors duration-300">
                {logo.name}
              </p>
              <p className="text-[8px] text-gray-200 group-hover:text-gray-300 uppercase tracking-wider text-center transition-colors duration-300">
                tagline here
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}