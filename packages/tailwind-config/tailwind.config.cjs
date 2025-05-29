const { heroui } = require("@heroui/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,jsx,ts,tsx}",
    "./src/*.{html,js,jsx,ts,tsx}",
    "./dist/*.{html,js,jsx,ts,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/dist/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },

  plugins: [
    heroui({
      layout: {},
      themes: {
        "real-estate": {
          extend: "light",
          colors: {
            primary: {
              50: "#FFF3ED",
              100: "#FFE0D3",
              200: "#FFBCA6",
              300: "#FF906E",
              400: "#FF683B",
              500: "#FF4802", // base
              600: "#D93A01",
              700: "#B32F01",
              800: "#8C2301",
              900: "#661901",
              foreground: "#ffffff", // white text on orange bg
              DEFAULT: "#FF4802",
            },
            secondary: {
              50: "#EBEDF7",
              100: "#C5CAE9",
              200: "#9FA8DA",
              300: "#7986CB",
              400: "#5C6BC0",
              500: "#3F51B5", // visually similar mid-point
              600: "#303EA1",
              700: "#27348D",
              800: "#202B77", // your original base
              900: "#161F5B",
              foreground: "#ffffff", // white text on dark bg
              DEFAULT: "#202B77",
            },
            divider: {
              50: "#EBEDF7",
              100: "#C5CAE9",
              200: "#9FA8DA",
              300: "#7986CB",
              400: "#5C6BC0",
              500: "#3F51B5", // visually similar mid-point
              600: "#303EA1",
              700: "#27348D",
              800: "#202B77", // your original base
              900: "#161F5B",
              foreground: "#ffffff", // white text on dark bg
              DEFAULT: "#202B77",
            },
            focus: {
              50: "#EBEDF7",
              100: "#C5CAE9",
              200: "#9FA8DA",
              300: "#7986CB",
              400: "#5C6BC0",
              500: "#3F51B5", // visually similar mid-point
              600: "#303EA1",
              700: "#27348D",
              800: "#202B77", // your original base
              900: "#161F5B",
              foreground: "#ffffff", // white text on dark bg
              DEFAULT: "#202B77",
            },
            success: {
              50: "#ECFBE5",
              100: "#D4F5C2",
              200: "#AEEA8E",
              300: "#86DB5B",
              400: "#5ECA2E",
              500: "#3DB816",
              600: "#28940D", // base
              700: "#1F7409",
              800: "#165506",
              900: "#0D3703",
              foreground: "#ffffff", // white text on green bg
              DEFAULT: "#28940D",
            },
          },
        },
      },
    }),
  ],
};
