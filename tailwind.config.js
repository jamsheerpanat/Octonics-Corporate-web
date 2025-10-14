/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          sky: "#0ea5e9",
          indigo: "#4f46e5",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};