/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F0F0F0",
        white: "#FFFFFF",
        border: "#D6D6D6",
        primary: "#97D0D3",
      },
    },
  },
  plugins: [require("daisyui")],
};
