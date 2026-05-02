// import { useState } from "react";

// const projects = [
//   { img: "/images/project-1.png", title: "E-Commerce App",      tag: "Mobile App" },
//   { img: "/images/project-2.png", title: "Finance Dashboard",   tag: "UI/UX Design" },
//   { img: "/images/project-3.png", title: "Health & Wellness",   tag: "Mobile App" },
//   { img: "/images/project-4.png", title: "Travel Booking",      tag: "Web Design" },
// ];

// const tabs = ["All", "Mobile App", "UI/UX Design", "Web Design"];

// export default function Projects() {
//   const [active, setActive] = useState("All");

//   const filtered = active === "All"
//     ? projects
//     : projects.filter((p) => p.tag === active);

//   return (
//     <section className="py-16 sm:py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

//         {/* Heading */}
//         <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
//           <p className="text-[#ff5a2c] font-medium mb-2">Our Projects</p>
//           <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-bold leading-[1.2]">
//             Our Recent Work
//           </h2>
//         </div>

//         {/* Filter Tabs */}
//         <div
//           data-aos="fade-up"
//           data-aos-delay="100"
//           className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10"
//         >
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActive(tab)}
//               className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
//                 active === tab
//                   ? "bg-[#ff5a2c] text-white shadow-sm"
//                   : "bg-gray-100 text-gray-600 hover:bg-[#ff5a2c]/10 hover:text-[#ff5a2c]"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
//           {filtered.map((item, i) => (
//             <div
//               key={i}
//               data-aos="fade-up"
//               data-aos-delay={i * 100}
//               className="group relative rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="w-full h-48 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
//                 <span className="text-[#ff5a2c] text-xs font-semibold uppercase tracking-widest">{item.tag}</span>
//                 <h3 className="text-white font-semibold text-sm sm:text-base mt-1">{item.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }