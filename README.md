<div align="center">

# 오늘 뭐 먹지?

### 날씨별 메뉴 추천 웹 애플리케이션 🍽️

[<img src="https://img.shields.io/badge/-readme.md-important?style=flat&logo=google-chrome&logoColor=white" />](https://github.com/naru0000/weather-menu-recommender) [<img src="https://img.shields.io/badge/프로젝트 기간-7일-fab2ac?style=flat&logo=&logoColor=white" />]() [<img src="https://img.shields.io/badge/팀원-3명-blue?style=flat&logo=&logoColor=white" />]()

</div>

## 📝 소개

Redux Toolkit 학습을 목적으로 개발한 날씨별 메뉴 추천 웹 애플리케이션입니다.

**개발 동기**

- Redux Toolkit을 활용한 전역 상태 관리 패턴 학습
- 팀 협업을 통한 Git Flow 워크플로우 경험
- "오늘 뭐 먹지?"라는 일상적인 고민 해결

**주요 기능**

- 날씨별 메뉴 추천 (추운 날/더운 날/비오는 날)
- 추천 기록 히스토리 관리
- 로컬 스토리지를 통한 데이터 영구 저장

<br />

## 📱 화면 구성

|                    메인 화면                     |
| :----------------------------------------------: |
|   ![메인 화면](./docs/images/main-screen.png)    |
| 날씨 선택 버튼과 메뉴 추천 버튼이 있는 메인 화면 |

|                   날씨 선택 화면                   |
| :------------------------------------------------: |
| ![날씨 선택](./docs/images/weather-selection.png)  |
| 추운 날, 더운 날, 비오는 날 중 선택할 수 있는 화면 |

|                   메뉴 추천 결과                    |
| :-------------------------------------------------: |
| ![메뉴 추천](./docs/images/menu-recommendation.png) |
|    선택한 날씨에 맞는 랜덤 메뉴가 추천되는 화면     |

|                       추천 히스토리                        |
| :--------------------------------------------------------: |
| ![추천 히스토리](./docs/images/recommendation-history.png) |
|      이전 추천 기록들을 확인하고 삭제할 수 있는 화면       |

<br />

## ⚙ 기술 스택

### Frontend

<div>
<img src="https://img.shields.io/badge/React-18.0-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div>

### 상태 관리

<div>
<img src="https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white">
</div>

### 스타일링

<div>
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
</div>

### 개발 도구

<div>
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
</div>

<br />

## 🚀 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/naru0000/weather-menu-recommender.git

# 프로젝트 폴더로 이동
cd weather-menu-recommender

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 http://localhost:5173 접속
```

<br />

## 🗂 프로젝트 구조

```
src/
├── app/
│   └── store.js              # Redux store 설정
├── features/
│   ├── weather/
│   │   ├── weatherSlice.js   # 날씨 상태 관리
│   │   ├── WeatherSelector.jsx
│   │   └── index.js
│   ├── menu/
│   │   ├── menuSlice.js      # 메뉴 추천 로직
│   │   ├── MenuRecommender.jsx
│   │   ├── menuData.js       # 날씨별 메뉴 데이터
│   │   └── index.js
│   └── history/
│       ├── historySlice.js   # 히스토리 관리
│       ├── HistoryList.jsx
│       └── index.js
├── utils/
│   └── localStorage.js       # localStorage 헬퍼 함수
├── App.jsx
└── main.jsx
```

<br />

## 🤔 기술적 이슈와 해결 과정

- Redux Toolkit 상태 관리 구조 설계
    - [이슈 내용 및 해결 과정 추가 예정]

- localStorage와 Redux 상태 동기화
    - [이슈 내용 및 해결 과정 추가 예정]

- 컴포넌트 간 상태 공유 최적화
    - [이슈 내용 및 해결 과정 추가 예정]

- Git Flow 협업 과정에서의 브랜치 관리
    - [이슈 내용 및 해결 과정 추가 예정]

<br />

## 👥 프로젝트 팀원

|                   Redux 설정                    |                날씨 & 메뉴 기능                 |                  히스토리 & UI                  |
| :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: |
| ![](https://github.com/username-a.png?size=120) | ![](https://github.com/username-b.png?size=120) | ![](https://github.com/username-c.png?size=120) |
|     [팀원 A](https://github.com/username-a)     |     [팀원 B](https://github.com/username-b)     |     [팀원 C](https://github.com/username-c)     |
|              `feature/redux-setup`              |             `feature/weather-menu`              |              `feature/history-ui`               |

### 역할 분담

- **팀원 A**: Redux store 설정, slice 템플릿 제공, 팀원 가이드 문서 작성
- **팀원 B**: weatherSlice, menuSlice, 날씨별 메뉴 데이터 관리
- **팀원 C**: historySlice, localStorage 연동, 전체 UI 구현

<br />

## 📄 라이센스

MIT License
