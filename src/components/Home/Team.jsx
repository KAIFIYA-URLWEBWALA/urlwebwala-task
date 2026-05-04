import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Team() {

  const team = [
    { name: "Bessie Cooper", img: "/images/1.png" },
    { name: "Fahad Hossain", img: "/images/2.png" },
    { name: "Sakib Sami", img: "/images/3.png" },
    { name: "Javed Mukta", img: "/images/4.png" },
  ];

  const [progress, setProgress] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const updated = prev.map((p) => (p < 100 ? p + 2 : 100));
        if (updated.every((p) => p === 100)) clearInterval(interval);
        return updated;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-[#f8f8f8]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">

        {/* Heading */}
        <div data-aos="fade-up" className="mb-12">
          <p className="text-[#E5093B] font-medium mb-2">Our Team</p>

          <h2 className="text-[26px] sm:text-[30px] md:text-[38px] font-bold leading-[1.2]">
            Unleash the Power of the <br /> Digital Advertising
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {team.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="group relative bg-white rounded-[22px] overflow-hidden 
              shadow-sm hover:shadow-[0_25px_80px_rgba(0,0,0,0.15)]
              transition-all duration-500 flex"
            >

              {/* LEFT */}
              <div className="p-5 md:p-6 text-left flex-1 z-10">

                <h3 className="font-semibold text-lg mb-4">
                  {item.name}
                </h3>

                {/* Progress */}
                <p className="text-sm text-gray-500">Mentor</p>
                <div className="w-full h-[4px] bg-gray-200 rounded-full mt-1 mb-3">
                  <div
                    className="h-full bg-[#E5093B] rounded-full transition-all duration-500"
                    style={{ width: `${progress[i]}%` }}
                  ></div>
                </div>

                <p className="text-sm text-gray-500">Designer</p>
                <div className="w-full h-[4px] bg-gray-200 rounded-full mt-1 mb-4">
                  <div
                    className="h-full bg-[#E5093B] rounded-full transition-all duration-500"
                    style={{ width: `${Math.max(progress[i] - 15, 0)}%` }}
                  ></div>
                </div>

              </div>

              {/* IMAGE SECTION */}
              <div className="relative w-[50%] md:w-[55%] overflow-hidden">

                {/* IMAGE */}
                <img
                  src={item.img}
                  className="w-full h-[260px] md:h-[280px] object-cover 
                  transition duration-700 
                  group-hover:scale-110 group-hover:rotate-1"
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* SOCIAL ICONS (SLIDE UP) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 
                flex gap-3 opacity-0 translate-y-6 
                group-hover:opacity-100 group-hover:translate-y-0 
                transition-all duration-500">

                  {[FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                    <div
                      key={idx}
                      className="w-8 h-8 flex items-center justify-center 
                      bg-white text-[#E5093B] rounded-full 
                      hover:bg-[#E5093B] hover:text-white 
                      transition duration-300 cursor-pointer hover:scale-110"
                    >
                      <Icon size={12} />
                    </div>
                  ))}

                </div>

              </div>

              {/* GLOW BORDER */}
              <div className="absolute inset-0 rounded-[22px] border border-transparent 
              group-hover:border-[#E5093B]/40 transition duration-500"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}