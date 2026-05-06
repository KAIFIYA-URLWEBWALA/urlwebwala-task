import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiHome, FiChevronRight } from "react-icons/fi";

export default function ContactHero() {
    useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

    return (
        <section className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?w=1600&q=80"
                alt="Contact Banner"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-text-primary/85" />
            <div
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                <h1 data-aos="fade-right" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                    Contact Us
                </h1>
                <nav data-aos="fade-right" data-aos-delay="100" className="flex items-center gap-2 text-sm">
                    <FiHome className="text-primary" />
                    <a href="/" className="text-white/80 hover:text-primary transition-colors duration-200 font-medium">Home</a>
                    <FiChevronRight className="text-primary text-xs" />
                    <a href="/contact" className="text-white/80 hover:text-primary transition-colors duration-200 font-medium">Contact Us</a>
                </nav>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-light to-secondary" />
        </section>
    );
}