export default function WhyChoose() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-20 flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">

      {/* Content — same text + layout */}
      <div data-aos="fade-right" className="max-w-lg text-center lg:text-left">

        <p className="text-[#ff5a2c] font-medium mb-3">Why Choose Us</p>

        <h2 className="text-[26px] sm:text-[30px] md:text-[38px] leading-[1.2] font-bold mb-4">
          Accelerate Your Online Presence
        </h2>

        <p className="text-gray-500 leading-7 mb-6 text-sm sm:text-base">
          Et purus duis sollicitudin dignissim habitant.
        </p>

        <div className="space-y-4">
          {["Powering Your Digital Success", "Connect Convert Conquer"].map((item) => (
            <div key={item} className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-[#ff5a2c]/10 text-[#ff5a2c] text-xs">
                ✓
              </span>
              <p className="text-sm sm:text-base">{item}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Image — same bg + rounded style, just responsive width */}
      <div data-aos="fade-left" data-aos-delay="200" className="bg-[#f3ede7] p-6 sm:p-8 rounded-[24px] shadow-sm flex-shrink-0">
        <img
          src="/images/marketing_consulting.png"
          className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:w-[380px]"
        />
      </div>

    </section>
  );
}
