/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: { min: '1401px' },
        laptop: { max: '1400px', min: '1150px' },
        tablet: { max: '1149px', min: '950px' },
        mobile: { max: '949px' }
      },
      colors: {
        primary: '#ff0000',
        bg_black: '#0f0f0f',
        bg_white: '#f0f0f0',
        overlay: 'rgba(0, 0, 0, 0.8)',
        white_opacity_80: 'rgba(255, 255, 255, 0.2)'
      },
      gridTemplateColumns: {
        'fill': 'repeat(auto-fill, minmax(90px, 1fr))',
        'footer-4': 'repeat(auto-fit, minmax(100px, 1fr))'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "black"],
  },
}

