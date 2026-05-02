export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-20 flex flex-col lg:flex-row items-center gap-10 sm:gap-12">

      {/* Image — same bg + rounded style, just responsive width */}
      <div data-aos="fade-right" className="bg-[#f3ede7] p-6 sm:p-8 rounded-[24px] shadow-sm flex-shrink-0">
        <img
          src="/images/about-img.png"
          className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:w-[380px]"
        />
      </div>

      {/* Content — same text, same layout */}
      <div data-aos="fade-left" data-aos-delay="150" className="max-w-md text-center lg:text-left">

        <p className="text-[#ff5a2c] font-medium mb-2">Know About Us</p>

        <h2 className="text-[26px] sm:text-[30px] md:text-[36px] font-bold leading-[1.2] mb-4">
          The Future of Mobile Software
        </h2>

        <p className="text-gray-500 leading-7 text-sm mb-6">
          Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis.
        </p>

        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3 justify-center lg:justify-start">
            <span className="text-[#ff5a2c] mt-0.5">✔</span>
            <p>Et purus duis sollicitudin dignissim</p>
          </div>

          <div className="flex items-start gap-3 justify-center lg:justify-start">
            <span className="text-[#ff5a2c] mt-0.5">✔</span>
            <p>Venenatis cras sed eu massa</p>
          </div>
        </div>

      </div>
    </section>
  );
}
