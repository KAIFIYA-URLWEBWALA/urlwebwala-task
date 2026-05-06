import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiCheckCircle } from "react-icons/fi";
import { HiDeviceMobile, HiDocumentText } from "react-icons/hi";

const serviceCards = [
  {
    icon: <HiDeviceMobile size={28} className="text-white" />,
    title: "Digital Transformation & Manage IT",
    desc: "IT Solution is a broad category that encompasses various technological solutions. IT Solution is a broad category that encompasses various technological solutions IT Solution is a broad.",
  },
  {
    icon: <HiDocumentText size={28} className="text-white" />,
    title: "Cyber Shield Technologies IT Project Services",
    desc: "IT Solution is a broad category that encompasses various technological solutions. IT Solution is a broad category that encompasses various technological solutions IT Solution is a broad.",
  },
];

const checkItems = [
  "Stay ahead with cutting-edge technology your business with IT Solutions",
  "Enhance your business performance with technology",
  "Empower your business with IT Solutions Unlock the potential of technology",
];

export default function ServiceDetailContent() {
  useEffect(() => {
    AOS.init({ duration: 750, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <article className="flex-1 min-w-0">

      {/* ── Full-width featured image ── */}
      <div
        data-aos="fade-up"
        className="w-full rounded-2xl overflow-hidden mb-8 shadow-md"
      >
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80"
          alt="IT Team Working"
          className="w-full h-64 sm:h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* ── Title ── */}
      <h1
        data-aos="fade-up"
        data-aos-delay="60"
        className="text-2xl sm:text-3xl font-extrabold text-text-primary leading-tight mb-4"
      >
        Powering Your Mobile Experience
      </h1>

      {/* ── Description ── */}
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-text-secondary text-sm leading-7 mb-8"
      >
        Aliquam eros justo, posuere loborti viverra laoree ullamcorper posuere viverra. Aliquam
        eros justo, posuere lobortis viverra laoret augue mattis fmentum ullamcorper laoret
        Aliquam eros justo, posuere loborti viverra laoret matti ullamcorper posuere viverr suere lrt.
      </p>

      {/* ── Service Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        {serviceCards.map((card, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="group p-6 border border-gray-100 rounded-2xl hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 bg-white"
          >
            {/* Icon box */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-primary/30">
              {card.icon}
            </div>
            <h3 className="text-base font-bold text-text-primary mb-2 leading-snug">
              {card.title}
            </h3>
            <p className="text-sm text-text-secondary leading-6">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* ── Dual Images ── */}
      <div
        data-aos="fade-up"
        data-aos-delay="80"
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
      >
        <div className="rounded-xl overflow-hidden shadow-sm group">
          <img
            src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80"
            alt="IT Setup"
            className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="rounded-xl overflow-hidden shadow-sm group">
          <img
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80"
            alt="Team Meeting"
            className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* ── Checklist ── */}
      <ul className="space-y-3 mb-6">
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

      {/* ── Closing paragraph ── */}
      <p
        data-aos="fade-up"
        className="text-text-secondary text-sm leading-7"
      >
        It is a long established fact that a reader will be distracted by the readable content of
        a page when looking at its a layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution.
      </p>
    </article>
  );
}