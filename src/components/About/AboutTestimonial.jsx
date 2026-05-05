/**
 * Testimonial.jsx — "Unlock The Potential Of Design Technology"
 * Brand: #E5093B | #FF4B6E | #B3002D | #0052FF | #0F172A
 * - 3 testimonials cycle on arrow click
 * - Slide animation between cards
 * - Free Unsplash images
 */

import { useState, useEffect, useRef } from "react";

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

/* ── Testimonial data ─────────────────────────────────────── */
const testimonials = [
  {
    name:   "James Anderson",
    role:   "Software Engineer",
    review: "Working with this company has been a game-the a changer for my business. Their expertise and innovat approa a helped us achiev remarkable Working with man loren ipsum text design",
    stars:  5,
    image:  "/about/testimonial-bg.png",
  },
  {
    name:   "Sarah Mitchell",
    role:   "Product Manager",
    review: "An exceptional team that truly understands client needs. They delivered our project on time with outstanding quality and communication throughout the entire process.",
    stars:  5,
    image:  "/about/testimonial-bg.png",
  },
  {
    name:   "David Chen",
    role:   "CTO, TechVentures",
    review: "The solutions they provided transformed our infrastructure completely. Their technical knowledge and professional approach exceeded every expectation we had set.",
    stars:  5,
    image:  "/about/testimonial-bg.png",
  },
];

/* ── Stars ────────────────────────────────────────────────── */
function Stars({ count }) {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24"
          fill={i < count ? "#E5093B" : "#e5e7eb"} stroke="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

/* ── Main ─────────────────────────────────────────────────── */
export default function AboutTestimonial() {
  const [sectionRef, inView] = useInView();
  const [current, setCurrent]   = useState(0);
  const [animKey, setAnimKey]   = useState(0);
  const [direction, setDirection] = useState("next"); // "next" | "prev"

  const next = testimonials[(current + 1) % testimonials.length];

  function goNext() {
    setDirection("next");
    setAnimKey(k => k + 1);
    setCurrent(c => (c + 1) % testimonials.length);
  }
  function goPrev() {
    setDirection("prev");
    setAnimKey(k => k + 1);
    setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  }

  const t = testimonials[current];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @keyframes slideInNext {
          from { opacity:0; transform: translateX(60px); }
          to   { opacity:1; transform: translateX(0); }
        }
        @keyframes slideInPrev {
          from { opacity:0; transform: translateX(-60px); }
          to   { opacity:1; transform: translateX(0); }
        }
        @keyframes fadeImgIn {
          from { opacity:0; transform: scale(1.04); }
          to   { opacity:1; transform: scale(1); }
        }
        .card-anim-next { animation: slideInNext 0.55s cubic-bezier(0.22,1,0.36,1) forwards; }
        .card-anim-prev { animation: slideInPrev 0.55s cubic-bezier(0.22,1,0.36,1) forwards; }
        .img-anim       { animation: fadeImgIn  0.65s cubic-bezier(0.22,1,0.36,1) forwards; }
        .nav-btn:hover  { background: linear-gradient(90deg,#E5093B,#FF4B6E) !important; color: #fff !important; }
        .nav-btn:hover svg { stroke: #fff !important; }
      `}</style>

      <section
        ref={sectionRef}
        style={{
          fontFamily: "'Poppins',sans-serif",
          background: "#ffffff",
          padding: "72px 24px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* ── TOP ROW: label+heading LEFT | preview text RIGHT ── */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "24px",
            marginBottom: "40px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}>

            {/* Left: label + heading */}
            <div style={{ flex: "1 1 300px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#E5093B">
                  <path d="M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5m7.43-2.92c.04-.36.07-.73.07-1.08s-.03-.73-.07-1.08l2.34-1.84a.503.503 0 00.12-.7l-2.21-3.84a.503.503 0 00-.61-.22l-2.76 1.11a8.14 8.14 0 00-1.86-1.08l-.42-2.93A.49.49 0 0014 2h-4c-.25 0-.46.18-.5.42l-.42 2.93c-.67.27-1.3.64-1.86 1.08L4.46 5.32a.49.49 0 00-.61.22L1.64 9.38a.49.49 0 00.12.7l2.34 1.84C4.07 12.27 4 12.63 4 13s.03.73.07 1.08l-2.34 1.84a.49.49 0 00-.12.7l2.21 3.84c.12.22.39.3.61.22l2.76-1.11c.56.44 1.19.81 1.86 1.08l.42 2.93c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.42-2.93a8.14 8.14 0 001.86-1.08l2.76 1.11c.22.08.49 0 .61-.22l2.21-3.84a.49.49 0 00-.12-.7l-2.34-1.84z"/>
                </svg>
                <span style={{ color: "#E5093B", fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em" }}>
                  Clients Testimonial
                </span>
              </div>
              <h2 style={{
                fontSize: "clamp(26px,3vw,38px)",
                fontWeight: 700,
                color: "#0F172A",
                lineHeight: 1.25,
                margin: 0,
              }}>
                Unlock The Potential<br />
                Of Design{" "}
                <span style={{
                  background: "linear-gradient(90deg,#E5093B,#FF4B6E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Technology
                </span>
              </h2>
            </div>

            {/* Right: next testimonial preview text */}
            <div style={{
              flex: "0 1 340px",
              paddingTop: "4px",
            }}>
              <p style={{
                fontSize: "14px",
                color: "#6b7280",
                lineHeight: 1.75,
                margin: 0,
              }}>
                {next.review.slice(0, 110)}…
              </p>
            </div>
          </div>

          {/* ── MAIN: image LEFT + card RIGHT ── */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0",
            alignItems: "flex-end",
            position: "relative",
          }}>

            {/* Large image */}
            <div style={{
              flex: "1 1 340px",
              minWidth: "280px",
              maxWidth: "620px",
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "4/3",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.8s ease 200ms, transform 0.8s ease 200ms",
            }}>
              <img
                key={`img-${animKey}`}
                src={t.image}
                alt={t.name}
                className="img-anim"
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
              />
            </div>

            {/* Testimonial card — overlaps image on right */}
            <div
              key={animKey}
              className={direction === "next" ? "card-anim-next" : "card-anim-prev"}
              style={{
                flex: "0 0 auto",
                width: "clamp(280px, 42%, 440px)",
                marginLeft: "clamp(-60px, -6%, -30px)",
                marginBottom: "16px",
                background: "#ffffff",
                borderRadius: "16px",
                padding: "28px 28px 24px",
                boxShadow: "0 12px 48px rgba(0,0,0,0.13)",
                position: "relative",
                zIndex: 10,
              }}
            >
              {/* Name + quote mark row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "17px", color: "#0F172A", margin: 0 }}>{t.name}</p>
                  <p style={{ fontSize: "13px", color: "#6b7280", margin: "2px 0 0" }}>{t.role}</p>
                </div>
                {/* Large 99 quote mark */}
                <span style={{
                  fontSize: "52px",
                  fontWeight: 900,
                  lineHeight: 1,
                  background: "linear-gradient(135deg,#E5093B,#FF4B6E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Georgia, serif",
                  userSelect: "none",
                }}>
                  "
                </span>
              </div>

              {/* Review text */}
              <p style={{
                fontSize: "14px",
                color: "#374151",
                lineHeight: 1.75,
                margin: "0 0 18px",
              }}>
                {t.review}
              </p>

              {/* Stars + nav arrows */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Stars count={t.stars} />

                <div style={{ display: "flex", gap: "10px" }}>
                  {/* Prev */}
                  <button
                    onClick={goPrev}
                    className="nav-btn"
                    style={{
                      width: "38px", height: "38px",
                      borderRadius: "50%",
                      border: "1.5px solid #E5093B",
                      background: "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                      stroke="#E5093B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"/>
                      <polyline points="12 19 5 12 12 5"/>
                    </svg>
                  </button>
                  {/* Next */}
                  <button
                    onClick={goNext}
                    className="nav-btn"
                    style={{
                      width: "38px", height: "38px",
                      borderRadius: "50%",
                      border: "1.5px solid #E5093B",
                      background: "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                      stroke="#E5093B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Dot indicators */}
              <div style={{ display: "flex", gap: "6px", marginTop: "14px", justifyContent: "center" }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? "next" : "prev"); setAnimKey(k => k+1); setCurrent(i); }}
                    style={{
                      width: i === current ? "22px" : "8px",
                      height: "8px",
                      borderRadius: "4px",
                      border: "none",
                      cursor: "pointer",
                      background: i === current
                        ? "linear-gradient(90deg,#E5093B,#FF4B6E)"
                        : "#e5e7eb",
                      transition: "all 0.3s ease",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}