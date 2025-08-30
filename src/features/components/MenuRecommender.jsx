import { useDispatch, useSelector } from 'react-redux'
import { recommendedMenu } from '../slice/menuSlice'

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
    return (
        <section className="text-center">
            <h2
                className={`${textColorClasses[weather] || 'text-weather-basic'} m-6 text-7xl font-cafe24 [-webkit-text-stroke:1px_#FFFFFF]`}
            >
                오늘 뭐 먹지?
            </h2>

            {random && (
                <div className="">
                    <img
                        className="rounded-full mx-auto "
                        src={random.src}
                        alt={random.name}
                    />
                    <p
                        className={`${textColorClasses[weather] || 'text-weather-basic'} m-6 text-4xl font-cafe24 [-webkit-text-stroke:1px_#FFFFFF]`}
                    >
                        {random.name}
                    </p>
                </div>
            )}

            <button
                onClick={handleRecommend}
                className="p-4 px-5 m-1 border border-gray-300 rounded-full text-4xl bg-white cursor-pointer font-cafe24 "
            >
                {random ? '다시 추천 받기' : '추천 받기'}
            </button>
        </section>
    )
}

export default Menu
