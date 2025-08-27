// HistoryList.jsx

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeHistory, resetHistory } from '../slice/historySlice'
import { saveHistory } from '../../utils/localStorage'

function HistoryList() {
    const historyData = useSelector((state) => state.history.items)

    const dispatch = useDispatch()

    // 로컬스토리지 자동 저장
    useEffect(() => {
        saveHistory(historyData)
    }, [historyData])

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
