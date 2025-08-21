function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">날씨별 메뉴 추천기</h1>
          <p className="text-gray-600">Redux Toolkit 학습을 위한 팀 프로젝트</p>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">날씨 선택</h2>
              <p className="text-gray-500">WeatherSelector 컴포넌트가 여기에 들어갑니다</p>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">메뉴 추천</h2>
              <p className="text-gray-500">MenuRecommender 컴포넌트가 여기에 들어갑니다</p>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">추천 히스토리</h2>
              <p className="text-gray-500">HistoryList 컴포넌트가 여기에 들어갑니다</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
