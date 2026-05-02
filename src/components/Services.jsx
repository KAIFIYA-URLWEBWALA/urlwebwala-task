export default function Services() {
  const services = [
    {
      icon: "/images/chat.svg",
      title: "App Development",
      desc: "We build scalable and secure mobile applications.",
    },
    {
      icon: "/images/content.svg",
      title: "UI/UX Design",
      desc: "Creating modern and user-friendly designs.",
    },
    {
      icon: "/images/search.svg",
      title: "Digital Marketing",
      desc: "Grow your business with smart marketing strategies.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-20">

      {/* Heading — same text, fixed responsive sizes */}
      <div className="text-center mb-12" data-aos="fade-up">
        <p className="text-[#ff5a2c] font-medium mb-2">
          Our Services
        </p>

        <h2 className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[38px] font-bold leading-[1.2]">
          We Provide Best Quality Services
        </h2>
      </div>

      {/* Cards — same card design, just responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={100 + index * 150}
            className="bg-white rounded-[24px] p-6 sm:p-8 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
          >

            {/* Icon — same circle design */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-[#ff5a2c]/10 mb-5 sm:mb-6 group-hover:bg-[#ff5a2c] transition-all duration-300">
              <img
                src={item.icon}
                alt={item.title}
                className="w-7 sm:w-8 group-hover:invert transition-all duration-300"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-6">
              {item.desc}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}
