/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // 🔴 Primary Reds
        primary: {
          DEFAULT: "#E5093B",
          light: "#FF4B6E",
          dark: "#B3002D",
        },

        // 🔵 Accent Blues
        secondary: {
          DEFAULT: "#0052FF",
          light: "#3BA3FF",
          dark: "#002A8F",
        },

        // ⚫ Text Colors
        text: {
          primary: "#0F172A",
          secondary: "#1E293B",
        },

        // ⚪ Background
        background: {
          light: "#F8FAFF",
          white: "#FFFFFF",
        },
      },

      // 🎨 Gradients (custom usage)
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #E5093B, #FF4B6E)",
        "gradient-secondary": "linear-gradient(90deg, #3BA3FF, #0052FF)",
      },

      animation: {
        "spin-slow": "spin 12s linear infinite",
        "spin-medium": "spin 10s linear infinite",
        "spin-fast": "spin 8s linear infinite",
        "spin-reverse": "spin 14s linear infinite reverse",
      },
    },
  },
  plugins: [],
};