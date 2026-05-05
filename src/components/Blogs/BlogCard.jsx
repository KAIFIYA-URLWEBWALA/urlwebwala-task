export default function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500">

      <div className="relative overflow-hidden">
        <img
          src={blog.img}
          className="w-full h-[260px] object-cover transition duration-700 hover:scale-105"
        />

        <div className="absolute top-4 left-4 bg-primary text-white text-sm px-3 py-2 rounded-lg font-semibold">
          {blog.date}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-3 hover:text-primary transition">
          {blog.title}
        </h3>

        <p className="text-text-secondary text-sm mb-5">
          {blog.desc}
        </p>

        <button className="text-primary border border-primary px-5 py-2 rounded-full text-sm hover:bg-primary hover:text-white transition">
          Read More →
        </button>
      </div>
    </div>
  );
}