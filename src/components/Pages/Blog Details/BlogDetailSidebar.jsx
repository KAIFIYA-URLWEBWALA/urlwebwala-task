import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiSearch, FiCalendar } from "react-icons/fi";

const categories = [
  { label: "Cloud IT Services", count: "02" },
  { label: "SecureNet IT Solutions", count: "01" },
  { label: "CyberShield Technologies", count: "03" },
  { label: "IT Optimization Services", count: "05" },
];

const latestBlogs = [
  {
    date: "Jan 10.2022",
    title: "IT Project Management Services",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=100&q=70",
  },
  {
    date: "Jan 10.2022",
    title: "Data Analytics and Insights",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&q=70",
  },
  {
    date: "Jan 10.2022",
    title: "Network Infrastructure Solutions",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&q=70",
  },
];

const tags = ["TechPro", "Solutions", "Secure Net", "CyberShield", "Technologies", "IT"];

function SidebarCard({ title, children, delay = 0 }) {
  return (
    <div
      data-aos="fade-left"
      data-aos-delay={delay}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6"
    >
      <h3 className="text-base font-extrabold text-text-primary mb-4 relative pl-3 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary before:rounded-full">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function BlogDetailSidebar() {
  useEffect(() => {
    AOS.init({ duration: 750, once: true });
  }, []);

  return (
    <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0 space-y-0">
      {/* Search */}
      <div
        data-aos="fade-left"
        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6"
      >
        <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 focus-within:border-primary transition-colors">
          <input
            type="text"
            placeholder="Search here..."
            className="flex-1 text-sm outline-none text-text-secondary placeholder:text-gray-400"
          />
          <button className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
            <FiSearch size={14} />
          </button>
        </div>
      </div>

      {/* Categories */}
      <SidebarCard title="Categories" delay={50}>
        <ul className="space-y-2">
          {categories.map(({ label, count }) => (
            <li key={label}>
              <a
                href="#"
                className="flex items-center justify-between text-sm text-text-secondary hover:text-primary font-medium group py-1.5 border-b border-gray-50 last:border-0 transition-colors"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  {label}
                </span>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  ({count})
                </span>
              </a>
            </li>
          ))}
        </ul>
      </SidebarCard>

      {/* Latest Blogs */}
      <SidebarCard title="Latest Blogs" delay={100}>
        <ul className="space-y-4">
          {latestBlogs.map(({ date, title, img }) => (
            <li key={title} className="flex gap-3 group">
              <div className="w-16 h-14 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                  <FiCalendar className="text-primary" size={11} />
                  <span>{date}</span>
                </div>
                <a
                  href="#"
                  className="text-sm font-bold text-text-primary hover:text-primary transition-colors leading-snug line-clamp-2"
                >
                  {title}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </SidebarCard>

      {/* Tags */}
      <SidebarCard title="Tags" delay={150}>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <a
              key={tag}
              href="#"
              className="text-xs font-semibold border border-gray-200 text-text-secondary hover:bg-primary hover:text-white hover:border-primary px-3 py-1.5 rounded-lg transition-all duration-200"
            >
              {tag}
            </a>
          ))}
        </div>
      </SidebarCard>
    </aside>
  );
}