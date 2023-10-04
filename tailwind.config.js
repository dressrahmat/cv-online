/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#10044c",
          "secondary": "#4C4379",
          "accent": "#8882A6",
          "neutral": "#C4C1D3",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}

