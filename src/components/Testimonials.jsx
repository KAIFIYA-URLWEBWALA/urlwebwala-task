// import { useState } from "react";

// const testimonials = [
//   {
//     name: "Sarah Johnson",
//     role: "CEO, TechCorp",
//     text: "Sobtech delivered our app on time and beyond expectations. Their team is professional, responsive, and truly talented.",
//     img: "/images/testimonial-img.png",
//   },
//   {
//     name: "Mark Williams",
//     role: "Founder, StartupX",
//     text: "Working with Sobtech was a game-changer. The UI/UX design they produced increased our user retention by 40%.",
//     img: "/images/testimonial-img.png",
//   },
//   {
//     name: "Priya Patel",
//     role: "Marketing Director, BrandHub",
//     text: "Their digital marketing strategy drove a 3x increase in qualified leads within the first month. Highly recommend!",
//     img: "/images/testimonial-img.png",
//   },
// ];

// export default function Testimonials() {
//   const [current, setCurrent] = useState(0);

//   const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
//   const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

//   const item = testimonials[current];

//   return (
//     <section className="py-16 sm:py-20 bg-[#fdf9f8]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

//         {/* Heading */}
//         <div className="text-center mb-10 sm:mb-14" data-aos="fade-up">
//           <p className="text-[#ff5a2c] font-medium mb-2">Testimonials</p>
//           <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-bold leading-[1.2]">
//             What Our Clients Say
//           </h2>
//         </div>

//         {/* Card */}
//         <div
//           key={current}
//           data-aos="fade-up"
//           className="max-w-2xl mx-auto bg-white rounded-[28px] p-8 sm:p-10 shadow-sm text-center relative"
//         >
//           {/* Quote icon */}
//           <img src="/images/comma.svg" alt="" className="w-10 mx-auto mb-5 opacity-60" />

//           <p className="text-gray-600 text-sm sm:text-base leading-7 mb-7 italic">
//             "{item.text}"
//           </p>

//           <div className="flex items-center justify-center gap-4">
//             <img
//               src={item.img}
//               alt={item.name}
//               className="w-12 h-12 rounded-full object-cover border-2 border-[#ff5a2c]/30"
//             />
//             <div className="text-left">
//               <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
//               <p className="text-gray-400 text-xs">{item.role}</p>
//             </div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="flex items-center justify-center gap-4 mt-7">
//           <button
//             onClick={prev}
//             className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#ff5a2c] hover:bg-[#ff5a2c]/5 transition-all duration-200"
//           >
//             <img src="/images/left-arrow-b.svg" alt="Prev" className="w-4" />
//           </button>

//           {/* Dots */}
//           <div className="flex gap-2">
//             {testimonials.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrent(i)}
//                 className={`rounded-full transition-all duration-300 ${
//                   i === current
//                     ? "w-6 h-2.5 bg-[#ff5a2c]"
//                     : "w-2.5 h-2.5 bg-gray-200 hover:bg-[#ff5a2c]/40"
//                 }`}
//               />
//             ))}
//           </div>

//           <button
//             onClick={next}
//             className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#ff5a2c] hover:bg-[#ff5a2c]/5 transition-all duration-200"
//           >
//             <img src="/images/right-arrow-b.svg" alt="Next" className="w-4" />
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }