import { configureStore } from '@reduxjs/toolkit'

import weatherSlice from '../features/weather/weatherSlice'
import temperatureSlice from '../features/temperature/temperatureSlice'
import menuSlice from '../features/menu/menuSlice'
import historySlice from '../features/history/historySlice'

export const store = configureStore({
    reducer: {
        weather: weatherSlice,
        temperature: temperatureSlice,
        menu: menuSlice,
        history: historySlice,
    },
})
