/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF007F",
        "text-primary": "#151515",
        "text-secondary": "#444",
        "text-light": "#737373",
      },
    },
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
