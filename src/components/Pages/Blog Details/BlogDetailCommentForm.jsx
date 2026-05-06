import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiSend } from "react-icons/fi";

export default function BlogDetailCommentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    option: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 750, once: true });
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submission
  };

  const inputBase =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-text-secondary placeholder:text-gray-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 bg-background-light";

  return (
    <section className="mt-12" data-aos="fade-up">
      <h2 className="text-xl font-extrabold text-text-primary mb-6">
        Leave A{" "}
        <span className="relative inline-block">
          comment
          <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary rounded-full" />
        </span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="60">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={inputBase}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={inputBase}
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className={inputBase}
          />
          <div className="relative">
            <select
              name="option"
              value={form.option}
              onChange={handleChange}
              className={`${inputBase} appearance-none cursor-pointer`}
            >
              <option value="" disabled>
                Choose a Option
              </option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <div data-aos="fade-up" data-aos-delay="140">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message here..."
            rows={5}
            className={`${inputBase} resize-none`}
          />
        </div>

        {/* Submit */}
        <div data-aos="fade-up" data-aos-delay="180">
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 group"
          >
            SUBMIT NOW
            <FiSend className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </form>
    </section>
  );
}