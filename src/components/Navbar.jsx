import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">

            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-16 py-4">

                {/* Logo */}
                <img
                    src="/images/logo.svg"
                    alt="Sobtech Logo"
                    className="h-8 md:h-10 w-auto"
                />

                {/* Desktop Menu */}
                <nav className="hidden lg:flex gap-8 text-gray-700 text-sm">
                    {["Home", "About Us", "Services", "Projects", "Blogs", "Pages", "Contact"].map((item) => (
                        <a key={item} href="#" className="hover:text-[#ff5a2c] transition-colors duration-200">
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Buttons */}
                <div className="hidden lg:flex gap-4">
                    <button className="border border-[#ff5a2c] px-5 py-2 rounded-full text-sm hover:bg-[#ff5a2c] hover:text-white transition-all duration-200">
                        Login
                    </button>
                    <button className="bg-[#ff5a2c] text-white px-5 py-2 rounded-full text-sm shadow-md hover:-translate-y-[1px] hover:shadow-lg transition-all duration-200">
                        Sign Up
                    </button>
                </div>

                {/* Mobile Toggle — animated hamburger */}
                <button
                    className="lg:hidden p-2 text-gray-700"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <div className="w-5 flex flex-col gap-[5px]">
                        <span className={`block h-[2px] bg-current transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
                        <span className={`block h-[2px] bg-current transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
                        <span className={`block h-[2px] bg-current transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu — same structure as original, just smoother */}
            <div className={`lg:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-4 sm:px-6 pb-4 space-y-3 text-gray-700 bg-white border-t border-gray-100">
                    {["Home", "About Us", "Services", "Projects", "Blogs", "Pages", "Contact"].map((item) => (
                        <p key={item} className="py-1 hover:text-[#ff5a2c] transition-colors duration-200 cursor-pointer">
                            {item}
                        </p>
                    ))}

                    <div className="flex gap-3 pt-3">
                        <button className="border border-[#ff5a2c] text-[#ff5a2c] px-4 py-2 rounded-full w-full text-sm hover:bg-[#ff5a2c] hover:text-white transition-all duration-200">
                            Login
                        </button>
                        <button className="bg-[#ff5a2c] text-white px-4 py-2 rounded-full w-full text-sm hover:bg-[#e84e24] transition-all duration-200">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
