import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import PricingHero       from "./PricingHero";
import PricingCards      from "./PricingCards";
import PricingNewsletter from "./PricingNewsletter";

export default function Pricing() {
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
      {/* Hero */}
      <PricingHero />

      {/* Pricing Cards */}
      <PricingCards />

      {/* Newsletter */}
      <PricingNewsletter />
    </div>
  );
}