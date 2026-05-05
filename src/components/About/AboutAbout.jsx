import { useEffect, useRef, useState } from "react";

/* ── helpers ──────────────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

const BRAND = "#E5093B";
const TEXT = "#0F172A";

const points = [
  "Cloud Connect IT Services desi",
  "Cyber Shield Technologies here",
  "Digital Transfor Solutions our te",
  "IT Consulting and Support",
];

/* ── Read More Button (FIXED) ─────────────────────────────────── */
function ReadMoreBtn({ anim }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={anim(500)} className="mt-3">
      <a
        href="#"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border border-[#E5093B] overflow-hidden transition-all duration-300"
        style={{
          color: hovered ? "white" : "#E5093B",
          background: "white",
        }}
      >
        {/* 🔥 Fill Animation Layer */}
        <span
          className="absolute left-0 bottom-0 w-full"
          style={{
            height: hovered ? "100%" : "0%",
            background: "linear-gradient(180deg, #E5093B, #FF4B6E)",
            transition: "height 0.45s cubic-bezier(0.22,1,0.36,1)",
            zIndex: 0,
          }}
        />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          Read More
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={hovered ? "white" : "#E5093B"}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </a>
    </div>
  );
}

/* ── MAIN COMPONENT ───────────────────────────────────────────── */
export default function AboutAbout() {
  const [sectionRef, inView] = useInView();

  const anim = (delay = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(32px)",
    transition: `opacity .65s ease ${delay}ms, transform .65s cubic-bezier(.22,1,.36,1) ${delay}ms`,
  });

  return (
    <section
      ref={sectionRef}
      style={{ background: "#fff", overflow: "hidden" }}
      className="w-full py-16 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">

        {/* LEFT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5">

          <h2 style={{ ...anim(80), color: TEXT }} className="text-3xl font-bold">
            Empower Your Business With IT{" "}
            <span style={{ color: BRAND }}>Solutions</span>
          </h2>

          <p style={{ ...anim(160), color: "#6b7280" }}>
            IT Solution is a broad category that encompasses various technological
            solutions aimed at solving problems.
          </p>

          {/* Points */}
          <ul className="flex flex-col gap-3">
            {points.map((pt, i) => (
              <li
                key={i}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(-20px)",
                  transition: `all .5s ease ${300 + i * 80}ms`,
                }}
              >
                ✔ {pt}
              </li>
            ))}
          </ul>

          {/* ✅ Read More Button FIXED USAGE */}
          <ReadMoreBtn anim={anim} />
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/about/about-us-img.png"
            alt="about"
            className="max-w-sm w-full"
          />
        </div>
      </div>
    </section>
  );
}