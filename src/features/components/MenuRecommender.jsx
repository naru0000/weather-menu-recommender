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
    const { random, recommended } = useSelector((state) => state.menu) || {}

    const handleRecommend = () => {
        dispatch(recommendedMenu({ weather, temperature }))
    }
    console.log(weather)
    console.log(temperature)
    console.log(random)

    return (
        <section>
            <h2
                className={`${textColorClasses[weather] || 'text-weather-basic'} font-cafe24 [-webkit-text-stroke:1px_#FFFFFF]`}
            >
                오늘 뭐 먹지?
            </h2>
            <button onClick={handleRecommend}>
                {random ? `${random.name}` : '추천 받기'}
            </button>
            {!recommended && <p>?</p>}
            {recommended && (
                <>
                    <p>
                        {random ? (
                            <img src="/" alt={random.name} />
                        ) : (
                            '해당하는 음식이 없습니다 😢'
                        )}
                    </p>
                    <button onClick={handleRecommend}>다시 추천 받기</button>
                </>
            )}
        </section>
    )
}

export default Menu
