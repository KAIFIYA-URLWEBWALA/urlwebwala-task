import { useState } from "react";
import blogs from "./BlogData";
import BlogList from "./BlogList";
import Sidebar from "./Sidebar";
import Pagination from "./Pagination";
import BlogHero from "./BlogHero"; // ✅ ADD THIS

const ITEMS_PER_PAGE = 3;

export default function Blogs() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const currentBlogs = blogs.slice(start, start + ITEMS_PER_PAGE);

  return (
    <>
      {/* ✅ HERO ADDED ON TOP */}
      <BlogHero />

      <section className="bg-background-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 grid lg:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="lg:col-span-2">
            <BlogList blogs={currentBlogs} />
            <Pagination totalPages={totalPages} page={page} setPage={setPage} />
          </div>

          {/* RIGHT */}
          <Sidebar />

        </div>
      </section>
    </>
  );
}