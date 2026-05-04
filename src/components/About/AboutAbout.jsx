/**
 * About.jsx — "Empower Your Business" About Section
 * Brand Colors: Primary #E5093B | Accent #0052FF | Text #0F172A
 *
 * Drop-in images needed:
 *   /images/about-video-thumb.png  → office/laptop photo (left thumbnail)
 *   /images/about-person.png       → woman with laptop (right side, cut-out PNG)
 */

import { useEffect, useRef, useState } from "react";

/* ── helpers ──────────────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

const BRAND   = "#E5093B";
const BRAND_D = "#B3002D";
const ACCENT  = "#0052FF";
const TEXT    = "#0F172A";

const points = [
  "Cloud Connect IT Services desi",
  "Cyber Shield Technologies here",
  "Digital Transfor Solutions our te",
  "IT Consulting and Support",
];

/* ── Hexagon SVG clipPath ─────────────────────────────────────── */
const HEX_ID = "hexClip";
function HexDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <clipPath id={HEX_ID} clipPathUnits="objectBoundingBox">
          {/* regular hexagon (flat-top orientation) */}
          <polygon points="0.5,0 1,0.25 1,0.75 0.5,1 0,0.75 0,0.25" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function AboutAbout() {
  const [sectionRef, inView] = useInView();
  const [playing, setPlaying]   = useState(false);

  /* staggered fade-up helper */
  const anim = (delay = 0) => ({
    opacity:   inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(32px)",
    transition: `opacity .65s ease ${delay}ms, transform .65s cubic-bezier(.22,1,.36,1) ${delay}ms`,
  });

  return (
    <>
      <HexDefs />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        style={{ fontFamily: "'Poppins',sans-serif", background: "#fff", overflow: "hidden" }}
        className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14 lg:gap-10">

          {/* ══════════════ LEFT ══════════════ */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5">

            {/* Label */}
            <div style={anim(0)} className="flex items-center gap-2">
              {/* gear icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill={BRAND}>
                <path d="M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5m7.43-2.92c.04-.36.07-.73.07-1.08s-.03-.73-.07-1.08l2.34-1.84c.21-.16.27-.46.12-.7l-2.21-3.84a.503.503 0 00-.61-.22l-2.76 1.11a8.14 8.14 0 00-1.86-1.08l-.42-2.93A.49.49 0 0014 2h-4c-.25 0-.46.18-.5.42l-.42 2.93c-.67.27-1.3.64-1.86 1.08L4.46 5.32a.49.49 0 00-.61.22L1.64 9.38a.49.49 0 00.12.7l2.34 1.84C4.07 12.27 4 12.63 4 13s.03.73.07 1.08l-2.34 1.84a.49.49 0 00-.12.7l2.21 3.84c.12.22.39.3.61.22l2.76-1.11c.56.44 1.19.81 1.86 1.08l.42 2.93c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.42-2.93a8.14 8.14 0 001.86-1.08l2.76 1.11c.22.08.49 0 .61-.22l2.21-3.84a.49.49 0 00-.12-.7l-2.34-1.84z"/>
              </svg>
              <span style={{ color: BRAND }} className="font-semibold text-sm tracking-wide">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{ ...anim(80), color: TEXT, lineHeight: 1.2 }}
              className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold"
            >
              Empower Your Business With IT
              <br />
              Most The{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${BRAND}, #FF4B6E)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Solutions
              </span>
            </h2>

            {/* Description */}
            <p style={{ ...anim(160), color: "#6b7280" }} className="text-sm sm:text-base leading-relaxed max-w-lg">
              IT Solution is a broad category that encompasses various technological
              solutions aimed at solving problems or improving efficiency in the field of
              information technology the best it design in the field
            </p>

            {/* Video thumb + bullet points row */}
            <div style={anim(240)} className="flex flex-col sm:flex-row gap-6 items-start mt-1">

              {/* Video thumbnail */}
              <div
                className="relative flex-shrink-0 rounded-xl overflow-hidden cursor-pointer group"
                style={{ width: "200px", minWidth: "180px", height: "130px" }}
                onClick={() => setPlaying(true)}
              >
                <img
                  src="/about/about-video-thumb.png"
                  alt="office"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* dark overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition duration-300" />
                {/* play button */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${BRAND}, #FF4B6E)` }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="flex flex-col gap-3 pt-1">
                {points.map((pt, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm"
                    style={{
                      color: TEXT,
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateX(0)" : "translateX(-20px)",
                      transition: `opacity .5s ease ${300 + i * 80}ms, transform .5s ease ${300 + i * 80}ms`,
                    }}
                  >
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg, ${BRAND}, #FF4B6E)` }}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Read More button */}
            <div style={anim(500)} className="mt-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white text-sm font-semibold shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
                style={{ background: `linear-gradient(90deg, ${BRAND}, #FF4B6E)` }}
              >
                Read More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>

          {/* ══════════════ RIGHT ══════════════ */}
          <div
            className="w-full lg:w-1/2 flex items-center justify-center relative"
            style={{
              opacity:   inView ? 1 : 0,
              transform: inView ? "translateX(0) scale(1)" : "translateX(50px) scale(0.96)",
              transition: "opacity .8s ease 200ms, transform .8s cubic-bezier(.22,1,.36,1) 200ms",
              minHeight: "420px",
            }}
          >
            {/* Decorative hexagons — top right */}
            <div className="absolute top-0 right-4 flex flex-col gap-2 items-end z-0 pointer-events-none">
              <div className="w-8 h-8 rounded-sm bg-gray-300/60" style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }} />
              <div className="w-12 h-12 rounded-sm" style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)", background: "rgba(229,9,59,0.18)" }} />
              <div className="w-7 h-7 rounded-sm" style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)", background: "rgba(229,9,59,0.12)" }} />
            </div>

            {/* Big background hexagon */}
            <div
              className="relative"
              style={{
                width:  "clamp(300px, 44vw, 480px)",
                height: "clamp(300px, 44vw, 480px)",
              }}
            >
              {/* Outer hex — light peach tint using brand gradient */}
              <div
                className="absolute"
                style={{
                  inset: 0,
                  clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
                  background: "linear-gradient(160deg, rgba(229,9,59,0.10) 0%, rgba(255,75,110,0.18) 100%)",
                }}
              />
              {/* Inner hex — stronger */}
              <div
                className="absolute"
                style={{
                  inset: "12%",
                  clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
                  background: "linear-gradient(160deg, rgba(229,9,59,0.22) 0%, rgba(255,75,110,0.32) 100%)",
                }}
              />

              {/* White diagonal stripe */}
              <div
                className="absolute"
                style={{
                  inset: "12%",
                  clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-20%", left: "30%",
                    width: "30%", height: "140%",
                    background: "rgba(255,255,255,0.22)",
                    transform: "rotate(-20deg)",
                  }}
                />
              </div>

              {/* Person image */}
              <img
                src="/about/about-us-img.png"
                alt="woman with laptop"
                className="absolute z-10"
                style={{
                  bottom: 0,
                  left:   "50%",
                  transform: "translateX(-50%)",
                  height: "95%",
                  width:  "auto",
                  objectFit: "contain",
                  objectPosition: "bottom",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}