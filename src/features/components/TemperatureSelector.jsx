import { useSelector, useDispatch } from 'react-redux'
import { setTemperature } from '../slice/temperatureSlice'

const TEMPERATURES = [
    { key: 'cold', label: '추운 날' },
    { key: 'hot', label: '더운 날' },
]

const weatherButtonColorClasses = {
    null : "bg-weather-basic text-black",
    sunny: "bg-weather-sunny text-black",
    cloudy: "bg-weather-cloudy text-black",
    rainy: "bg-weather-rainy text-black",
}

function Temperature() {
    const dispatch = useDispatch()
    const currentTemperature = useSelector((state) => state.temperature.value)
    const currentWeather = useSelector((state)=> state.weather.value)

    return (
        <div>
            <div>
                {TEMPERATURES.map(({key,label}) => (
                    <button
                        key={key}
                        onClick={() => dispatch(setTemperature(key))}
                        className={`p-2 px-4 m-1 border border-gray-300 rounded-full cursor-pointer transition-colors font-cafe24 [-webkit-text-stroke:1px_#FFFFFF]
                            ${
                                currentTemperature === key
                                    ? weatherButtonColorClasses[currentWeather]
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

export default Temperature
