/**
 * CuttingEdge.jsx — "Stay Ahead With Cutting-Edge Technology"
 * Images: Unsplash (free, no copyright, no attribution required)
 * Brand Colors: #E5093B | #FF4B6E | #B3002D | #0052FF | #3BA3FF
 */

import { useEffect, useRef, useState } from "react";

/* ── Free image URLs (Unsplash — 100% copyright-free) ──────── */
const BG_IMAGE =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80&fit=crop";
  // Dark space/tech background

const DIAMOND_IMAGE =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&fit=crop";
  // Two people working on laptop in office

/* ── InView hook ───────────────────────────────────────────── */
function useInView(threshold = 0.2) {
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

/* ── Service Card ──────────────────────────────────────────── */
function ServiceCard({ icon, title, description, fromLeft, delay }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    if (cardRef.current) obs.observe(cardRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: "12px",
        padding: "24px 28px",
        backgroundColor: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(6px)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0)"
          : fromLeft ? "translateX(-120px)" : "translateX(120px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: "48px", height: "48px",
            borderRadius: "10px",
            border: "1.5px solid rgba(229,9,59,0.55)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
            backgroundColor: "rgba(229,9,59,0.08)",
          }}
        >
          {icon}
        </div>
        <h3 style={{
          fontFamily: "'Poppins',sans-serif",
          fontSize: "clamp(15px,1.6vw,18px)",
          fontWeight: 700, color: "#ffffff", margin: 0,
        }}>
          {title}
        </h3>
      </div>
      <p style={{
        fontFamily: "'Poppins',sans-serif",
        fontSize: "13.5px",
        color: "rgba(255,255,255,0.60)",
        lineHeight: 1.75, margin: 0,
      }}>
        {description}
      </p>
    </div>
  );
}

/* ── Read More — fill bottom to top ───────────────────────── */
function ReadMoreBtn() {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "13px 32px",
        borderRadius: "50px",
        border: "2px solid #E5093B",
        fontFamily: "'Poppins',sans-serif",
        fontWeight: 600, fontSize: "14px",
        color: "#ffffff",
        textDecoration: "none",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: hovered ? "0 8px 28px rgba(229,9,59,0.45)" : "none",
        transition: "box-shadow 0.3s ease",
        zIndex: 0,
      }}
    >
      {/* fill layer — bottom to top */}
      <span style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(90deg,#E5093B,#FF4B6E)",
        transform: hovered ? "translateY(0%)" : "translateY(101%)",
        transition: "transform 0.42s cubic-bezier(0.22,1,0.36,1)",
        zIndex: -1,
      }} />
      READ MORE
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"/>
        <polyline points="12 5 19 12 12 19"/>
      </svg>
    </a>
  );
}

/* ── Main ──────────────────────────────────────────────────── */
export default function CuttingEdge() {
  const [sectionRef, inView] = useInView(0.15);

  const cards = [
    {
      fromLeft: true, delay: 120,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="#E5093B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="6" width="18" height="12" rx="2"/>
          <line x1="23" y1="11" x2="23" y2="13"/>
          <line x1="7" y1="10" x2="7" y2="14"/>
          <line x1="11" y1="8" x2="11" y2="16"/>
        </svg>
      ),
      title: "CloudConnect IT Services",
      description: "IT Solution is a broad category that encompass the solutions aimed at solving problems or improving",
    },
    {
      fromLeft: false, delay: 260,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="#E5093B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      ),
      title: "Network Infrastructure Solutions",
      description: "IT Solution is a broad category that encompass the solutions aimed at solving problems or improving",
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @keyframes floatDot {
          0%,100% { transform:translateY(0); }
          50%      { transform:translateY(-10px); }
        }
      `}</style>

      <section
        ref={sectionRef}
        style={{
          fontFamily: "'Poppins',sans-serif",
          position: "relative",
          overflow: "hidden",
          padding: "80px 24px",
          width: "100%",
        }}
      >
        {/* ── Full BG image with dark overlay ── */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `url("${BG_IMAGE}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}/>
        {/* Dark overlay so text is readable */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(135deg, rgba(10,15,30,0.94) 0%, rgba(13,21,41,0.88) 60%, rgba(17,24,39,0.80) 100%)",
        }}/>

        {/* Decorative rings — left edge */}
        {[300, 200].map((r, i) => (
          <div key={i} style={{
            position: "absolute", left: `${-r * 0.55}px`, top: "50%",
            transform: "translateY(-50%)",
            width: `${r}px`, height: `${r}px`,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.05)",
            pointerEvents: "none", zIndex: 2,
          }}/>
        ))}

        {/* ── Content ── */}
        <div style={{
          position: "relative", zIndex: 3,
          maxWidth: "1200px", margin: "0 auto",
          display: "flex", flexWrap: "wrap",
          gap: "48px", alignItems: "center",
        }}>

          {/* LEFT */}
          <div style={{ flex: "1 1 380px", minWidth: "280px", display: "flex", flexDirection: "column", gap: "24px" }}>

            {/* Heading */}
            <h2 style={{
              fontSize: "clamp(26px,3.2vw,42px)",
              fontWeight: 700, color: "#ffffff",
              lineHeight: 1.25, margin: 0,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(-28px)",
              transition: "opacity 0.7s ease 0ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0ms",
            }}>
              Stay Ahead With
              <br/>
              Cutting-Edge{" "}
              <span style={{
                background: "linear-gradient(90deg,#E5093B,#FF4B6E)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                Technology
              </span>
            </h2>

            {/* Cards + dashed connector */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              <ServiceCard {...cards[0]} />

              {/* Dashed curved SVG connector */}
              <div style={{ position: "relative", height: "68px" }}>
                <svg viewBox="0 0 300 68" style={{
                  position: "absolute", right: 0, top: 0,
                  width: "56%", height: "100%",
                  opacity: inView ? 1 : 0,
                  transition: "opacity 0.8s ease 450ms",
                }} fill="none">
                  <path d="M 0 8 Q 150 75 300 58"
                    stroke="#E5093B" strokeWidth="2"
                    strokeDasharray="6 6" strokeLinecap="round"/>
                  <circle cx="155" cy="50" r="5" fill="#E5093B"/>
                  <circle cx="235" cy="56" r="4" fill="#3BA3FF"/>
                </svg>
              </div>

              <ServiceCard {...cards[1]} />
            </div>

            {/* Decorative dots */}
            <div style={{
              display: "flex", gap: "6px", alignItems: "center",
              opacity: inView ? 1 : 0,
              transition: "opacity 0.7s ease 520ms",
            }}>
              {[
                { size: 10, bg: "linear-gradient(135deg,#E5093B,#FF4B6E)" },
                { size: 7,  bg: "#3BA3FF" },
                { size: 5,  bg: "rgba(255,255,255,0.3)" },
              ].map((d, i) => (
                <span key={i} style={{
                  width: d.size, height: d.size,
                  borderRadius: "50%", background: d.bg, display: "block",
                }}/>
              ))}
            </div>

            {/* Read More */}
            <div style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 580ms, transform 0.7s ease 580ms",
            }}>
              <ReadMoreBtn/>
            </div>
          </div>

          {/* RIGHT — Diamond image */}
          <div style={{
            flex: "1 1 340px", minWidth: "280px",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0) scale(1)" : "translateX(60px) scale(0.94)",
            transition: "opacity 0.8s ease 200ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) 200ms",
          }}>
            <div style={{
              position: "relative",
              width: "clamp(280px,38vw,460px)",
              aspectRatio: "1/1",
            }}>
              {/* Outer diamond border */}
              <div style={{
                position: "absolute", inset: 0,
                transform: "rotate(45deg)",
                border: "2px solid rgba(229,9,59,0.35)",
                borderRadius: "8px",
              }}/>

              {/* Image clipped to diamond */}
              <div style={{
                position: "absolute", inset: "8%",
                transform: "rotate(45deg)",
                borderRadius: "8px", overflow: "hidden",
                backgroundColor: "#1a2035",
              }}>
                <img
                  src={DIAMOND_IMAGE}
                  alt="IT team working"
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover",
                    transform: "rotate(-45deg) scale(1.5)",
                    transformOrigin: "center",
                  }}
                />
                {/* Red diagonal stripe */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg,transparent 38%,rgba(229,9,59,0.60) 38%,rgba(179,0,45,0.55) 54%,transparent 54%)",
                  pointerEvents: "none",
                }}/>
              </div>

              {/* Floating blue glow dot */}
              <div style={{
                position: "absolute", right: "-12px", top: "55%",
                width: "22px", height: "22px",
                borderRadius: "50%",
                background: "linear-gradient(135deg,#3BA3FF,#0052FF)",
                boxShadow: "0 0 18px rgba(59,163,255,0.75)",
                animation: "floatDot 3s ease-in-out infinite",
              }}/>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}