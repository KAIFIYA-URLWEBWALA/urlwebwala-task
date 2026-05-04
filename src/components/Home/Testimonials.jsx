import { useState } from "react";

export default function VideoTestimonial() {
  const testimonials = [
    {
      text: "Financial planners help people to gain knowledge about how to invest and save money efficiently.",
      name: "Ronald Richards",
      role: "Web Designer",
      img: "/images/testimonial-img.png",
    },
    {
      text: "Financial planners help people to gain knowledge about how to invest and save money efficiently.",
      name: "Ronald Richards",
      role: "Web Designer",
      img: "/images/testimonial-img.png",
    },
    {
      text: "Financial planners help people to gain knowledge about how to invest and save money efficiently.",
      name: "Ronald Richards",
      role: "Web Designer",
      img: "/images/testimonial-img.png",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );

    setTimeout(() => setIsAnimating(false), 700);
  };

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );

    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <section className="py-20 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 relative">

        {/* VIDEO */}
        <div className="relative rounded-[24px] overflow-hidden">
          <img
            src="/images/video-thumb.png"
            className="w-full h-[450px] object-cover"
          />

          {/* PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
              ▶
            </div>
          </div>
        </div>

        {/* SLIDER CARD */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-90px] w-[90%] md:w-[80%] overflow-hidden">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-full bg-white rounded-[20px] shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
              >

                {/* TEXT */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-gray-500 text-sm mb-4">
                    {t.text}
                  </p>

                  <h4 className="font-semibold">{t.name}</h4>
                  <span className="text-gray-400 text-sm">{t.role}</span>
                </div>

                {/* IMAGE + QUOTE */}
                <div className="relative">
                  <img
                    src={t.img}
                    className="w-24 h-24 rounded-[16px] object-cover"
                  />

                  {/* WHITE CIRCLE COMMA */}
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 
                    w-10 h-10 bg-white rounded-full 
                    flex items-center justify-center 
                    shadow-md border border-gray-100">

                    <img
                      src="/images/comma.svg"
                      className="w-4 h-4 object-contain"
                    />

                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* ARROWS */}
          <div className="flex justify-center gap-6 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 border border-[#E5093B] text-[#E5093B] rounded-full flex items-center justify-center hover:bg-[#E5093B] hover:text-white transition"
            >
              ←
            </button>

            <button
              onClick={next}
              className="w-10 h-10 border border-[#E5093B] text-[#E5093B] rounded-full flex items-center justify-center hover:bg-[#E5093B] hover:text-white transition"
            >
              →
            </button>
          </div>

        </div>
      </div>

      {/* spacing for overlap */}
    </section>
  );
}