import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#F8FAFF] via-[#FFE4EA] to-[#E6F0FF] min-h-[90vh] flex items-center text-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full py-10 sm:py-16">

        {/* Heading */}
        <h1
          data-aos="fade-down"
          className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-light leading-[1.1]"
        >
          Revolutionize Your Mobile
        </h1>
        <h2
          data-aos="fade-down"
          data-aos-delay="100"
          className="text-[28px] sm:text-[34px] md:text-[44px] lg:text-[52px] font-bold mt-2"
        >
          with State Software
        </h2>

        {/* Orbit */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex items-center justify-center mt-10 sm:mt-14"
        >
          {/* Clipping container */}
          <div
            className="relative overflow-hidden"
            style={{
              width: "clamp(280px, 75vw, 580px)",
              height: "clamp(200px, 45vw, 360px)",
            }}
          >
            {/* Full circle */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                width: "100%",
                height: "clamp(280px, 75vw, 580px)",
                top: "32%",
              }}
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E5093B]/20 via-transparent to-[#0052FF]/20 blur-2xl" />

              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#E5093B]/40 shadow-[0_0_40px_rgba(229,9,59,0.25)]" />

              {/* Inner ring */}
              <div className="absolute inset-[12%] rounded-full border border-[#0052FF]/30" />

              {/* Person */}
              <img
                src="/images/person.png"
                alt="center"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100%] w-[58%] object-contain z-10"
              />
                            {/* Icons */}
              <div className="absolute inset-0 animate-spin-slow">
                <img
                  src="/images/h-1.png"
                  alt=""
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[18%]"
                />
              </div>

              <div className="absolute inset-0 animate-spin-medium">
                <img
                  src="/images/h-2.png"
                  alt=""
                  className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-[18%]"
                />
              </div>

              <div className="absolute inset-0 animate-spin-medium">
                <img
                  src="/images/h-3.png"
                  alt=""
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[18%]"
                />
              </div>

              <div className="absolute inset-0 animate-spin-fast">
                <img
                  src="/images/h-5.png"
                  alt=""
                  className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[18%]"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}