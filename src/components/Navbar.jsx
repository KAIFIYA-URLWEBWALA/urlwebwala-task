import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "Pages", path: "/pages" },
    { name: "Contact", path: "/contact" },
  ];

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
          <nav className="hidden lg:flex gap-8 text-gray-700 text-sm">
            {links.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive
                      ? "text-[#E5093B] font-semibold"
                      : "hover:text-[#E5093B]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Buttons */}
          <div className="hidden lg:flex gap-4">
            <button className="border border-[#E5093B] px-5 py-2 rounded-full text-sm hover:bg-[#E5093B] hover:text-white transition-all duration-200">
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
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-4 sm:px-6 pb-4 space-y-3 text-gray-700 bg-white border-t border-gray-100">

            {links.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-1 ${
                    isActive
                      ? "text-[#E5093B] font-semibold"
                      : "hover:text-[#E5093B]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="flex gap-3 pt-3">
              <button className="border border-[#E5093B] text-[#E5093B] px-4 py-2 rounded-full w-full text-sm hover:bg-[#E5093B] hover:text-white">
                Login
              </button>
              <button className="bg-[#E5093B] text-white px-4 py-2 rounded-full w-full text-sm hover:bg-[#B3002D]">
                Sign Up
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ✅ Spacer (VERY IMPORTANT) */}
      <div className="h-[80px]"></div>
    </>
  );
}