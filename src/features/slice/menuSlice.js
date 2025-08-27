import { createSlice } from '@reduxjs/toolkit'
import menuData from '../data/menuData.json'
// TODO: 메뉴 추천을 위한 Redux slice를 만들어보세요
//
// 고민해볼 점들:
// 1. 추천된 메뉴 정보를 어떻게 저장할까요?
// 2. 랜덤 추천 로직은 어떻게 구현할까요?
// 3. 날씨와 온도 정보를 어떻게 받아서 처리할까요?
//
// 힌트: menuData.js에서 데이터를 import 해서 사용하세요
//

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        random: null,
        recommended: false,
    },
    reducers: {
        recommended: (state, action) => {
            const { weather, temperature } = action.payload

            const filtered = menuData.filter((menu) => {
                return (
                    (weather ? menu.weather.includes(weather) : true) &&
                    (temperature
                        ? menu.temperature.includes(temperature)
                        : true)
                )
            })

            const randomIndex = Math.floor(Math.random() * filtered.length)
            state.random = filtered[randomIndex] || null

            state.recommended = true
        },
    },
})

export const { recommended } = menuSlice.actions

export default menuSlice
