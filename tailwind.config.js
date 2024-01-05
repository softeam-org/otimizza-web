/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#273257",
        secondary: "#2C3A64",
        green: "#00B25B",
        yellow: "#FFB800",
        "golden-brown": "#99730E",
        "snow-white": "#F3F3F3",
        "midnight-blue": "#0E131F",
        "iron-gray": "#565656",
      },
    },
  },
  plugins: [],
};
