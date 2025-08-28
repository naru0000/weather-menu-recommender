/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'sunny': "url('/src/assets/images/background/sunny.png')",
        'cloudy': "url('/src/assets/images/background/cloudy.jpg')",       
      },
      colors: {
        'weather-basic': '#D4142A',
        'weather-cloudy': '#205B72',
        'weather-sunny': '#0088CC', 
        'weather-rainy': '#0F7461',
      },
      fontFamily: {
        'cafe24': ['Cafe24ProUp', 'sans-serif'],
      }
    },
  },
  plugins: [],
}