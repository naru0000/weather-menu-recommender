import { useDispatch, useSelector } from 'react-redux'
import { setWeather } from '../slice/weatherSlice'

const WEATHER = ['rainy', 'cloudy', 'sunny']
function Weather() {
    const dispatch = useDispatch()
    const currentWeather = useSelector((state) => state.weather.value)

    return (
        <div>
            <div>
                {WEATHER.map((temp) => (
                    <button
                        key={temp}
                        onClick={() => dispatch(setWeather(temp))}
                        className={`p-2 px-4 m-1 border border-gray-300 rounded-full cursor-pointer transition-colors 
                            ${
                                currentWeather === temp
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-white text-black'
                            }`}
                    >
                        {temp}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Weather
