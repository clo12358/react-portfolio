/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ABDBAE",
          "primary-content": "#83A886",
          "secondary": "#AFD5DE",
          "secondaryDark": "#7D9AA1",
          "info": "#16B6F5",
          "success": "#16F52C",
          "danger": "#F51616",
          "accent": "#FAFAF7",
          "neutral": "#2A2A26",
        }
      }
    ]
  }
}

