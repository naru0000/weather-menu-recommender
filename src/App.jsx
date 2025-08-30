import Weather from './features/components/WeatherSelector'
import Temperature from './features/components/TemperatureSelector'
import Menu from './features/components/MenuRecommender'
import HistoryList from './features/components/HistoryList'
import { useSelector } from 'react-redux'

import basicBg from './assets/images/background/basic_pc.webp'
import sunnyBg from './assets/images/background/sunny_pc.webp'
import cloudyBg from './assets/images/background/cloudy_pc.webp'
import rainyBg from './assets/images/background/rainny_pc.webp'

const backgroundImages = {
    sunny: sunnyBg,
    cloudy: cloudyBg,
    rainy: rainyBg,
}

function App() {
    const weather = useSelector((state) => state.weather.value)
    const backgroundImageUrl = backgroundImages[weather] || basicBg

    return (
        <div
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            className="bg-cover bg-center"
        >
            <div
                className={`min-h-screen w-full flex items-center justify-center py-10 bg-white/40 `}
            >
                <main className="container mx-auto flex flex-col items-center">
                    <Weather />
                    <Temperature />
                    <Menu />
                    <HistoryList />
                </main>
            </div>
        </div>
    )
}

export default App
