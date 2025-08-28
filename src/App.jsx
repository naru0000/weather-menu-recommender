import Weather from './features/components/WeatherSelector'
import Temperature from './features/components/TemperatureSelector'
import Menu from './features/components/MenuRecommender'
import HistoryList from './features/components/HistoryList'

function App() {
    return (
        <>
            <div className="w-full min-h-screen bg-gray-300 flex items-center justify-center py-10">
                <main className="container mx-auto flex flex-col items-center">
                    <Weather />
                    <Temperature />
                    <Menu />
                    <HistoryList />
                </main>
            </div>
        </>
    )
}

export default App
