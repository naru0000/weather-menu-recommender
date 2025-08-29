import { createSlice } from '@reduxjs/toolkit'
import menuData from '../data/menuData.json'

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        random: null,
        recommended: false,
    },
    reducers: {
        recommendedMenu: (state, action) => {
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
            state.random = filtered[randomIndex]

            state.recommended = true
        },
    },
})

export const { recommendedMenu } = menuSlice.actions

export default menuSlice.reducer
