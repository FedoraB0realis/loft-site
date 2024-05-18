/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        '1000': '52.95rem',
      },
      backgroundImage: {
        background1: "url('/src/assets/LoftImage1.jpg')",
        background2: "url('/src/assets/LoftImage2.jpg')",
        background3: "url('/src/assets/LoftImage3.jpg')",
      },
    },
  },
  plugins: [],
};
