const defaultTheme = require("tailwindcss/defaultTheme");
const { heroui, darkLayout } = require("@heroui/theme");

// Shared color palette
const realEstateColors = {
  secondary: {
    50: "#E6FBED",
    100: "#C1F4D4",
    200: "#95EBB5",
    300: "#66E194",
    400: "#3DD975",
    500: "#1DD75B", // your base
    600: "#1AB24D",
    700: "#158C3C",
    800: "#10662B",
    900: "#0B411B",
    DEFAULT: "#1DD75B",
    foreground: "#ffffff",
  },
  primary: {
    50: "#f0f2ff", // very light, almost white
    100: "#d9defd",
    200: "#bfc3fb",
    300: "#a4a8f9",
    400: "#898def",
    500: "#636ae8", // base color (your original)
    600: "#5056c4",
    700: "#3b429f",
    800: "#282d7a",
    900: "#161a54", // very dark shade
    DEFAULT: "#636ae8",
    foreground: "#ffffff", // white text on this blue
  },

  divider: {
    50: "#e8ecff", // very pale blue
    100: "#cbd6ff",
    200: "#a9bbff",
    300: "#87a0ff",
    400: "#6686ff",
    500: "#4d70ff", // brightish blue for focus (brighter than secondary 500)
    600: "#3f5adf",
    700: "#3146bf",
    800: "#24329f",
    900: "#172080",
    DEFAULT: "#4d70ff",
    foreground: "#ffffff", // white text on focus bg
  },
  background: "#000000",

  focus: {
    50: "#e8ecff", // very pale blue
    100: "#cbd6ff",
    200: "#a9bbff",
    300: "#87a0ff",
    400: "#6686ff",
    500: "#4d70ff", // brightish blue for focus (brighter than secondary 500)
    600: "#3f5adf",
    700: "#3146bf",
    800: "#24329f",
    900: "#172080",
    DEFAULT: "#4d70ff",
    foreground: "#ffffff", // white text on focus bg
  },

  success: {
    50: "#ECFBE5",
    100: "#D4F5C2",
    200: "#AEEA8E",
    300: "#86DB5B",
    400: "#5ECA2E",
    500: "#3DB816",
    600: "#28940D",
    700: "#1F7409",
    800: "#165506",
    900: "#0D3703",
    foreground: "#ffffff",
    DEFAULT: "#28940D",
  },
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,jsx,ts,tsx}",
    "./src/*.{html,js,jsx,ts,tsx}",
    "./dist/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/dist/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      // Default Tailwind breakpoints (mobile-first)
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: realEstateColors,
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        move: "move 10s ease-in-out infinite",
      },
      keyframes: {
        move: {
          "25%, 75%": {
            transform: "translate(0, 0); left: 0%;",
          },
          "100%": {
            transform: "translate(-100%, 0); left: 100%;",
          },
        },
      },
    },
  },
  plugins: [
    heroui({
      layout: {},
      themes: {
        "real-estate": {
          extend: "light",
          colors: realEstateColors,
        },
      },
    }),
  ],
};
