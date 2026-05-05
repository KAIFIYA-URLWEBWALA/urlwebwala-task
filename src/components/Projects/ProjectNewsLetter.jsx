/**
 * Newsletter.jsx — "Subscribe To Our News Letter"
 * Brand: #E5093B | #FF4B6E | #B3002D | #0F172A
 * Free image from Unsplash (no copyright)
 */

import { useState, useRef, useEffect } from "react";

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

/* Free Unsplash image — two colleagues working on laptop */
const NEWSLETTER_IMG =
"/about/cta-right.png"
export default function ProjectNewsLetter() {
  const [sectionRef, inView] = useInView(0.2);
  const [email, setEmail]     = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim()) { setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); setEmail(""); }
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @keyframes floatArrow {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes dotPulse {
          0%,100% { opacity: 0.3; transform: scale(1); }
          50%      { opacity: 0.7; transform: scale(1.3); }
        }
        .nl-input::placeholder { color: rgba(255,255,255,0.40); }
        .nl-input:focus { outline: none; border-color: #E5093B !important; }
      `}</style>

      {/* Outer wrapper — white page bg, card sits inside */}
      <section
        style={{
          fontFamily: "'Poppins',sans-serif",
          background: "#f9fafb",
          padding: "60px 24px",
          width: "100%",
        }}
      >
        {/* ── The dark rounded card ── */}
        <div
          ref={sectionRef}
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            borderRadius: "20px",
            overflow: "hidden",
            background: "#141c2e",
            display: "flex",
            flexWrap: "wrap",
            position: "relative",
            minHeight: "290px",
            boxShadow: "0 24px 64px rgba(0,0,0,0.22)",
          }}
        >

          {/* ── LEFT: text + form ── */}
          <div
            style={{
              flex: "1 1 380px",
              padding: "52px 48px 52px 52px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "18px",
              position: "relative",
              zIndex: 2,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-50px)",
              transition: "opacity 0.75s ease 100ms, transform 0.75s cubic-bezier(0.22,1,0.36,1) 100ms",
            }}
          >
            {/* Decorative dots — left side */}
            <div style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "6px" }}>
              {[0, 1, 2, 3, 4].map(i => (
                <div key={i} style={{
                  width: "4px", height: "4px", borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.25)",
                  animation: `dotPulse 2s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }} />
              ))}
            </div>

            {/* Heading */}
            <h2 style={{
              fontSize: "clamp(22px, 2.8vw, 34px)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.25,
              margin: 0,
            }}>
              Subscribe To Our{" "}
              <span style={{
                background: "linear-gradient(90deg, #E5093B, #FF4B6E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                News Letter
              </span>
            </h2>

            {/* Description */}
            <p style={{
              fontSize: "13.5px",
              color: "rgba(255,255,255,0.60)",
              lineHeight: 1.75,
              margin: 0,
              maxWidth: "400px",
            }}>
              It is a long established fact that a reader will be distracted by the
              readable content of a page at its layout.
            </p>

            {/* Email form */}
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", marginTop: "4px" }}
            >
              <input
                type="email"
                className="nl-input"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{
                  flex: "1 1 200px",
                  padding: "14px 20px",
                  borderRadius: "50px",
                  border: "1.5px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.07)",
                  color: "#ffffff",
                  fontSize: "13.5px",
                  fontFamily: "'Poppins',sans-serif",
                  transition: "border-color 0.25s ease",
                }}
              />
              <button
                type="submit"
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
                style={{
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 28px",
                  borderRadius: "50px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Poppins',sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#ffffff",
                  overflow: "hidden",
                  background: submitted
                    ? "linear-gradient(90deg,#16a34a,#22c55e)"
                    : "linear-gradient(90deg,#E5093B,#FF4B6E)",
                  transform: btnHovered ? "translateY(-2px)" : "translateY(0)",
                  boxShadow: btnHovered
                    ? "0 8px 24px rgba(229,9,59,0.50)"
                    : "0 4px 14px rgba(229,9,59,0.30)",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {submitted ? "✓ Subscribed!" : "SUBSCRIBE NOW"}
                {!submitted && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                )}
              </button>
            </form>
          </div>

          {/* ── CENTER: floating arrow decorators ── */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            zIndex: 3,
            pointerEvents: "none",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.8s ease 400ms",
          }}>
            {[0, 1].map(i => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="#E5093B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                style={{
                  animation: `floatArrow 2s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            ))}
          </div>

          {/* ── RIGHT: image with red diagonal stripe ── */}
          <div
            style={{
              flex: "1 1 300px",
              minWidth: "260px",
              position: "relative",
              overflow: "hidden",
              minHeight: "290px",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0) scale(1)" : "translateX(60px) scale(0.97)",
              transition: "opacity 0.8s ease 200ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) 200ms",
            }}
          >
            <img
              src={NEWSLETTER_IMG}
              alt="team working"
              style={{
                width: "100%", height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />
            {/* Red diagonal stripe overlay — matches screenshot */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, #141c2e 0%, #141c2e 15%, rgba(229,9,59,0.75) 15%, rgba(179,0,45,0.70) 30%, transparent 30%)",
              pointerEvents: "none",
            }} />
            {/* Bottom dark fade */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              height: "40%",
              background: "linear-gradient(to top, rgba(20,28,46,0.5), transparent)",
              pointerEvents: "none",
            }} />
          </div>

        </div>
      </section>
    </>
  );
}