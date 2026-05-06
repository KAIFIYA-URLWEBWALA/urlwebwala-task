import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FiUser,
  FiTag,
  FiMessageCircle,
  FiCheckCircle,
} from "react-icons/fi";

const checkItems = [
  "Stay ahead with cutting-edge technology your business with IT Solutions",
  "Enhance your business performance with technology",
  "Empower your business with IT Solutions Unlock the potential of technology",
];

export default function BlogDetailContent() {
  useEffect(() => {
    AOS.init({ duration: 750, once: true });
  }, []);

  return (
    <article className="flex-1 min-w-0">
      {/* Featured Image */}
      <div
        data-aos="fade-up"
        className="w-full rounded-2xl overflow-hidden mb-6 shadow-md"
      >
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80"
          alt="Unleash Mobile Potential"
          className="w-full h-56 sm:h-72 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Meta */}
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        className="flex flex-wrap gap-3 mb-5"
      >
        {[
          { icon: <FiUser />, label: "By Admin" },
          { icon: <FiTag />, label: "Category" },
          { icon: <FiMessageCircle />, label: "Comments (05)" },
        ].map(({ icon, label }) => (
          <span
            key={label}
            className="flex items-center gap-1.5 text-xs font-semibold bg-primary text-white px-4 py-1.5 rounded-full"
          >
            {icon} {label}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-2xl sm:text-3xl font-extrabold text-text-primary leading-tight mb-4"
      >
        Unleash The Potential Of Mobile Enhance Your Mobile Journey
      </h1>

      {/* Intro paragraphs */}
      <p
        data-aos="fade-up"
        data-aos-delay="150"
        className="text-text-secondary text-sm leading-7 mb-4"
      >
        Web designing in a powerful way of just not an only professions, however, in a passion
        Company. We have a tendency to believe the idea that smart looking of any website is the
        impression on visitors. Web designing in a powerful way only professions.
      </p>
      <p
        data-aos="fade-up"
        data-aos-delay="180"
        className="text-text-secondary text-sm leading-7 mb-6"
      >
        Web designing in a powerful way of just not an only professions, however, in a passion
        Company. We have a tendency to believe the idea that smart looking of any website.
      </p>

      {/* Dual Images */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
      >
        <div className="rounded-xl overflow-hidden shadow-sm group">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
            alt="IT Solutions Team"
            className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="rounded-xl overflow-hidden shadow-sm group">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
            alt="IT Professionals"
            className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Body paragraph */}
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-text-secondary text-sm leading-7 mb-6"
      >
        Web designing in a powerful way of just not an only professions, however, in a passion
        Company. We have a tendency to believe the idea that smart looking of any website.
      </p>

      {/* Checklist */}
      <ul className="space-y-3 mb-8">
        {checkItems.map((item, i) => (
          <li
            key={i}
            data-aos="fade-right"
            data-aos-delay={i * 80}
            className="flex items-start gap-3"
          >
            <FiCheckCircle className="text-primary text-lg mt-0.5 flex-shrink-0" />
            <span className="text-sm font-semibold text-text-secondary">{item}</span>
          </li>
        ))}
      </ul>

      {/* Section 2 */}
      <h2
        data-aos="fade-up"
        className="text-xl sm:text-2xl font-extrabold text-text-primary mb-4"
      >
        Simplify Life with Mobile Apps
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay="80"
        className="text-text-secondary text-sm leading-7 mb-6"
      >
        Web designing in a powerful way of just not an only professions, however, in a passion
        Company. We have a tendency to believe the idea that smart looking of any website is the
        impression on visitors. Web designing in a powerful way only professions Web designing in
        a powerful way of just not an only professions, however, in a passion Companyb designing.
      </p>

      {/* Quote Block */}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="relative bg-primary/5 border-l-4 border-primary rounded-r-2xl p-6 mb-8"
      >
        <span className="absolute top-3 left-5 text-5xl font-black text-primary/20 leading-none select-none">
          "
        </span>
        <p className="text-text-secondary text-sm leading-7 mt-4">
          It is a long established fact that a reader will be distracted by the readable content of
          a page a when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or less normal distribution of letters as opposed design by man
        </p>
        <div className="mt-4 flex items-center gap-3">
          <div className="w-8 h-0.5 bg-primary" />
          <span className="text-sm font-bold text-text-primary">Bret Lee</span>
        </div>
      </div>

      {/* Tags + Social */}
      <div
        data-aos="fade-up"
        className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-100"
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold text-text-primary">Tags:</span>
          {["CyberShield", "Technologies", "IT"].map((tag) => (
            <a
              key={tag}
              href="#"
              className="text-xs font-semibold border border-gray-200 text-text-secondary hover:border-primary hover:text-primary px-3 py-1 rounded-full transition-all duration-200"
            >
              {tag}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {[
            { label: "IG", href: "#", color: "hover:bg-primary" },
            { label: "LI", href: "#", color: "hover:bg-secondary" },
            { label: "TW", href: "#", color: "hover:bg-secondary" },
            { label: "FB", href: "#", color: "hover:bg-secondary-dark" },
          ].map(({ label, href, color }) => (
            <a
              key={label}
              href={href}
              className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold text-text-secondary ${color} hover:text-white hover:border-transparent transition-all duration-200`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}