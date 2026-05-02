// export default function Features() {
//   const features = [
//     { icon: "/images/image (1).svg",  title: "App Development",     desc: "Scalable mobile apps built for performance and growth." },
//     { icon: "/images/image (2).svg",  title: "UI/UX Design",        desc: "Beautiful interfaces that users love to interact with." },
//     { icon: "/images/image (3).svg",  title: "Cloud Solutions",     desc: "Reliable cloud infrastructure for modern businesses." },
//     { icon: "/images/image (4).svg",  title: "Digital Marketing",   desc: "Data-driven campaigns that convert and retain customers." },
//     { icon: "/images/image (5).svg",  title: "Cyber Security",      desc: "End-to-end protection for your digital assets." },
//     { icon: "/images/image (6).svg",  title: "24/7 Support",        desc: "Round-the-clock assistance whenever you need us." },
//   ];

//   return (
//     <section className="py-16 sm:py-20 bg-[#fdf9f8]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

//         {/* Heading */}
//         <div className="text-center mb-10 sm:mb-14" data-aos="fade-up">
//           <p className="text-[#ff5a2c] font-medium mb-2">Our Features</p>
//           <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-bold leading-[1.2]">
//             Everything You Need to Succeed
//           </h2>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {features.map((item, i) => (
//             <div
//               key={i}
//               data-aos="fade-up"
//               data-aos-delay={i * 100}
//               className="relative bg-white rounded-[24px] p-6 sm:p-8 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
//             >
//               {/* bg accent */}
//               <img
//                 src="/images/features-card-bg.svg"
//                 className="absolute bottom-0 right-0 w-24 opacity-30 pointer-events-none select-none"
//                 aria-hidden="true"
//               />

//               <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#ff5a2c]/10 mb-5 group-hover:bg-[#ff5a2c] transition-all duration-300">
//                 <img src={item.icon} alt={item.title} className="w-7 group-hover:invert transition-all duration-300" />
//               </div>

//               <h3 className="text-base sm:text-lg font-semibold mb-2">{item.title}</h3>
//               <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }