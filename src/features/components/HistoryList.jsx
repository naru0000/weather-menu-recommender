// HistoryList.jsx

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addHistory, removeHistory, resetHistory } from '../slice/historySlice'
import { saveHistory } from '../../utils/localStorage'

function HistoryList() {
    const historyData = useSelector((state) => state.history.items)

    const dispatch = useDispatch()

    // 테스트용 함수들
    const handleAddTest = () => {
        const testData = {
            menu: '김치찌개',
            time: new Date().toLocaleTimeString(),
        }
        dispatch(addHistory(testData))
    }

    const handleRemove = (index) => {
        dispatch(removeHistory(index))
    }

    const handleReset = () => {
        dispatch(resetHistory())
    }

    return (
        <section>
            <h2>추천받은 기록</h2>
            <div>
                <button onClick={handleAddTest}>테스트 추가</button>
                <button onClick={handleReset}>전체 삭제</button>
            </div>
            <ul>
                {historyData.map((item, index) => (
                    <li key={index}>
                        <span>{item.menu}</span>
                        <button onClick={() => handleRemove(index)}>
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default HistoryList
