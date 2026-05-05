export default function Sidebar() {
  return (
    <div className="space-y-8">

      {/* Search */}
      <div className="bg-white p-6 rounded-2xl border">
        <h4 className="font-semibold mb-4">Search</h4>
        <input
          type="text"
          placeholder="Search..."
          className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-primary"
        />
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-2xl border">
        <h4 className="font-semibold mb-4">Category</h4>

        {["CloudConnect IT Services", "SecureNet IT Solutions", "CyberShield Technologies"].map((cat, i) => (
          <div
            key={i}
            className="flex justify-between py-2 border-b text-sm hover:text-primary cursor-pointer"
          >
            {cat}
            <span className="text-primary">(0{i + 1})</span>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="bg-white p-6 rounded-2xl border">
        <h4 className="font-semibold mb-4">Tags</h4>

        <div className="flex flex-wrap gap-2">
          {["Tech", "Solutions", "Cyber", "IT"].map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-primary hover:text-white cursor-pointer transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}