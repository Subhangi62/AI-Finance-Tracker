/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
// tailwind.config.js
module.exports = {
  content: [
    // ensure these include your UI components and pages
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        destructive: {
          DEFAULT: "hsl(355 70% 52%)",        // or "#ef4444"
          foreground: "hsl(0 0% 100%)"       // optional token if you use text-destructive-foreground
        },
        // optional: add other tokens used by shadcn
        primary: {
          DEFAULT: "hsl(252 71% 60%)",
          foreground: "hsl(232 11% 100%)",
        },
      },
    },
  },
  plugins: [],
};
