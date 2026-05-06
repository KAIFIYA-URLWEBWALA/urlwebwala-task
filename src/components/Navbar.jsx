import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

const pagesDropdown = [
  { name: "Service Details", path: "/service-details" },
  { name: "Blog Details",    path: "/blog-details" },
  { name: "Pricing",         path: "/pricing" },
];

export default function Navbar() {
  const [open, setOpen]           = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [mPagesOpen, setMPagesOpen] = useState(false);
  const navigate  = useNavigate();
  const dropdownRef = useRef(null);

  const links = [
    { name: "Home",     path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs",    path: "/blogs" },
    { name: "Contact",  path: "/contact" },
  ];

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setPagesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      {/* ✅ Fixed Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-16 py-4">

          {/* Logo */}
          <img
            src="/images/image.png"
            alt="Logo"
            className="h-8 md:h-10 w-auto cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-8 text-gray-700 text-sm items-center">
            {links.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive ? "text-[#E5093B] font-semibold" : "hover:text-[#E5093B]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Pages Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setPagesOpen((p) => !p)}
                className={`flex items-center gap-1 transition-colors duration-200 ${
                  pagesOpen ? "text-[#E5093B] font-semibold" : "hover:text-[#E5093B]"
                }`}
              >
                Pages
                <FiChevronDown
                  className={`transition-transform duration-300 ${pagesOpen ? "rotate-180" : ""}`}
                  size={14}
                />
              </button>

              {/* Dropdown Panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 origin-top ${
                  pagesOpen
                    ? "opacity-100 scale-y-100 pointer-events-auto"
                    : "opacity-0 scale-y-95 pointer-events-none"
                }`}
              >
                {/* Red top bar */}
                <div className="h-0.5 w-full bg-gradient-to-r from-[#E5093B] to-[#FF4B6E]" />

                {pagesDropdown.map((item, i) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setPagesOpen(false)}
                    className={({ isActive }) =>
                      `block px-5 py-3 text-sm font-medium transition-all duration-200 border-b border-gray-50 last:border-0 ${
                        isActive
                          ? "text-[#E5093B] bg-red-50 font-semibold"
                          : "text-gray-700 hover:text-[#E5093B] hover:bg-red-50 hover:pl-7"
                      }`
                    }
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </nav>

          {/* Right Buttons */}
          <div className="hidden lg:flex gap-4">
            <button className="border border-[#E5093B] text-[#E5093B] px-5 py-2 rounded-full text-sm hover:bg-[#E5093B] hover:text-white transition-all duration-200">
              Login
            </button>
            <button className="bg-[#E5093B] text-white px-5 py-2 rounded-full text-sm shadow-md hover:-translate-y-[1px] hover:shadow-lg transition-all duration-200">
              Sign Up
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setOpen(!open)}
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`h-[2px] bg-current transition-all ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`h-[2px] bg-current transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`h-[2px] bg-current transition-all ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 sm:px-6 pb-4 space-y-1 text-gray-700 bg-white border-t border-gray-100">

            {links.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-sm ${
                    isActive ? "text-[#E5093B] font-semibold" : "hover:text-[#E5093B]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile Pages Accordion */}
            <div>
              <button
                onClick={() => setMPagesOpen((p) => !p)}
                className="flex items-center justify-between w-full py-2 text-sm text-gray-700 hover:text-[#E5093B]"
              >
                <span className={mPagesOpen ? "text-[#E5093B] font-semibold" : ""}>
                  Pages
                </span>
                <FiChevronDown
                  className={`transition-transform duration-300 ${mPagesOpen ? "rotate-180 text-[#E5093B]" : ""}`}
                  size={14}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mPagesOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 border-l-2 border-[#E5093B]/30 ml-1 space-y-1 pb-1">
                  {pagesDropdown.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={() => { setOpen(false); setMPagesOpen(false); }}
                      className={({ isActive }) =>
                        `block py-1.5 text-sm ${
                          isActive ? "text-[#E5093B] font-semibold" : "text-gray-600 hover:text-[#E5093B]"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-3">
              <button className="border border-[#E5093B] text-[#E5093B] px-4 py-2 rounded-full w-full text-sm hover:bg-[#E5093B] hover:text-white transition-all">
                Login
              </button>
              <button className="bg-[#E5093B] text-white px-4 py-2 rounded-full w-full text-sm hover:bg-[#B3002D] transition-all">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ Spacer */}
      <div className="h-[80px]" />
    </>
  );
}