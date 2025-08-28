// HistoryList.jsx

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeHistory, resetHistory } from '../slice/historySlice'
import { saveHistory } from '../../utils/localStorage'

function HistoryList() {
    // const historyData = useSelector((state) => state.history.items)

    // 테스트용 더미 데이터
    const historyData = [
        { menu: '김치찌개' },
        { menu: '냉면' },
        { menu: '파전' },
        { menu: '치킨' },
    ]

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
        <aside className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center flex-col">
            <div className="flex items-center justify-center gap-2 flex-col">
                <h2 className="text-2xl">추천받은 기록</h2>
                <button
                    onClick={handleReset}
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium text-center rounded-full text-xs px-3 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                    전체 삭제
                </button>
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
        </aside>
    )
}

export default HistoryList
