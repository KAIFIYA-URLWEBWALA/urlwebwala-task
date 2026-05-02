/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff5a2c",
      },
      animation: {
        // Original spin animations (kept for backwards compat)
        "spin-slow":    "spin 12s linear infinite",
        "spin-medium":  "spin 10s linear infinite",
        "spin-fast":    "spin 8s linear infinite",
        "spin-reverse": "spin 14s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
