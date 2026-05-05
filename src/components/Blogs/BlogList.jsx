import BlogCard from "./BlogCard";

export default function BlogList({ blogs }) {
  return (
    <div className="space-y-10">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}