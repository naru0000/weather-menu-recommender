/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'weather-basic': '#FF3888',
                'weather-cloudy': '#203D56',
                'weather-sunny': '#006FD8',
                'weather-rainy': '#0F7461',
            },
            fontFamily: {
                cafe24: ['Cafe24ProUp', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
