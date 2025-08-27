import { useSelector, useDispatch } from 'react-redux'
import { setTemperature } from '../slice/temperatureSlice'

const TEMPERATURES = ['cold', 'cool', 'warm', 'hot']

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
                        style={{
                            backgroundColor:
                                currentTemperature === temp
                                    ? 'lightblue'
                                    : 'white',
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

export default Temperature
