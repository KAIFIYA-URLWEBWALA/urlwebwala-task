import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BlogDetailHero from "./BlogDetailHero";
import BlogDetailContent from "./BlogDetailContent";
import BlogDetailSidebar from "./BlogDetailSidebar";
import BlogDetailComments from "./BlogDetailComments";
import BlogDetailCommentForm from "./BlogDetailCommentForm";
import BlogNewsLetter from "./BlogNewsLetter";

export default function Blogs() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background-light font-sans">

      {/* Hero Banner */}
      <BlogDetailHero />

      {/* Main Layout: Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">
          {/* Left: Article + Comments + Form */}
          <div className="flex-1 min-w-0">
            <BlogDetailContent />
            <BlogDetailComments />
            <BlogDetailCommentForm />
          </div>

          {/* Right: Sidebar */}
          <BlogDetailSidebar />
        </div>
      </div>

      {/* Newsletter */}
      <BlogNewsLetter />

      {/* Footer strip */}
    </div>
  );
}