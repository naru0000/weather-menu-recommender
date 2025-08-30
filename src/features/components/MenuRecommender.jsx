import { useDispatch, useSelector } from 'react-redux'
import { recommendedMenu } from '../slice/menuSlice'
import { useEffect } from 'react'
import { addHistory } from '../slice/historySlice'

const textColorClasses = {
    sunny: 'text-weather-sunny',
    cloudy: 'text-weather-cloudy',
    rainy: 'text-weather-rainy',
}

function Menu() {
    const dispatch = useDispatch()

    const weather = useSelector((state) => state.weather.value)
    const temperature = useSelector((state) => state.temperature.value)
    const { random } = useSelector((state) => state.menu)

    const handleRecommend = () => {
        dispatch(recommendedMenu({ weather, temperature }))
    }
    console.log(random)

    useEffect(() => {
        if (random) {
            dispatch(addHistory(random))
        }
    }, [random])

    return (
        <section className="text-center">
            <h2
                className={`${textColorClasses[weather] || 'text-weather-basic'} m-6  text-5xl sm:text-7xl font-cafe24 transition-colors [text-shadow:-8px_-8px_0_white,8px_-8px_0_white,-8px_8px_0_white,8px_8px_0_white,0_-8px_0_white,0_8px_0_white,-8px_0_0_white,8px_0_0_white]
`}
            >
                오늘 뭐 먹지?
            </h2>

            {random && (
                <div className="">
                    <img
                        className="w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] object-cover rounded-full mx-auto "
                        src={random.src}
                        alt={random.name}
                    />
                    <p
                        className={`${textColorClasses[weather] || 'text-weather-basic'} m-6 text-5xl  font-cafe24 transition-colors [text-shadow:-6px_-6px_0_white,6px_-6px_0_white,-6px_6px_0_white,6px_6px_0_white,0_-6px_0_white,0_6px_0_white,-6px_0_0_white,6px_0_0_white]
`}
                    >
                        {random.name}
                    </p>
                </div>
            )}

            <button
                onClick={handleRecommend}
                className="p-4 px-10 m-1 rounded-full text-2xl sm:text-4xl bg-white cursor-pointer font-cafe24 "
            >
                {random ? '다시 추천 받기' : '추천 받기'}
            </button>
        </section>
    )
}

export default Menu
