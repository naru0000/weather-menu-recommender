import { useSelector, useDispatch } from 'react-redux'
import { setTemperature } from '../slice/temperatureSlice'

const TEMPERATURES = ['cold','hot']

function Temperature() {
    const dispatch = useDispatch()
    const currentTemperature = useSelector((state) => state.temperature.value)

    return (
        <div>
            <div>
                {TEMPERATURES.map((temp) => (
                    <button
                        key={temp}
                        onClick={() => dispatch(setTemperature(temp))}
                        className={`p-2 px-4 m-1 border border-gray-300 rounded-full cursor-pointer transition-colors 
                            ${
                                currentTemperature === temp
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

export default Temperature
