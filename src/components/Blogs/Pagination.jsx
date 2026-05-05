export default function Pagination({ totalPages, page, setPage }) {
  return (
    <div className="flex justify-center mt-10 gap-3">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`w-10 h-10 flex items-center justify-center rounded-md border transition-all duration-300 
          ${
            page === i + 1
              ? "bg-primary text-white border-primary"
              : "bg-white border-gray-200 hover:bg-primary hover:text-white"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}