export default function Clients() {
  const logos = ["/images/1.svg","/images/2.svg","/images/3.svg","/images/4.svg","/images/5.svg","/images/6.svg"];

  return (
    <div className="relative overflow-hidden bg-white py-10 sm:py-12">

      <div className="absolute left-0 top-0 w-16 sm:w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-16 sm:w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

      <div className="marquee-track flex items-center">
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            className="h-8 sm:h-10 md:h-12 mx-8 sm:mx-10 lg:mx-12 flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300"
          />
        ))}
      </div>
    </div>
  );
}
