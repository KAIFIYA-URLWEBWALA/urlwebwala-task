import { FaArrowRight } from "react-icons/fa";

export default function Blog() {
    const blogs = [
        {
            img: "/images/1 (1).png",
            date: "October 19, 2022",
            author: "Mesbah",
            title: "Inspire meets brands with digital technology",
        },
        {
            img: "/images/2 (1).png",
            date: "October 19, 2022",
            author: "Mesbah",
            title: "Inspire meets brands with digital technology",
        },
        {
            img: "/images/3 (1).png",
            date: "October 19, 2022",
            author: "Mesbah",
            title: "Inspire meets brands with digital technology",
        },
    ];

    return (
        <section
            className="py-16 sm:py-20 relative overflow-hidden bg-[#f6efe7]"
            style={{
                backgroundImage: "url('/images/blog-bg.svg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center",
                backgroundSize: "contain",
            }}
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">

                {/* Heading */}
                <div data-aos="fade-up" className="mb-12">
                    <p className="text-[#E5093B] font-medium mb-2">Our Blogs</p>

                    <h2 className="text-[26px] sm:text-[30px] md:text-[38px] font-bold leading-[1.2]">
                        Boost Your Business with <br /> Digital most Marketing
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

                    {blogs.map((blog, i) => (
                        <div
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 150}
                            className="group bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >

                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={blog.img}
                                    className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 sm:p-6 text-left">

                                {/* Meta */}
                                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                                    <span className="flex items-center gap-1">
                                        📅 {blog.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        👤 {blog.author}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="font-semibold text-[16px] sm:text-[17px] leading-[1.4] mb-4">
                                    {blog.title}
                                </h3>

                                <div className="group inline-block cursor-pointer">

                                    <div className="flex items-center gap-2 text-[#E5093B] text-sm font-medium">
                                        Read More
                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </div>

                                    {/* UNDERLINE */}
                                    <span className="block h-[2px] w-0 bg-[#E5093B] transition-all duration-300 group-hover:w-full"></span>

                                </div>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}