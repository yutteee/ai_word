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
        hover: "#F9F9F9",
      },
      dropShadow: {
        base: "1px 2px 8px rgba(0, 0, 0, 0.10)",
      },
    },
    fontSize: {
      base: ["14px", "20px"],
      lg: ["16px", "24px"],
      xl: ["20px", "28px"],
      "2xl": ["24px", "32px"],
    },
  },
  plugins: [require("daisyui")],
};
