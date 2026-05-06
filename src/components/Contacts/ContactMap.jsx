import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactMap() {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  return (
    <section data-aos="fade-up" className="w-full h-72 sm:h-80 md:h-96 overflow-hidden">
      <iframe
        title="Company Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(20%)" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}