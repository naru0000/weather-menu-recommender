import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [], // TODO: localStorage에서 초기값 로드
}

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        // TODO: addHistory, removeHistory, clearAllHistory 액션들 추가
    },
})
