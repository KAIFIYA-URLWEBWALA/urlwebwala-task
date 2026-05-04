export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#fff7f5] to-[#fdeee8] min-h-[90vh] flex items-center text-center overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full py-10 sm:py-16">

        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-light leading-[1.1]"
        >
          Revolutionize Your Mobile
        </h1>

        <h2
          data-aos="fade-up"
          data-aos-delay="240"
          className="text-[28px] sm:text-[34px] md:text-[44px] lg:text-[52px] font-bold mt-2"
        >
          with State Software
        </h2>

        {/* Orbit Section */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="relative mx-auto mt-12 sm:mt-16"
          style={{
            width: "min(260px, 72vw)",
            height: "min(260px, 72vw)",
            transform: "translateX(-8px)"
          }}
        >
          {/* Responsive sizes */}
          <style>{`
            @media (min-width: 640px)  { .orbit-box { width: 340px !important; height: 340px !important; } }
            @media (min-width: 768px)  { .orbit-box { width: 400px !important; height: 400px !important; } }
            @media (min-width: 1024px) { .orbit-box { width: 450px !important; height: 450px !important; } }
          `}</style>

          <div
            className="orbit-box relative w-full h-full translate-x-[-80px]" style={{
              width: "min(260px, 72vw)",
              height: "min(260px, 72vw)",
            }}
          >
            {/* Ring */}
            <div className="absolute inset-0 border border-[#ff5a2c]/40 rounded-full" />

            {/* ✅ PERFECT CENTER IMAGE */}
            <img
              src="/images/person.png"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] sm:w-[50%] object-contain z-10"
            />
            {/* Icon 1 — Top */}
            <div className="absolute inset-0 animate-orbit-cw-slow">
              <img
                src="/images/h-1.png"
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 sm:w-14 md:w-16 animate-orbit-ccw-slow"
              />
            </div>

            {/* Icon 2 — Right */}
            <div className="absolute inset-0 animate-orbit-ccw-medium">
              <img
                src="/images/h-2.png"
                className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-12 sm:w-14 md:w-16 animate-orbit-cw-medium"
              />
            </div>

            {/* Icon 3 — Bottom */}
            <div className="absolute inset-0 animate-orbit-cw-medium">
              <img
                src="/images/h-3.png"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 sm:w-14 md:w-16 animate-orbit-ccw-medium"
              />
            </div>

            {/* Icon 4 — Left */}
            <div className="absolute inset-0 animate-orbit-cw-fast">
              <img
                src="/images/h-5.png"
                className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 sm:w-14 md:w-16 animate-orbit-ccw-fast"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}