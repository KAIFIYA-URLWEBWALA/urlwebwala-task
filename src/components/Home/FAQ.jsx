import { useState, useEffect, useRef } from "react";

const faqs = [
  {
    id: 1,
    question: "What is physical therapy?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 2,
    question: "What conditions can physical therapy treat?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    question: "Is physical therapy painful?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

// 🔥 COUNT HOOK (restarts on scroll)
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

// 🔥 ACCORDION ITEM
function AccordionItem({ faq, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      className="border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{
        borderColor: "#e5e0d8",
        backgroundColor: isOpen ? "#fff7ed" : "#fdf8f2",
      }}
    >
      {/* HEADER */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-5 py-4 text-left group"
      >
        {/* ICON */}
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
          style={{ backgroundColor: "#f97316" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform duration-300"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            {isOpen ? (
              <rect x="3" y="7.5" width="10" height="1.5" rx="0.75" fill="white" />
            ) : (
              <>
                <rect x="3" y="7.5" width="10" height="1.5" rx="0.75" fill="white" />
                <rect x="7.5" y="3" width="1.5" height="10" rx="0.75" fill="white" />
              </>
            )}
          </svg>
        </span>

        {/* QUESTION */}
        <span className="font-semibold text-base md:text-lg transition-colors duration-300 group-hover:text-orange-500">
          {faq.question}
        </span>
      </button>

      {/* ANSWER */}
      <div
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          ref={contentRef}
          className={`px-5 pb-5 pl-16 transform transition-all duration-500 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <p className="text-sm md:text-base leading-relaxed text-gray-600">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

// 🔥 MAIN COMPONENT
export default function FAQ() {
  const [openId, setOpenId] = useState(1);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const count = useCountUp(10, 2000, inView);

  // 🔁 OBSERVER (re-triggers every time)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12">
        
        {/* LEFT SIDE */}
        <div className="w-full md:w-5/12">
          <p className="text-orange-500 font-semibold tracking-widest mb-3">
            FAQ
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-900 leading-tight">
            Navigate the Digital World with Confidence
          </h2>

          <p className="text-gray-500 mb-10">
            Aliquam eros justo, posuere loborti laorematullamcorper the posuer
            viverra.
          </p>

          {/* COUNTER */}
          <div className="inline-flex items-center gap-4 bg-orange-50 border rounded-2xl px-8 py-6">
            <span className="text-5xl font-bold text-gray-900">
              {count}+
            </span>
            <span className="text-sm text-gray-500 leading-tight">
              years of <br /> experiences
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-7/12 flex flex-col gap-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => toggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}