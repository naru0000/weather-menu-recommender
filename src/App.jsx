function App() {
    // TODO: 각 컴포넌트들을 import 하세요
    // TODO: Redux에서 현재 날씨 상태를 가져와서 배경색 변경
    // const currentWeather = useSelector(state => ...)

    return (
        <div className="/* TODO: 전체 컨테이너 레이아웃 (그리드 or 플렉스) */">
            {/* 헤더 */}
            <header className="/* TODO: 헤더 스타일 */">
                <h1 className="/* TODO: 제목 스타일 */">
                    🍽️ 날씨별 메뉴 추천기
                </h1>
                <p className="/* TODO: 부제목 스타일 */">
                    오늘 날씨에 딱 맞는 메뉴를 추천해드려요!
                </p>
            </header>

            {/* 메인 컨텐츠 */}
            <main className="/* TODO: 메인 영역 레이아웃 */">
                {/* 날씨 선택 섹션 */}
                <section className="/* TODO: 섹션 스타일 */">
                    <h2 className="/* TODO: 섹션 제목 */">
                        오늘 날씨는 어떤가요?
                    </h2>
                    {/* <WeatherSelector /> */}
                </section>

                {/* 온도 선택 섹션 */}
                <section className="/* TODO: 섹션 스타일 */">
                    <h2 className="/* TODO: 섹션 제목 */">온도는 어떤가요?</h2>
                    {/* <TemperatureSelector /> */}
                </section>

                {/* 메뉴 추천 섹션 */}
                <section className="/* TODO: 섹션 스타일 */">
                    {/* <MenuRecommender /> */}
                </section>
            </main>

            {/* 사이드바 - 히스토리 */}
            <aside className="/* TODO: 사이드바 스타일 */">
                {/* <HistoryList /> */}
            </aside>
        </div>
    )
}

export default App
