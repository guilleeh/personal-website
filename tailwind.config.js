/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      daisyui: {
        themes: ["dracula"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
