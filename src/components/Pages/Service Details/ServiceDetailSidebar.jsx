import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowRight, FiPhone, FiFileText } from "react-icons/fi";

const serviceLinks = [
  "Connect, Engage, Succeed",
  "Powering Your Mobile Experience",
  "Enhance Your Mobile Journey",
  "Cyber Shield Technologies",
  "Simplify Life with Mobile Apps",
];

export default function ServiceDetailSidebar() {
  useEffect(() => {
    AOS.init({ duration: 750, once: true });
  }, []);

  return (
    <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 space-y-6">

      {/* ── Project Information Widget ── */}
      <div data-aos="fade-left" data-aos-delay="50">
        {/* Orange/Red header */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-t-2xl px-6 py-4">
          <h3 className="text-white font-extrabold text-lg tracking-wide text-center">
            Project Information
          </h3>
        </div>

        {/* Links list */}
        <div className="bg-white border border-gray-100 rounded-b-2xl shadow-sm overflow-hidden">
          {serviceLinks.map((link, i) => (
            <a
              key={i}
              href="#"
              className="flex items-center justify-between px-5 py-3.5 text-sm font-medium text-text-secondary hover:text-primary hover:bg-primary/5 border-b border-gray-50 last:border-0 group transition-all duration-200"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                {link}
              </span>
              <FiArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0" />
            </a>
          ))}
        </div>
      </div>

      {/* ── Contact Card ── */}
      <div
        data-aos="fade-left"
        data-aos-delay="150"
        className="relative overflow-hidden rounded-2xl shadow-md"
      >
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-text-primary/85" />

        {/* Red diagonal accent */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(135deg, transparent 55%, rgba(229,9,59,0.8) 55%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-7 text-center">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-1">
            Contact US now
          </p>
          <h4 className="text-white font-extrabold text-xl leading-snug mb-4">
            If You Need Help
          </h4>

          {/* Phone */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <FiPhone className="text-primary" />
            <a
              href="tel:0125836994"
              className="text-white font-extrabold text-2xl tracking-wider hover:text-primary transition-colors"
            >
              0125836994
            </a>
          </div>

          {/* Or Contact Form */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-white/20" />
            <span className="text-white/60 text-xs font-medium flex items-center gap-1">
              <FiFileText size={11} /> or Contact Form
            </span>
            <div className="flex-1 h-px bg-white/20" />
          </div>

          {/* CTA Button */}
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white font-bold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 group"
          >
            LETS START
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>

    </aside>
  );
}