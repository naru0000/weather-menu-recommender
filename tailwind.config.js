/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                null: "url('/src/assets/images/background/basic-pc.png')",
                sunny: "url('/src/assets/images/background/sunny-pc.png')",
                cloudy: "url('/src/assets/images/background/cloudy-pc.png')",
                rainy: "url('/src/assets/images/background/rainy-pc.png')",
                
            },
            colors: {
                'weather-basic': '#D4142A',
                'weather-cloudy': '#205B72',
                'weather-sunny': '#0088CC',
                'weather-rainy': '#0F7461',
            },
            foodImages: {
                낫또: "url('/src/assets/images/foods/natto.png')",
            },
            fontFamily: {
                cafe24: ['Cafe24ProUp', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
