/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        box: "0px 16px 30px -10px rgba(70, 96, 187, 0.20)",
      },
      colors: {
        "#0079FF": "#0079FF",
        "#697C9A": "#697C9A",
        "#4B6A9B": "#4B6A9B",
        "#2B3442": "#2B3442",
        "#F6F8FF": "#F6F8FF",
        "#FEFEFE": "#FEFEFE",
        "#141D2F": "#141D2F",
        "#1E2A47": "#1E2A47",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
