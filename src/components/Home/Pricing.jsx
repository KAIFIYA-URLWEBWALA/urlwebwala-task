export default function Pricing() {
  const plans = [
    {
      title: "Basic",
      price: "$29",
      img: "/images/pricing-1.png",
      active: false,
    },
    {
      title: "Consult",
      price: "$29",
      img: "/images/pricing-2.png",
      active: true,
    },
    {
      title: "Premium",
      price: "$29",
      img: "/images/pricing-3.png",
      active: false,
    },
  ];

  const features = [
    "Mistakes To Avoid",
    "Your Startup",
    "Knew About Fonts",
    "Your Startup",
    "Knew About Fonts",
  ];

  return (
    <section className="bg-[#f8f8f8] py-16 sm:py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">

        {/* Heading */}
        <p
          data-aos="fade-up"
          data-aos-once="false"
          className="text-[#E5093B] font-medium mb-2"
        >
          Our Pricing
        </p>

        <h2
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-once="false"
          className="text-[26px] sm:text-[30px] md:text-[38px] font-bold leading-[1.2] mb-12 sm:mb-14"
        >
          Drive Growth Through Digital <br /> the and Marketing
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {plans.map((plan, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              data-aos-duration="800"
              data-aos-once="false"
              className={`group rounded-[24px] p-6 sm:p-8 bg-white transition-all duration-500
              ${plan.active
                ? "shadow-xl scale-[1.04] z-10"
                : "shadow-sm hover:shadow-[0_15px_50px_rgba(0,0,0,0.1)] hover:-translate-y-3"
              }`}
            >

              {/* Top */}
              <div className="flex justify-between items-center mb-5 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {plan.title}
                </h3>

                <p className="text-base sm:text-lg font-semibold">
                  {plan.price}
                  <span className="text-xs sm:text-sm text-gray-400"> /month</span>
                </p>
              </div>

              {/* Image */}
              <div className="mb-5 sm:mb-6 flex justify-center">
                <img
                  src={plan.img}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain animate-float"
                />
              </div>

              <hr className="mb-5 sm:mb-6 border-gray-200" />

              {/* Features */}
              <ul className="space-y-3 text-left mb-6 sm:mb-8">
                {features.map((f, idx) => (
                  <li
                    key={idx}
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                    data-aos-once="false"
                    className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm group"
                  >
                    <span className="w-4 h-4 bg-[#0F172A] rounded-full flex items-center justify-center text-white text-[10px] transition group-hover:bg-[#E5093B]">
                      ✓
                    </span>

                    <span className="transition group-hover:translate-x-1">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-2.5 sm:py-3 rounded-full text-xs sm:text-sm transition-all duration-300
                ${plan.active
                  ? "bg-[#E5093B] text-white hover:opacity-90"
                  : "border border-[#E5093B] text-[#E5093B] hover:bg-[#E5093B] hover:text-white hover:shadow-md"
                }`}
              >
                Start now →
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}