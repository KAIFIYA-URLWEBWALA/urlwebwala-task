import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowRight } from "react-icons/fi";

/* ── Inline SVG illustrations (copyright-free, hand-drawn style) ── */
const LightbulbSVG = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto">
    <circle cx="40" cy="32" r="18" fill="#FCD34D" opacity="0.9" />
    <rect x="33" y="50" width="14" height="4" rx="2" fill="#F59E0B" />
    <rect x="35" y="55" width="10" height="4" rx="2" fill="#F59E0B" />
    <rect x="37" y="60" width="6" height="3" rx="1.5" fill="#F59E0B" />
    <line x1="40" y1="10" x2="40" y2="6" stroke="#FCD34D" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="55" y1="15" x2="58" y2="12" stroke="#FCD34D" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="62" y1="30" x2="66" y2="30" stroke="#FCD34D" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="25" y1="15" x2="22" y2="12" stroke="#FCD34D" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="18" y1="30" x2="14" y2="30" stroke="#FCD34D" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="40" cy="32" r="10" fill="#FDE68A" opacity="0.6" />
  </svg>
);

const DocumentSVG = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto">
    <rect x="18" y="12" width="34" height="44" rx="4" fill="#BFDBFE" />
    <rect x="24" y="22" width="22" height="3" rx="1.5" fill="#3B82F6" />
    <rect x="24" y="30" width="16" height="3" rx="1.5" fill="#3B82F6" opacity="0.6" />
    <rect x="24" y="38" width="20" height="3" rx="1.5" fill="#3B82F6" opacity="0.6" />
    <rect x="24" y="46" width="12" height="3" rx="1.5" fill="#3B82F6" opacity="0.4" />
    <circle cx="54" cy="50" r="12" fill="#E5093B" opacity="0.15" />
    <path d="M48 50 L54 44 L60 50" stroke="#E5093B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M54 44 L54 56" stroke="#E5093B" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PiechartSVG = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto">
    <circle cx="36" cy="40" r="20" fill="#BFDBFE" />
    <path d="M36 40 L36 20 A20 20 0 0 1 56 40 Z" fill="#3B82F6" />
    <path d="M36 40 L56 40 A20 20 0 0 1 36 60 Z" fill="#E5093B" opacity="0.8" />
    <circle cx="54" cy="28" r="10" fill="#FDE68A" opacity="0.9" />
    <path d="M50 28 L53 31 L58 25" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RocketSVG = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto">
    <path d="M40 16 C40 16 52 24 52 40 L52 52 L40 58 L28 52 L28 40 C28 24 40 16 40 16Z" fill="#BFDBFE" />
    <circle cx="40" cy="38" r="6" fill="#3B82F6" />
    <path d="M28 48 L20 54 L26 46" fill="#E5093B" opacity="0.7" />
    <path d="M52 48 L60 54 L54 46" fill="#E5093B" opacity="0.7" />
    <path d="M36 58 L34 66 L40 62 L46 66 L44 58" fill="#FCD34D" />
  </svg>
);

const StarSVG = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto">
    <polygon points="40,14 45,30 62,30 49,40 54,56 40,46 26,56 31,40 18,30 35,30" fill="#FCD34D" opacity="0.9"/>
    <circle cx="56" cy="20" r="8" fill="#BFDBFE" opacity="0.8" />
    <path d="M52 20 L55 23 L60 17" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DiamondSVG = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto">
    <polygon points="40,12 62,30 40,68 18,30" fill="#BFDBFE" />
    <polygon points="40,12 62,30 40,36 18,30" fill="#3B82F6" opacity="0.7" />
    <polygon points="40,36 62,30 40,68" fill="#E5093B" opacity="0.25" />
    <polygon points="40,36 18,30 40,68" fill="#E5093B" opacity="0.15" />
  </svg>
);

const features = [
  "Mistakes To Avoid",
  "Your Startup",
  "Knew About Fonts",
  "Winning Metric for Your Startup",
];

const plans = [
  { name: "Consult",       period: "month", price: "$50", Icon: LightbulbSVG, yellow: false },
  { name: "Basic",         period: "month", price: "$45", Icon: DocumentSVG,  yellow: true  },
  { name: "Premium",       period: "month", price: "$52", Icon: PiechartSVG,  yellow: false },
  { name: "Stander",       period: "month", price: "$36", Icon: RocketSVG,    yellow: false },
  { name: "best deal",     period: "month", price: "$75", Icon: StarSVG,      yellow: true  },
  { name: "Super Premium", period: "month", price: "$90", Icon: DiamondSVG,   yellow: false },
];

export default function PricingCards() {
  useEffect(() => {
    AOS.init({ duration: 750, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

      {/* Section heading */}
      <div className="text-center mb-12" data-aos="fade-up">
        <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Our Plans</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
          Choose Your <span className="text-primary">Pricing Plan</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto mt-4" />
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            data-aos="fade-up"
            data-aos-delay={i * 80}
            className={`
              relative group rounded-2xl border p-8 flex flex-col items-center text-center
              transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
              ${plan.yellow
                ? "border-yellow-200 bg-[#fdf8f0]"
                : "border-gray-200 bg-white hover:bg-[#fdf8f0] hover:border-yellow-200"
              }
            `}
          >
            {/* Plan name */}
            <h3 className="text-xl font-extrabold text-text-primary mb-1">{plan.name}</h3>
            <p className="text-sm text-gray-400 font-medium mb-3">{plan.period}</p>

            {/* Price */}
            <div className="mb-5">
              <span className="text-4xl font-black text-text-primary">{plan.price}</span>
            </div>

            {/* Illustration */}
            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
              <plan.Icon />
            </div>

            {/* Feature list */}
            <ul className="space-y-2.5 w-full mb-8">
              {features.map((f) => (
                <li key={f} className="text-sm text-text-secondary py-1 border-b border-gray-100 last:border-0">
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full border-2 border-text-primary text-text-primary font-bold text-sm transition-all duration-300 group/btn hover:border-primary hover:text-primary hover:bg-primary/5"
            >
              Read More
              <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}