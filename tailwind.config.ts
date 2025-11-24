import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#dc2626",
        },
        secondary: {
          DEFAULT: "#1e73be",
        },
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;
