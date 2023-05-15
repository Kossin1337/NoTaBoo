import { type Config } from "tailwindcss";

export default {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Raleway", "sans-serif"],
        heading: ["Bruno Ace SC", "cursive"],
      },
      colors: {
        "bg-color": "var(--background-color)",
        "primary-color": "var(--primary-color)",
        "lighter-color": "var(--lighter-color)",
        "darker-color": "var(--darker-color)",
        "text-color": "var(--text-color)",
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        main: "fit-content 1fr fit-content",
      },
    },
  },
  plugins: [],
} satisfies Config;
