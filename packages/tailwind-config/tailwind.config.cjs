const defaultTheme = require("tailwindcss/defaultTheme");
const { heroui } = require("@heroui/theme");

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
      // colors: realEstateColors,
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      animation: {
        move: "move 10s ease-in-out infinite",
        pop: "pop 0.2s ease forwards",
      },
      keyframes: {
        move: {
          "25%, 75%": {
            transform: "translate(0, 0); left: 0%;",
          },
          "90%, 100%": {
            transform: "translate(-100%, 0); left: 100%;",
          },
        },
        pop: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
        },
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            default: {
              50: "#fafafa",
              100: "#f2f2f3",
              200: "#ebebec",
              300: "#e3e3e6",
              400: "#dcdcdf",
              500: "#d4d4d8",
              600: "#afafb2",
              700: "#8a8a8c",
              800: "#656567",
              900: "#404041",
              foreground: "#000",
              DEFAULT: "#d4d4d8",
            },
            primary: {
              50: "#e6e8ef",
              100: "#c4c8da",
              200: "#a1a8c4",
              300: "#7f87ae",
              400: "#5c6798",
              500: "#3a4782",
              600: "#303b6b",
              700: "#262e55",
              800: "#1c223e",
              900: "#111527",
              foreground: "#fff",
              DEFAULT: "#3a4782",
            },
            secondary: {
              50: "#fdf7eb",
              100: "#faebcf",
              200: "#f7dfb3",
              300: "#f5d396",
              400: "#f2c87a",
              500: "#efbc5e",
              600: "#c59b4e",
              700: "#9b7a3d",
              800: "#72592d",
              900: "#48381c",
              foreground: "#000",
              DEFAULT: "#efbc5e",
            },
            success: {
              50: "#e2f8ec",
              100: "#b9efd1",
              200: "#91e5b5",
              300: "#68dc9a",
              400: "#40d27f",
              500: "#17c964",
              600: "#13a653",
              700: "#0f8341",
              800: "#0b5f30",
              900: "#073c1e",
              foreground: "#000",
              DEFAULT: "#17c964",
            },
            warning: {
              50: "#fef4e4",
              100: "#fce4bd",
              200: "#fad497",
              300: "#f9c571",
              400: "#f7b54a",
              500: "#f5a524",
              600: "#ca881e",
              700: "#9f6b17",
              800: "#744e11",
              900: "#4a320b",
              foreground: "#000",
              DEFAULT: "#f5a524",
            },
            danger: {
              50: "#fee1eb",
              100: "#fbb8cf",
              200: "#f98eb3",
              300: "#f76598",
              400: "#f53b7c",
              500: "#f31260",
              600: "#c80f4f",
              700: "#9e0c3e",
              800: "#73092e",
              900: "#49051d",
              foreground: "#000",
              DEFAULT: "#f31260",
            },
            background: "#ffffff",
            foreground: {
              50: "#dfdfdf",
              100: "#b3b3b3",
              200: "#868686",
              300: "#595959",
              400: "#2d2d2d",
              500: "#000000",
              600: "#000000",
              700: "#000000",
              800: "#000000",
              900: "#000000",
              foreground: "#fff",
              DEFAULT: "#000000",
            },
            primary1: {
              DEFAULT: "#e1e4f7", // light tint of primary
              foreground: "#111111", // dark gray text
            },
            primary2: {
              DEFAULT: "#c2c7ef", // darker tint primary bg
              foreground: "#444444", // medium gray text
            },
            secondary1: {
              DEFAULT: "#fff5e1", // light tint of secondary
              foreground: "#111111", // dark gray text
            },
            secondary2: {
              DEFAULT: "#f9e0a7", // darker tint secondary bg
              foreground: "#444444", // medium gray text
            },

            focus: "#006FEE",
            overlay: "#000000",
            divider: "#111111",
          },
        },
        dark: {
          colors: {
            default: {
              50: "#131315",
              100: "#1e1e21",
              200: "#29292e",
              300: "#34343a",
              400: "#3f3f46",
              500: "#616166",
              600: "#828287",
              700: "#a4a4a7",
              800: "#c5c5c8",
              900: "#e7e7e8",
              foreground: "#fff",
              DEFAULT: "#3f3f46",
            },
            primary: {
              50: "#111527",
              100: "#1c223e",
              200: "#262e55",
              300: "#303b6b",
              400: "#3a4782",
              500: "#5c6798",
              600: "#7f87ae",
              700: "#a1a8c4",
              800: "#c4c8da",
              900: "#e6e8ef",
              foreground: "#fff",
              DEFAULT: "#3a4782",
            },
            secondary: {
              50: "#48381c",
              100: "#72592d",
              200: "#9b7a3d",
              300: "#c59b4e",
              400: "#efbc5e",
              500: "#f2c87a",
              600: "#f5d396",
              700: "#f7dfb3",
              800: "#faebcf",
              900: "#fdf7eb",
              foreground: "#000",
              DEFAULT: "#efbc5e",
            },
            success: {
              50: "#073c1e",
              100: "#0b5f30",
              200: "#0f8341",
              300: "#13a653",
              400: "#17c964",
              500: "#40d27f",
              600: "#68dc9a",
              700: "#91e5b5",
              800: "#b9efd1",
              900: "#e2f8ec",
              foreground: "#000",
              DEFAULT: "#17c964",
            },
            warning: {
              50: "#4a320b",
              100: "#744e11",
              200: "#9f6b17",
              300: "#ca881e",
              400: "#f5a524",
              500: "#f7b54a",
              600: "#f9c571",
              700: "#fad497",
              800: "#fce4bd",
              900: "#fef4e4",
              foreground: "#000",
              DEFAULT: "#f5a524",
            },
            danger: {
              50: "#49051d",
              100: "#73092e",
              200: "#9e0c3e",
              300: "#c80f4f",
              400: "#f31260",
              500: "#f53b7c",
              600: "#f76598",
              700: "#f98eb3",
              800: "#fbb8cf",
              900: "#fee1eb",
              foreground: "#000",
              DEFAULT: "#f31260",
            },
            background: "#000000",
            foreground: {
              50: "#4d4d4d",
              100: "#797979",
              200: "#a6a6a6",
              300: "#d2d2d2",
              400: "#ffffff",
              500: "#ffffff",
              600: "#ffffff",
              700: "#ffffff",
              800: "#ffffff",
              900: "#ffffff",
              foreground: "#000",
              DEFAULT: "#ffffff",
            },
            primary1: {
              DEFAULT: "#222940", // dark shade primary bg
              foreground: "#eeeeee", // light gray text
            },
            primary2: {
              DEFAULT: "#1a1f33", // darker shade primary bg
              foreground: "#bbbbbb", // medium gray text
            },
            secondary1: {
              DEFAULT: "#5a3f18", // lighter dark shade of secondary
              foreground: "#f5e6a1", // lighter golden-ish text
            },
            secondary2: {
              DEFAULT: "#7a5721", // even lighter dark secondary bg
              foreground: "#f8e89e", // very light gold text
            },

            focus: "#006FEE",
            overlay: "#ffffff",
            divider: "#ffffff",
          },
        },
      },
    }),
  ],
};
