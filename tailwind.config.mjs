/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aileron: ["Aileron", "sans-serif"],
        jetbrains: ["JetBrains Mono Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
