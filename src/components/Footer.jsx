export default function Footer() {
  const links = {
    Company:  ["About Us", "Services", "Projects", "Careers", "Contact"],
    Services: ["App Development", "UI/UX Design", "Digital Marketing", "Cloud Solutions", "Cyber Security"],
    Support:  ["Help Center", "Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">

          {/* Brand column */}
          <div data-aos="fade-up">
            <img src="/images/footer-logo.svg" alt="Sobtech" className="h-8 mb-5 brightness-200" />
            <p className="text-sm leading-7 text-gray-400 mb-6">
              We build world-class digital products that help businesses grow and thrive in the modern era.
            </p>
            <div className="flex gap-3">
              {["/images/image (7).svg", "/images/image (8).svg", "/images/image (9).svg"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff5a2c] transition-all duration-200"
                >
                  <img src={icon} alt="" className="w-4 invert" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items], i) => (
            <div key={heading} data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
              <h4 className="text-white font-semibold mb-5">{heading}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-[#ff5a2c] transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Sobtech. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#ff5a2c] transition-colors duration-200">Privacy</a>
            <a href="#" className="hover:text-[#ff5a2c] transition-colors duration-200">Terms</a>
            <a href="#" className="hover:text-[#ff5a2c] transition-colors duration-200">Cookies</a>
          </div>
        </div>
      </div>

    </footer>
  );
}