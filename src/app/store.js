import { configureStore } from '@reduxjs/toolkit'

// import weatherSlice from '../features/slice/weatherSlice'
// import temperatureSlice from '../features/slice/temperatureSlice'
// import menuSlice from '../features/slice/menuSlice'
// import historySlice from '../features/slice/historySlice'

export const store = configureStore({
    reducer: {
        // weather: weatherSlice,
        // temperature: temperatureSlice,
        // menu: menuSlice,
        // history: historySlice,
    },
})
