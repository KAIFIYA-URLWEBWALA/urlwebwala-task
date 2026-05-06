import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ContactHero     from "./ContactHero";
import ContactForm     from "./ContactForm";
import ContactMap      from "./ContactMap";
import ContactPartners from "./ContactPartners";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background-light">
      {/* 1. Dark hero banner */}
      <ContactHero />

      {/* 2. Form + contact info */}
      <ContactForm />

      {/* 3. Google map */}
      <ContactMap />

      {/* 4. Partners / logos strip */}
      <ContactPartners />
    </div>
  );
}