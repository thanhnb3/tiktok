/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html,css}"],
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
        search: {
          bg: "rgba(22, 24, 35, 0.06)",
          hover: "rgba(22,24,35,0.03)",
          active: "rgba(22,24,35,0.06)",
          button: "rgba(22,24,35,0.34)",
          clear: "rgba(22,24,35,0.34)",
        },
        button: {
          hover: "rgba(254,44,85, 0.06)",
        },
        account: {
          hover: "rgba(22,24,35,0.3)",
        },
        border: {
          rounded: "rgba(22,24,35,0.12)",
        },
      },
    },
  },
  plugins: [],
};
