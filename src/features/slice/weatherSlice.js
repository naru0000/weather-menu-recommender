import { createSlice } from '@reduxjs/toolkit'

// TODO: 날씨 선택을 위한 Redux slice를 만들어보세요
//
// 고민해볼 점들:
// 1. 어떤 날씨 종류가 있을까요? (흐린날, 햇빛쨍쨍, 비오는날)
// 2. 초기 상태는 어떻게 설정할까요?
// 3. 어떤 액션들이 필요할까요? (날씨 선택, 선택 초기화)
//
// createSlice 문서: https://redux-toolkit.js.org/api/createSlice

// 여기서부터 직접 작성해보세요!

// src/features/slice/weatherSlice.js

const weatherSlice = createSlice({
    name: 'weather',
    initialState: { value: 'sunny' },
    reducers: {
        setWeather: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { setWeather } = weatherSlice.actions

export default weatherSlice.reducer
