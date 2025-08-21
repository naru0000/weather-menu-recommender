import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentMenu: null,
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        // TODO: recommendMenu 액션 추가 (랜덤 선택 로직)
    },
})
