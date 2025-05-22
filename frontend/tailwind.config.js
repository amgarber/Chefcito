/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Components/Planner.{js,jsx,ts,tsx}",
    "./src/css/Planner.css"
  ],
  prefix: "tw-", // 👈 Esto es la clave
  theme: {
    extend: {},
  },
  plugins: [],
};

