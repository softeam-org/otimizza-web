import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "560px",
        xlg: "800px"
      },
      height: {
        58: "14.5rem",
      },
      boxShadow: {
        card: '0px 5px 5px 0px #000',
      },
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
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        azonix: ["Azonix", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: false,
    darkTheme: "none",
  },
};
