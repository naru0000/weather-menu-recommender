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
        <aside className="w-4/5 md:w-2/4 xl:w-1/3 p-8 mt-14 rounded-lg shadow-md flex items-center justify-center flex-col bg-white/80 font-cafe24">
            <div className="flex items-center justify-center gap-2 flex-col mb-8">
                <h2 className="text-4xl">추천받은 기록</h2>
                <button
                    onClick={handleReset}
                    className="text-gray-500 bg-white border border-gray-300 font-medium text-center text-base rounded-full text-md px-3 py-2"
                >
                    전체 삭제
                </button>
            </div>
            <ul className="flex flex-col gap-4">
                {historyData.map((item, index) => (
                    <li key={index} className="flex gap-4 items-center">
                        <span className="text-xl">{item.name}</span>
                        <button
                            className="text-gray-500 bg-white border border-gray-300 font-medium text-center rounded-full text-base px-3 py-2"
                            onClick={() => handleRemove(index)}
                        >
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default HistoryList
