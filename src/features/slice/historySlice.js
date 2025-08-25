import { createSlice } from '@reduxjs/toolkit'
import {
    loadHistory,
    saveHistory,
    clearHistory,
} from '../../utils/localStorage'

// TODO: 추천 히스토리를 위한 Redux slice를 만들어보세요
//
// 고민해볼 점들:
// 1. 히스토리 데이터는 어떤 구조로 저장할까요?
// 2. localStorage와 어떻게 연동할까요?
// 3. 어떤 액션들이 필요할까요? (추가, 삭제, 전체삭제)
