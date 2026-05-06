import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiMessageSquare } from "react-icons/fi";

const comments = [
  {
    name: "Savannah Nguyen",
    date: "December 23.2022 at 8:50 P.M",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=70",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard Clintock",
    replies: [],
  },
  {
    name: "Marcus Webb",
    date: "January 05.2023 at 3:15 P.M",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=70",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    replies: [],
  },
];

export default function BlogDetailComments() {
  useEffect(() => {
    AOS.init({ duration: 750, once: true });
  }, []);

  return (
    <section className="mt-12">
      {/* Heading */}
      <div data-aos="fade-up" className="flex items-center gap-3 mb-6">
        <FiMessageSquare className="text-primary text-xl" />
        <h2 className="text-xl font-extrabold text-text-primary">
          "Many Thoughts On{" "}
          <span className="text-primary">"Shipping Solutions, Beyond Boundaries"</span>
        </h2>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((c, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="flex gap-4 p-5 bg-background-light border border-gray-100 rounded-2xl"
          >
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
              <img src={c.avatar} alt={c.name} className="w-full h-full object-cover" />
            </div>

            {/* Body */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <div>
                  <p className="text-xs text-gray-400">{c.date}</p>
                  <h4 className="font-bold text-text-primary text-sm">{c.name}</h4>
                </div>
                <button className="text-xs font-bold text-primary border border-primary/20 hover:bg-primary hover:text-white px-3 py-1 rounded-lg transition-all duration-200 flex-shrink-0">
                  Reply
                </button>
              </div>
              <p className="text-sm text-text-secondary leading-6">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}