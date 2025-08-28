import Weather from './features/components/WeatherSelector'
import Temperature from './features/components/TemperatureSelector'
import Menu from './features/components/MenuRecommender'
import HistoryList from './features/components/HistoryList'
import { useSelector } from 'react-redux'

const backgroundClasses = {
    sunny: 'bg-sunny',
    cloudy: 'bg-cloudy',
    rainy: 'bg-weather-rain',
}

function App() {
    const weather = useSelector((state) => state.weather.value)
    const backgroundImageClass = backgroundClasses[weather]

    return (
        <div
            className={`bg-cover bg-center min-h-screen ${backgroundImageClass}`}
        >
            <Weather />
            <Temperature />
            <Menu />
            <HistoryList />
        </div>
    )
}

export default App
