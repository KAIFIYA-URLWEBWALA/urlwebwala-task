/**
 * Stats.jsx — Counter Stats Section
 * Brand: Primary #E5093B | Light #FF4B6E | Dark #B3002D
 * Font: Poppins
 *
 * Counts up when section scrolls into view.
 */

import { useEffect, useRef, useState } from "react";

/* ── count-up hook ─────────────────────────────────────────── */
function useCountUp(target, duration = 2000, started = false, suffix = "") {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return val;
}

/* ── inView hook ───────────────────────────────────────────── */
function useInView(threshold = 0.3) {
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

/* ── single stat card ──────────────────────────────────────── */
function StatCard({ target, suffix, label, delay, started }) {
  const count = useCountUp(target, 2000, started);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? "linear-gradient(145deg, #B3002D, #E5093B)"
          : "linear-gradient(145deg, #E5093B, #FF4B6E)",
        borderRadius: "16px",
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: "1 1 200px",
        minWidth: "160px",
        maxWidth: "280px",
        cursor: "default",
        transform: hovered ? "translateY(-6px) scale(1.03)" : "translateY(0) scale(1)",
        boxShadow: hovered
          ? "0 20px 40px rgba(229,9,59,0.40)"
          : "0 8px 24px rgba(229,9,59,0.25)",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        opacity: started ? 1 : 0,
        marginTop: started ? "0" : "20px",
        transitionDelay: `${delay}ms`,
      }}
    >
      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(36px, 5vw, 52px)",
          fontWeight: 800,
          color: "#ffffff",
          lineHeight: 1.1,
          letterSpacing: "-1px",
        }}
      >
        {count}{suffix}
      </span>
      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(13px, 1.5vw, 15px)",
          fontWeight: 500,
          color: "rgba(255,255,255,0.90)",
          marginTop: "8px",
          textAlign: "center",
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ── main section ──────────────────────────────────────────── */
const stats = [
  { target: 220, suffix: "+",  label: "Wining Award"     },
  { target: 100, suffix: "K",  label: "Compete Project"  },
  { target: 330, suffix: "K+", label: "Clients Review"   },
  { target: 200, suffix: "+",  label: "Team Member"      },
];

export default function Stats() {
  const [sectionRef, inView] = useInView(0.3);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        style={{
          fontFamily: "'Poppins', sans-serif",
          background: "#f5f5f5",
          padding: "60px 24px",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {stats.map((s, i) => (
            <StatCard
              key={s.label}
              target={s.target}
              suffix={s.suffix}
              label={s.label}
              delay={i * 100}
              started={inView}
            />
          ))}
        </div>
      </section>
    </>
  );
}