import { useDispatch, useSelector } from 'react-redux'
import { setWeather } from '../slice/weatherSlice'




const WEATHER = [
    { key: 'rainy', label: '비오는 날' },
    { key: 'sunny', label: '맑은 날' },
    { key: 'cloudy', label: '흐린 날' },
]

const weatherButtonColorClasses = {
    sunny: "text-black bg-weather-sunny",
    cloudy: "text-black bg-weather-cloudy",
    rainy: "text-black bg-weather-rainy",
}

function Weather() {
    const dispatch = useDispatch()
    const currentWeather = useSelector((state) => state.weather.value)

    return (
        <div>
            <div>
                {WEATHER.map(({key,label}) => (
                    <button
                        key={key}
                        onClick={() => dispatch(setWeather(key))}
                        className={`p-2 px-4 m-1 border border-gray-300 rounded-full cursor-pointer transition-colors font-cafe24 [-webkit-text-stroke:1px_#FFFFFF]
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
