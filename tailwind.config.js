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
        bg: '#0f0f0f',
        overlay: 'rgba(0, 0, 0, 0.8)',
      },
      gridTemplateColumns: {
        'fill': 'repeat(auto-fill, minmax(90px, 1fr))',
        'footer-4': 'repeat(auto-fit, minmax(100px, 1fr))'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}

