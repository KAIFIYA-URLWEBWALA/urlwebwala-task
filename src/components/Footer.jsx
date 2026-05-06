import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [hovered, setHovered] = useState(null);

  const quickLinks = [
    { label: "About Us",        path: "/about" },
    { label: "Services",        path: "/services" },
    { label: "Contact Us",      path: "/contact" },
    { label: "Blog Post",       path: "/blogs" },
    { label: "Team Members",    path: "/about" },
    { label: "Service Details", path: "/service-details" },
    { label: "Pricing",         path: "/pricing" },
  ];

  const contactItems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#E5093B]">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
        </svg>
      ),
      label: "Address", value: "66 Broklyant. New India",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#E5093B]">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
        </svg>
      ),
      label: "Phone Number", value: "012 345 678 9101",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#E5093B]">
          <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      label: "Email", value: "abcd@gmail.com",
    },
  ];

  const socials = [
    { label: "Facebook", href: "#", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
    { label: "X",        href: "#", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.25 2.25h6.832l4.258 5.629 5.904-5.629zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
    { label: "LinkedIn", href: "#", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
    { label: "Pinterest",href: "#", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.76 1.22-5.17 1.22-5.17s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.58 2.26-.87 3.51-.25 1.05.52 1.9 1.55 1.9 1.86 0 3.11-2.4 3.11-5.24 0-2.16-1.46-3.77-4.1-3.77-2.99 0-4.86 2.23-4.86 4.73 0 .86.25 1.46.64 1.93.18.22.2.3.14.55-.05.18-.15.62-.19.79-.06.25-.25.34-.46.25-1.3-.53-1.9-1.96-1.9-3.56 0-2.65 2.24-5.84 6.7-5.84 3.59 0 5.97 2.6 5.97 5.4 0 3.71-2.07 6.49-5.12 6.49-1.03 0-2-.55-2.33-1.18l-.65 2.48c-.23.88-.86 1.98-1.29 2.65.97.3 2 .46 3.07.46 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg> },
  ];

  const bottomLinks = [
    { label: "Terms & Condition", path: "/" },
    { label: "Privacy Policy",    path: "/" },
    { label: "Contact Us",        path: "/contact" },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <footer style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#141c2e", position: "relative", overflow: "hidden" }}>

        {/* Decorative rings */}
        <div className="absolute right-0 top-0 h-full pointer-events-none" style={{ width: "320px", opacity: 0.08 }}>
          {[260, 200, 140, 80].map((r, i) => (
            <div key={i} className="absolute rounded-full border border-white"
              style={{ width: r*2, height: r*2, top: "50%", right: -r, transform: "translateY(-50%)" }} />
          ))}
        </div>

        {/* Main grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* Col 1 — Brand */}
            <div>
              <div className="mb-3">
                <div className="bg-white rounded-lg p-2 shadow-sm inline-block">
                  <img src="/images/image.png" alt="Logo" className="w-10 h-10 object-contain" />
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#9aa0b0" }}>
                Financial planners help people to gain<br />knowledge about technology.
              </p>
              <p className="text-white text-sm font-medium mb-3">Follow Us</p>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label}
                    className="flex items-center justify-center rounded-md"
                    style={{
                      width: "36px", height: "36px",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: hovered === s.label ? "#E5093B" : "#9aa0b0",
                      backgroundColor: hovered === s.label ? "rgba(229,9,59,0.12)" : "rgba(255,255,255,0.04)",
                      transform: hovered === s.label ? "translateY(-2px)" : "none",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={() => setHovered(s.label)}
                    onMouseLeave={() => setHovered(null)}
                  >{s.icon}</a>
                ))}
              </div>
            </div>

            {/* Col 2 — Quick Links using NavLink */}
            <div>
              <h4 className="text-white font-semibold text-base mb-5">Quick links</h4>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.label} className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-200"
                      style={{ backgroundColor: hovered === link.label ? "#E5093B" : "#6b7280" }}
                    />
                    <NavLink
                      to={link.path}
                      onMouseEnter={() => setHovered(link.label)}
                      onMouseLeave={() => setHovered(null)}
                      style={({ isActive }) => ({
                        fontSize: "14px",
                        display: "inline-block",
                        color: isActive ? "#E5093B" : hovered === link.label ? "#E5093B" : "#9aa0b0",
                        fontWeight: isActive ? "600" : "400",
                        transform: hovered === link.label ? "translateX(4px)" : "translateX(0)",
                        transition: "all 0.2s ease",
                      })}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Contact */}
            <div>
              <h4 className="text-white font-semibold text-base mb-5">Contact</h4>
              <ul className="flex flex-col gap-5">
                {contactItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    {item.icon}
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: "#9aa0b0" }}>{item.label}</p>
                      <p className="text-sm font-semibold text-white">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Newsletter */}
            <div>
              <h4 className="text-white font-semibold text-base mb-5">Newsletter</h4>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#9aa0b0" }}>
                Subscribe to get latest IT solutions, updates and tech insights.
              </p>
              <div className="flex items-center rounded-lg overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(255,255,255,0.04)" }}>
                <input type="email" placeholder="Your email address" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent text-sm px-4 py-3 focus:outline-none"
                  style={{ color: "#fff", fontFamily: "'Poppins', sans-serif" }} />
                <button className="flex items-center justify-center w-10 h-10 m-1 rounded-lg flex-shrink-0 transition-all duration-200 hover:brightness-110 active:scale-95"
                  style={{ backgroundColor: "#E5093B" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs" style={{ color: "#9aa0b0" }}>© Sobtech 2024 | All Rights Reserved</p>
            <div className="flex items-center gap-5">
              {bottomLinks.map((link) => (
                <NavLink key={link.label} to={link.path}
                  onMouseEnter={() => setHovered(`b-${link.label}`)}
                  onMouseLeave={() => setHovered(null)}
                  style={({ isActive }) => ({
                    fontSize: "12px",
                    color: isActive || hovered === `b-${link.label}` ? "#E5093B" : "#9aa0b0",
                    transition: "color 0.2s ease",
                  })}
                >{link.label}</NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll to top */}
        <a href="#top" className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-1 active:scale-95"
          style={{ backgroundColor: "#E5093B" }} aria-label="Scroll to top">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
        </a>
      </footer>
    </>
  );
}