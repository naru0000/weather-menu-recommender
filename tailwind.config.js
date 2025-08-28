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
        'weather-cold': '#3B82F6',
        'weather-hot': '#EF4444', 
        'weather-rain': '#6B7280',
      }
    },
  },
  plugins: [],
}