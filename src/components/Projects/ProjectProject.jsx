import React from "react";

const services = [
  {
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop",
    title: "Digital Transformation",
    role: "Software Development",
  },
  {
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    title: "UI/UX Design",
    role: "Creative Design",
  },
  {
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    title: "Web Development",
    role: "Frontend & Backend",
  },
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    title: "App Development",
    role: "Mobile Solutions",
  },
  {
    img: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1200&auto=format&fit=crop",
    title: "SEO Optimization",
    role: "Marketing",
  },
  {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    title: "Cloud Services",
    role: "DevOps",
  },
];

export default function ProjectProject() {
  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Our Services
          </h2>
          <p className="text-text-secondary mt-3">
            We provide modern solutions for your business
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[320px] object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-[1deg]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Popup Content */}
              <div className="absolute bottom-4 left-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">

                <div className="bg-white/80 backdrop-blur-lg rounded-xl px-4 py-3 shadow-lg">

                  <h3 className="text-sm font-semibold text-[#E5093B]">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-600">
                    {item.role}
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