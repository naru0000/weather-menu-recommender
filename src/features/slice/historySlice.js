import { createSlice } from '@reduxjs/toolkit'
import { loadHistory } from '../../utils/localStorage'

// 기본 상태 설정
const initialState = {
    items: loadHistory(),
}

// 리듀서,액션 설정
const historySlice = createSlice({
    initialState,
    name: 'history',
    reducers: {
        addHistory: (state, action) => {
            state.items.push(action.payload)
        },
        removeHistory: (state, action) => {
            state.items.splice(action.payload, 1)
        },
        resetHistory: (state) => {
            state.items = []
        },
    },
})

export const { addHistory, removeHistory, resetHistory } = historySlice.actions
export default historySlice.reducer
