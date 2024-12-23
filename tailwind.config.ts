import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#90AEAD",
        foreground: "#ECE6EE",
        primary: "#0A21C0",
        textPrimary: "#675496",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "100%",
          md: "768px",
          lg: "1024px",
          xl: "1380px",
        },
      },
      fontFamily: {
        Satoshi: ["Satoshi , sans-serif"],
        Synonym: ["Synonym , sans-serif"],
        SplineSans: ["Spline Sans , sans-serif"],
        Grostek: ["Cabinet Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
