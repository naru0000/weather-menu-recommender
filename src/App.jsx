import Weather from './features/components/WeatherSelector'
import Temperature from './features/components/TemperatureSelector'
import Menu from './features/components/MenuRecommender'
import HistoryList from './features/components/HistoryList'

function App() {
    return (
        <>
            <Weather />
            <Temperature />
            <Menu />
            <HistoryList />
        </>
    )
}

export default App
