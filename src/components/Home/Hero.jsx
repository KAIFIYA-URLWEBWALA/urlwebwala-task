import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#F8FAFF] via-[#FFE4EA] to-[#E6F0FF] min-h-[90vh] flex items-center text-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full py-10 sm:py-16">

        {/* Heading */}
        <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-light leading-[1.1]">
          Revolutionize Your Mobile
        </h1>

        <h2 className="text-[28px] sm:text-[34px] md:text-[44px] lg:text-[52px] font-bold mt-2">
          with State Software
        </h2>

        {/* Orbit Section */}
        <div
          className="relative mx-auto mt-14 sm:mt-20"
          style={{
            width: "min(360px, 85vw)",
            height: "min(360px, 85vw)",
          }}
        >
          {/* Responsive sizes */}
          <style>{`
            @media (min-width: 640px)  { .orbit-box { width: 420px !important; height: 420px !important; } }
            @media (min-width: 768px)  { .orbit-box { width: 520px !important; height: 520px !important; } }
            @media (min-width: 1024px) { .orbit-box { width: 600px !important; height: 600px !important; } }
          `}</style>

          <div className="orbit-box relative w-full h-full -translate-x-6 sm:-translate-x-10 md:-translate-x-16 lg:-translate-x-24">
            {/* 🔥 Gradient Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E5093B]/20 via-transparent to-[#0052FF]/20 blur-2xl"></div>

            {/* 🔴 Main Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#E5093B]/40 shadow-[0_0_40px_rgba(229,9,59,0.25)]"></div>

            {/* 🔵 Secondary Inner Ring */}
            <div className="absolute inset-[12%] rounded-full border border-[#0052FF]/30"></div>

            {/* Center Image */}
            <img
              src="/images/person.png"
              alt="center"
              className="absolute top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2 
              w-[55%] sm:w-[58%] md:w-[60%] 
              object-contain z-10"
            />

            {/* Icon 1 — Top */}
            <div className="absolute inset-0 animate-orbit-cw-slow">
              <img
                src="/images/h-1.png"
                className="absolute top-0 left-1/2 
                -translate-x-1/2 -translate-y-1/2 
                w-16 sm:w-20 md:w-24 lg:w-28 
                animate-orbit-ccw-slow"
              />
            </div>

            {/* Icon 2 — Right */}
            <div className="absolute inset-0 animate-orbit-ccw-medium">
              <img
                src="/images/h-2.png"
                className="absolute right-0 top-1/2 
                translate-x-1/2 -translate-y-1/2 
                w-16 sm:w-20 md:w-24 lg:w-28 
                animate-orbit-cw-medium"
              />
            </div>

            {/* Icon 3 — Bottom */}
            <div className="absolute inset-0 animate-orbit-cw-medium">
              <img
                src="/images/h-3.png"
                className="absolute bottom-0 left-1/2 
                -translate-x-1/2 translate-y-1/2 
                w-16 sm:w-20 md:w-24 lg:w-28 
                animate-orbit-ccw-medium"
              />
            </div>

            {/* Icon 4 — Left */}
            <div className="absolute inset-0 animate-orbit-cw-fast">
              <img
                src="/images/h-5.png"
                className="absolute left-0 top-1/2 
                -translate-x-1/2 -translate-y-1/2 
                w-16 sm:w-20 md:w-24 lg:w-28 
                animate-orbit-ccw-fast"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}