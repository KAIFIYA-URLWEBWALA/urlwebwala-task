export default function WhyChoose() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-20 flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16 overflow-hidden">

      {/* CONTENT */}
      <div
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-offset="200"
        data-aos-once="false"
        className="max-w-lg text-center lg:text-left"
      >

        <p className="text-[#E5093B] font-medium mb-3">
          Why Choose Us
        </p>

        <h2 className="text-[26px] sm:text-[30px] md:text-[38px] leading-[1.2] font-bold mb-4">
          Accelerate Your Online Presence
        </h2>

        <p className="text-gray-500 leading-7 mb-6 text-sm sm:text-base">
          Et purus duis sollicitudin dignissim habitant.
        </p>

        {/* POINTS */}
        <div className="space-y-4">
          {[
            "Powering Your Digital Success",
            "Connect Convert Conquer"
          ].map((item, index) => (
            <div
              key={item}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-once="false"
              className="flex items-center gap-3 justify-center lg:justify-start group"
            >
              <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-[#E5093B]/10 text-[#E5093B] text-xs transition group-hover:bg-[#E5093B] group-hover:text-white">
                ✓
              </span>
              <p className="text-sm sm:text-base transition group-hover:translate-x-1">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* IMAGE */}
      <div
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="800"
        data-aos-once="false"
        className="bg-[#f3ede7] p-6 sm:p-8 rounded-[24px] shadow-sm flex-shrink-0 hover:shadow-md transition duration-300"
      >

        <img
          src="/images/marketing_consulting.png"
          className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:w-[380px] animate-float"
        />

      </div>

    </section>
  );
}