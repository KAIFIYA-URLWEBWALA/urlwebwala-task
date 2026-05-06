import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiMail, FiPhone, FiMapPin, FiArrowRight, FiStar } from "react-icons/fi";

const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: "Company@mail.com",
    href: "mailto:Company@mail.com",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: <FiPhone size={20} />,
    label: "Phone",
    value: "012 345 678 9101",
    href: "tel:0123456789101",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: "4517 Washington Ave. Manchester, Kentucky 39495",
    href: "#map",
    color: "bg-primary/10 text-primary",
  },
];

const inputBase =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-text-secondary placeholder:text-gray-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 bg-background-light";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { AOS.init({ duration: 750, once: true, easing: "ease-out-cubic" }); }, []);

  const handle = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      {/* Section label + heading */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-12">
        <div data-aos="fade-right">
          <p className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
            <FiStar className="text-primary" />
            Contact Us_
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">Get In Touch</h2>
        </div>
        <p data-aos="fade-left" className="text-text-secondary text-sm leading-7 max-w-xs lg:text-right">
          IT Solution is a broad category that encompasses various technological solutions.
        </p>
      </div>

      {/* Two-column: form left, info right */}
      <div className="flex flex-col lg:flex-row gap-12">

        {/* ── Form ── */}
        <div data-aos="fade-right" data-aos-delay="80" className="flex-1 min-w-0">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="name" value={form.name} onChange={handle}
                  placeholder="Your Name" className={inputBase} />
                <input type="email" name="email" value={form.email} onChange={handle}
                  placeholder="Your Email" className={inputBase} />
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="tel" name="phone" value={form.phone} onChange={handle}
                  placeholder="Phone Number" className={inputBase} />
                <input type="text" name="subject" value={form.subject} onChange={handle}
                  placeholder="Subject" className={inputBase} />
              </div>
              {/* Textarea */}
              <textarea name="message" value={form.message} onChange={handle}
                placeholder="Message here..." rows={6}
                className={`${inputBase} resize-none`} />
              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                {submitted ? "✓ Message Sent!" : "SUBMIT NOW"}
                {!submitted && (
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* ── Contact Info ── */}
        <div
          data-aos="fade-left"
          data-aos-delay="120"
          className="lg:w-72 xl:w-80 flex-shrink-0 flex flex-col gap-5 justify-start"
        >
          {contactInfo.map(({ icon, label, value, href, color }, i) => (
            <a
              key={label}
              href={href}
              data-aos="fade-left"
              data-aos-delay={120 + i * 80}
              className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-primary/20 hover:shadow-md transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${color} group-hover:scale-110 transition-transform duration-300`}>
                {icon}
              </div>
              {/* Text */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
                <p className="text-sm font-semibold text-text-primary leading-snug">{value}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}