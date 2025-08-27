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
                        style={{
                            backgroundColor:
                                currentWeather === temp ? 'lightblue' : 'white',
                            border: '1px solid black',
                            borderRadius: 100,
                            cursor: 'pointer',
                        }}
                    >
                        {temp}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Weather
