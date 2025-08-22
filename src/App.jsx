import './index.css'

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 relative">
            {/* 구름 배경 */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{
                    backgroundImage:
                        'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><filter id="cloud"><feTurbulence baseFrequency=".02" numOctaves="3"/><feColorMatrix values="1 1 1 1 1  1 1 1 1 1  1 1 1 1 1  0 0 0 0.5 0"/></filter></defs><rect width="100%" height="100%" filter="url(%23cloud)" fill="white"/></svg>\')',
                }}
            ></div>

            <div className="relative z-10 container mx-auto px-4 py-8">
                {/* 상단 네비게이션 */}
                <header className="text-center mb-8">
                    <nav className="mb-6">
                        <div className="flex justify-center space-x-8 text-lg font-medium text-gray-700">
                            <span className="cursor-pointer hover:text-blue-600">
                                일식
                            </span>
                            <span className="cursor-pointer hover:text-blue-600">
                                중식
                            </span>
                            <span className="cursor-pointer hover:text-blue-600">
                                분식
                            </span>
                            <span className="cursor-pointer hover:text-blue-600">
                                한식
                            </span>
                            <span className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1">
                                메뉴추천받기
                            </span>
                        </div>
                    </nav>
                </header>

                <main className="max-w-2xl mx-auto space-y-8">
                    {/* 날씨 선택 버튼들 */}
                    <section className="text-center">
                        <div className="flex justify-center space-x-4 mb-4">
                            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400 transition-colors">
                                흐린날
                            </button>
                            <button className="bg-yellow-300 text-gray-700 px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors">
                                햇빛 쨍쨍한 날
                            </button>
                            <button className="bg-blue-300 text-gray-700 px-4 py-2 rounded-full hover:bg-blue-400 transition-colors">
                                비오는날
                            </button>
                        </div>
                    </section>

                    {/* 온도 선택 버튼들 */}
                    <section className="text-center">
                        <div className="flex justify-center space-x-4 mb-4">
                            <button className="bg-blue-200 text-gray-700 px-4 py-2 rounded-full hover:bg-blue-300 transition-colors">
                                추운 날
                            </button>
                            <button className="bg-red-200 text-gray-700 px-4 py-2 rounded-full hover:bg-red-300 transition-colors">
                                더운 날
                            </button>
                        </div>
                    </section>

                    {/* 선택된 조합 표시 */}
                    <section className="text-center">
                        <p className="text-gray-700 text-lg font-medium">
                            흐린 날, 비오는 날엔
                        </p>
                    </section>

                    {/* 메뉴 추천 메인 섹션 */}
                    <section className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                        <h1 className="text-4xl font-bold text-gray-800 mb-8">
                            오늘 뭐 먹지?
                        </h1>

                        {/* 추천 메뉴 결과 표시 영역 */}
                        <div className="mb-6">
                            <div className="w-32 h-32 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4 relative">
                                {/* 구름 캐릭터 얼굴 */}
                                <div className="text-6xl">☁️</div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                                        <img
                                            src="/api/placeholder/60/60"
                                            alt="김치찌개"
                                            className="w-16 h-16 rounded-full object-cover"
                                        />
                                    </div>
                                </div>
                                {/* 팔 */}
                                <div className="absolute -left-8 top-1/2 w-6 h-2 bg-gray-600 rounded-full transform -rotate-45"></div>
                                <div className="absolute -right-8 top-1/2 w-6 h-2 bg-gray-600 rounded-full transform rotate-45"></div>
                                {/* 입 */}
                                <div className="absolute bottom-8 w-4 h-2 bg-gray-800 rounded-full"></div>
                            </div>

                            <button className="bg-yellow-300 text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-yellow-400 transition-colors">
                                김치찌개
                            </button>

                            <button className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-300 transition-colors">
                                다시 추천 받기
                            </button>
                        </div>
                    </section>

                    {/* 추천받은 기록 */}
                    <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                        <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
                            추천받은 기록
                        </h3>
                        <div className="flex justify-center space-x-4">
                            <button className="bg-yellow-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                                김치찌개
                            </button>
                            <button className="bg-green-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                                낫또
                            </button>
                            <button className="bg-orange-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                                치킨
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default App
