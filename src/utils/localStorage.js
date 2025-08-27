const STORAGE_KEY = 'weather-menu-history'

// 히스토리를 저장하는 함수
export const saveHistory = (history) => {
    const saveData = JSON.stringify(history)
    localStorage.setItem(STORAGE_KEY, saveData)
}

// 히스토리를 불러오는 함수
export const loadHistory = () => {
    const loadData = localStorage.getItem(STORAGE_KEY)
    if (loadData === null) {
        return []
    } else {
        return JSON.parse(loadData)
    }
}

// 히스토리 삭제 함수
export const clearHistory = () => {
    localStorage.removeItem(STORAGE_KEY)
}
