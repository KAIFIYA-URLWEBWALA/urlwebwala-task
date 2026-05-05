import React from "react";
import {
  FaMobileAlt,
  FaFileAlt,
  FaProjectDiagram,
  FaLock,
  FaNetworkWired,
} from "react-icons/fa";

const services = [
  {
    icon: <FaMobileAlt />,
    title: "Digita Transformation Manag IT",
    desc: "IT Solution is a broad categ encompasses various technologicIT Solution is a broad categ encompasses various technological solutionsIT Solution is a broad",
  },
  {
    icon: <FaFileAlt />,
    title: "Cyber Shield Technologies IT Project Services",
    desc: "IT Solution is a broad categ encompasses various technologicIT Solution is a broad categ encompasses various technological solutionsIT Solution is a broad",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Tech Solutions for a Connected",
    desc: "IT Solution is a broad categ encompasses various technologicIT Solution is a broad categ encompasses various technological solutionsIT Solution is a broad",
  },
  {
    icon: <FaLock />,
    title: "Digita Transformation Manag IT",
    desc: "IT Solution is a broad categ encompasses various technologicIT Solution is a broad categ encompasses various technological solutionsIT Solution is a broad",
  },
  {
    icon: <FaFileAlt />,
    title: "Cyber Shield Technologies IT Project Services",
    desc: "IT Solution is a broad categ encompasses various technologicIT Solution is a broad categ encompasses various technological solutionsIT Solution is a broad",
  },
  {
    icon: <FaNetworkWired />,
    title: "Tech Solutions for a Connected",
    desc: "IT Solution is a broad categ encompasses various technologicIT Solution is a broad categ encompasses various technological solutionsIT Solution is a broad",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100} // stagger effect
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm
              transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl border border-gray-200 mb-6 text-gray-600
              transition-all duration-500 group-hover:border-[#E5093B] group-hover:text-[#E5093B] group-hover:scale-110">
                <span className="text-xl">{item.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-semibold text-text-primary mb-3 group-hover:text-[#E5093B] transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-text-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}