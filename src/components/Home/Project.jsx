import { useEffect, useRef } from "react";

export default function Project() {
  const scrollRef = useRef();
  let autoScrollInterval;

  const projects = [
    {
      img: "/images/project-1.png",
      title: "App Launcher",
      subtitle: "Software Develop",
    },
    {
      img: "/images/project-2.png",
      title: "Marketing Strategy",
      subtitle: "Digital Growth",
    },
    {
      img: "/images/project-3.png",
      title: "UI Design",
      subtitle: "Creative Agency",
    },
    {
      img: "/images/project-4.png",
      title: "Startup Branding",
      subtitle: "Business Idea",
    },
  ];

  const loopProjects = [...projects, ...projects];

  // AUTO SCROLL
  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    autoScrollInterval = setInterval(() => {
      scrollAmount += 0.5;

      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }

      container.scrollLeft = scrollAmount;
    }, 10);

    return () => clearInterval(autoScrollInterval);
  }, []);

  const scroll = (dir) => {
    clearInterval(autoScrollInterval);

    const container = scrollRef.current;

    container.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">

      {/* Dark BG */}
      <div className="absolute top-0 left-0 w-full h-[55%] bg-[#0F172A] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">

          <div data-aos="fade-up">
            <p className="text-[#E5093B] font-medium mb-2">
              Recent Projects
            </p>

            <h2 className="text-white text-[26px] sm:text-[30px] md:text-[38px] font-bold leading-[1.2]">
              Reach New Heights with <br /> Digital Marketing
            </h2>
          </div>

          {/* Arrows */}
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border border-[#E5093B] text-[#E5093B] rounded-full hover:bg-[#E5093B] hover:text-white transition"
            >
              ←
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 border border-[#E5093B] text-[#E5093B] rounded-full hover:bg-[#E5093B] hover:text-white transition"
            >
              →
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 overflow-x-hidden"
        >
          {loopProjects.map((item, i) => (
            <div
              key={i}
              className="group relative min-w-[260px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[360px] rounded-[20px] overflow-hidden"
            >

              {/* IMAGE */}
              <img
                src={item.img}
                className="w-full h-[320px] sm:h-[360px] md:h-[400px] object-cover"
              />

              {/* HOVER OVERLAY */}
              <div className="
                absolute inset-0 
                bg-black/40 
                translate-x-[-100%] 
                group-hover:translate-x-0 
                transition-transform duration-500 ease-in-out
                flex items-end
              ">

                {/* CONTENT */}
                <div className="w-full p-4 sm:p-5 bg-white/95 backdrop-blur-sm rounded-tr-[20px]">

                  <h3 className="font-semibold text-sm sm:text-base">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-xs sm:text-sm">
                    {item.subtitle}
                  </p>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}