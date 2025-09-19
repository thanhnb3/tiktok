/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        container: "1150px",
        sidebar: "356px",
        wsearch: "361px",
      },
      height: {
        hsearch: "46px",
      },
      colors: {
        colorsearch: "rgba(22, 24, 35, 0.06)",
        hoverbuttonsearch: "rgba(22,24,35,0.03)",
        colorbuttonsearch: "rgba(22,24,35,0.34)",
      },
    },
  },
  plugins: [],
};
