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
          "primary-dark": "#83A886",
          "secondary": "#AFD5DE",
          "secondary-dark": "#7D9AA1",
          "info": "#16B6F5",
          "success": "#16F52C",
          "danger": "#F51616",
          "background": "#FAFAF7",
          "text": "#2A2A26",
        }
      }
    ]
  }
}

