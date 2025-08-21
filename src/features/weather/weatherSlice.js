import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentWeather: 'cold',
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        // TODO: setWeather 액션 추가
    },
})

// TODO: 액션과 리듀서 export
