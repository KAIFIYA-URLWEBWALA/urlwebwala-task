import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BlogHero() {
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">

            {/* Background Image */}
            <img
                src="/about/bread-crumb.png"
                alt="About"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 h-full flex flex-col justify-center">

                {/* Heading */}
                <h1
                    data-aos="fade-up"
                    className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
                >
                    Blogs
                </h1>

                {/* Breadcrumb */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="mt-3 flex items-center text-sm sm:text-base text-white/80"
                >

                    {/* Home */}
                    <a
                        href="/"
                        className="relative group transition-all duration-300 ease-out hover:text-[#E5093B]"
                    >
                        Home

                        {/* underline animation */}
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#E5093B] transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    {/* Arrow */}
                    <span className="mx-3 text-white/60 transition-all duration-300">
                        ›
                    </span>

                    {/* About */}
                    <span className="relative group cursor-default text-white/90 hover:text-[#E5093B] transition-all duration-300">
                        Blogs
                        {/* underline animation */}
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#E5093B] transition-all duration-300 group-hover:w-full"></span>
                    </span>

                </div>

            </div>
        </section>
    );
}