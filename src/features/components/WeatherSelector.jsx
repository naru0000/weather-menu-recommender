import { useDispatch, useSelector } from 'react-redux'
import { setWeather } from '../slice/weatherSlice'

const WEATHER = [
    { key: 'rainy', label: '비오는 날' },
    { key: 'sunny', label: '맑은 날' },
    { key: 'cloudy', label: '흐린 날' },
]

const weatherButtonColorClasses = {
    
    null: 'text-white bg-weather-basic',
    sunny: 'text-white bg-weather-sunny',
    cloudy: 'text-white bg-weather-cloudy',
    rainy: 'text-white bg-weather-rainy',
}

function Weather() {
    const dispatch = useDispatch()
    const currentWeather = useSelector((state) => state.weather.value)

    return (
        <div>
            <div>
                {WEATHER.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => dispatch(setWeather(key))}
                        className={`p-2 px-4 m-1 border border-gray-300 rounded-full cursor-pointer transition-colors font-cafe24 
                            ${
                                currentWeather === key
                                    ? weatherButtonColorClasses[key]
                                    : 'bg-white text-black'
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Weather
