const STORAGE_KEY = 'weather-menu-history'

export const saveHistory = (history) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
}

export const loadHistory = () => {
    // TODO: localStorage에서 데이터 불러오기
}
